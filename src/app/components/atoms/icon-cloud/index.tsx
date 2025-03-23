"use client";

import React, { useEffect, useRef, useState } from "react";
import { renderToString } from "react-dom/server";

/**
 * Interface for icon position and styling properties in the 3D cloud.
 */
interface Icon {
  /** X-coordinate of the icon in 3D space. */
  x: number;
  /** Y-coordinate of the icon in 3D space. */
  y: number;
  /** Z-coordinate of the icon in 3D space. */
  z: number;
  /** Scale of the icon based on its depth. */
  scale: number;
  /** Opacity of the icon based on its depth. */
  opacity: number;
  /** Unique identifier for the icon. */
  id: number;
}

/**
 * Props for the IconCloud component.
 */
interface IconCloudProps {
  /** Array of React nodes (e.g., SVG icons) to display in the cloud. */
  icons?: React.ReactNode[];
  /** Array of image URLs to display in the cloud. */
  images?: string[];
}

/**
 * Easing function for smooth animations (cubic ease-out).
 * @param t - Progress value between 0 and 1.
 * @returns Eased progress value.
 */
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * A 3D interactive icon cloud component.
 * 
 * The IconCloud component renders a 3D sphere of icons or images that rotate based on mouse interaction.
 * Users can drag to rotate the cloud, hover to influence its motion, or click an icon to bring it to the front.
 * Icons can be provided as React nodes (e.g., SVGs) or image URLs. If neither is provided, numbered circles are displayed.
 * The component uses a canvas element for rendering and Tailwind CSS for basic styling.
 * 
 * @example
 * ```tsx
 * // Example with SVG icons
 * import { IconCloud } from "./IconCloud";
 * import { ReactIcon, AngularIcon, VueIcon } from "@mynaui/icons-react";
 * 
 * const icons = [<ReactIcon />, <AngularIcon />, <VueIcon />];
 * 
 * <IconCloud icons={icons} />
 * ```
 * 
 * @example
 * ```tsx
 * // Example with image URLs
 * import { IconCloud } from "./IconCloud";
 * 
 * const images = [
 *   "https://example.com/react.png",
 *   "https://example.com/angular.png",
 *   "https://example.com/vue.png",
 * ];
 * 
 * <IconCloud images={images} />
 * ```
 * 
 * @remarks
 * - This component uses Tailwind CSS for basic styling (e.g., `rounded-lg`).
 * - Icons are rendered on a canvas, so they must be compatible with canvas drawing (SVGs or images).
 * - The component includes basic accessibility attributes (`aria-label`, `role`), but further enhancements could be added.
 */
export function IconCloud({ icons, images }: IconCloudProps) {
  // Reference to the canvas element for rendering
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // State for the positions and properties of icons in the 3D cloud
  const [iconPositions, setIconPositions] = useState<Icon[]>([]);
  // State for the current rotation of the cloud (in radians)
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  // State to track if the user is dragging the cloud
  const [isDragging, setIsDragging] = useState(false);
  // State to store the last mouse position during dragging
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  // State to store the current mouse position for hover effects
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  // State for targeted rotation animation when an icon is clicked
  const [targetRotation, setTargetRotation] = useState<{
    x: number;
    y: number;
    startX: number;
    startY: number;
    distance: number;
    startTime: number;
    duration: number;
  } | null>(null);
  // Reference to store the animation frame ID for cleanup
  const animationFrameRef = useRef<number>(0);
  // Reference to store the current rotation for use in animation
  const rotationRef = useRef(rotation);
  // Reference to store offscreen canvases for rendering icons/images
  const iconCanvasesRef = useRef<HTMLCanvasElement[]>([]);
  // Reference to track which images/icons have loaded
  const imagesLoadedRef = useRef<boolean[]>([]);

  // Create offscreen canvases for icons or images to optimize rendering
  useEffect(() => {
    if (!icons && !images) return;

    const items = icons || images || [];
    imagesLoadedRef.current = new Array(items.length).fill(false);

    const newIconCanvases = items.map((item, index) => {
      const offscreen = document.createElement("canvas");
      offscreen.width = 40;
      offscreen.height = 40;
      const offCtx = offscreen.getContext("2d");

      if (offCtx) {
        if (images) {
          // Handle image URLs by loading and drawing them onto the offscreen canvas
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.src = items[index] as string;
          img.onload = () => {
            offCtx.clearRect(0, 0, offscreen.width, offscreen.height);

            // Create a circular clipping path for the image
            offCtx.beginPath();
            offCtx.arc(20, 20, 20, 0, Math.PI * 2);
            offCtx.closePath();
            offCtx.clip();

            // Draw the image within the circular clip
            offCtx.drawImage(img, 0, 0, 40, 40);

            imagesLoadedRef.current[index] = true;
          };
        } else {
          // Handle SVG icons by converting them to base64 and drawing them
          offCtx.scale(0.4, 0.4);
          const svgString = renderToString(item as React.ReactElement);
          const img = new Image();
          img.src = "data:image/svg+xml;base64," + btoa(svgString);
          img.onload = () => {
            offCtx.clearRect(0, 0, offscreen.width, offscreen.height);
            offCtx.drawImage(img, 0, 0);
            imagesLoadedRef.current[index] = true;
          };
        }
      }
      return offscreen;
    });

    iconCanvasesRef.current = newIconCanvases;
  }, [icons, images]);

  // Generate initial positions for icons on a Fibonacci sphere
  useEffect(() => {
    const items = icons || images || [];
    const newIcons: Icon[] = [];
    const numIcons = items.length || 20;

    // Use Fibonacci sphere algorithm to evenly distribute icons
    const offset = 2 / numIcons;
    const increment = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < numIcons; i++) {
      const y = i * offset - 1 + offset / 2;
      const r = Math.sqrt(1 - y * y);
      const phi = i * increment;

      const x = Math.cos(phi) * r;
      const z = Math.sin(phi) * r;

      newIcons.push({
        x: x * 100,
        y: y * 100,
        z: z * 100,
        scale: 1,
        opacity: 1,
        id: i,
      });
    }
    setIconPositions(newIcons);
  }, [icons, images]);

  // Handle mouse down event for dragging or clicking an icon
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect || !canvasRef.current) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    // Check if an icon was clicked to rotate it to the front
    iconPositions.forEach((icon) => {
      const cosX = Math.cos(rotationRef.current.x);
      const sinX = Math.sin(rotationRef.current.x);
      const cosY = Math.cos(rotationRef.current.y);
      const sinY = Math.sin(rotationRef.current.y);

      const rotatedX = icon.x * cosY - icon.z * sinY;
      const rotatedZ = icon.x * sinY + icon.z * cosY;
      const rotatedY = icon.y * cosX + rotatedZ * sinX;

      const screenX = canvasRef.current!.width / 2 + rotatedX;
      const screenY = canvasRef.current!.height / 2 + rotatedY;

      const scale = (rotatedZ + 200) / 300;
      const radius = 20 * scale;
      const dx = x - screenX;
      const dy = y - screenY;

      if (dx * dx + dy * dy < radius * radius) {
        const targetX = -Math.atan2(
          icon.y,
          Math.sqrt(icon.x * icon.x + icon.z * icon.z)
        );
        const targetY = Math.atan2(icon.x, icon.z);

        const currentX = rotationRef.current.x;
        const currentY = rotationRef.current.y;
        const distance = Math.sqrt(
          Math.pow(targetX - currentX, 2) + Math.pow(targetY - currentY, 2)
        );

        const duration = Math.min(2000, Math.max(800, distance * 1000));

        setTargetRotation({
          x: targetX,
          y: targetY,
          startX: currentX,
          startY: currentY,
          distance,
          startTime: performance.now(),
          duration,
        });
        return;
      }
    });

    setIsDragging(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  // Handle mouse movement for dragging and hover effects
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });
    }

    if (isDragging) {
      const deltaX = e.clientX - lastMousePos.x;
      const deltaY = e.clientY - lastMousePos.y;

      rotationRef.current = {
        x: rotationRef.current.x + deltaY * 0.002,
        y: rotationRef.current.y + deltaX * 0.002,
      };

      setLastMousePos({ x: e.clientX, y: e.clientY });
    }
  };

  // Handle mouse up to stop dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Animation loop for rendering the 3D cloud
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
      const dx = mousePos.x - centerX;
      const dy = mousePos.y - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const speed = 0.003 + (distance / maxDistance) * 0.01;

      // Apply targeted rotation if an icon was clicked
      if (targetRotation) {
        const elapsed = performance.now() - targetRotation.startTime;
        const progress = Math.min(1, elapsed / targetRotation.duration);
        const easedProgress = easeOutCubic(progress);

        rotationRef.current = {
          x:
            targetRotation.startX +
            (targetRotation.x - targetRotation.startX) * easedProgress,
          y:
            targetRotation.startY +
            (targetRotation.y - targetRotation.startY) * easedProgress,
        };

        if (progress >= 1) {
          setTargetRotation(null);
        }
      } else if (!isDragging) {
        // Apply gentle rotation based on mouse position when not dragging
        rotationRef.current = {
          x: rotationRef.current.x + (dy / canvas.height) * speed,
          y: rotationRef.current.y + (dx / canvas.width) * speed,
        };
      }

      // Render each icon with 3D transformations
      iconPositions.forEach((icon, index) => {
        const cosX = Math.cos(rotationRef.current.x);
        const sinX = Math.sin(rotationRef.current.x);
        const cosY = Math.cos(rotationRef.current.y);
        const sinY = Math.sin(rotationRef.current.y);

        const rotatedX = icon.x * cosY - icon.z * sinY;
        const rotatedZ = icon.x * sinY + icon.z * cosY;
        const rotatedY = icon.y * cosX + rotatedZ * sinX;

        const scale = (rotatedZ + 200) / 300;
        const opacity = Math.max(0.2, Math.min(1, (rotatedZ + 150) / 200));

        ctx.save();
        ctx.translate(
          canvas.width / 2 + rotatedX,
          canvas.height / 2 + rotatedY
        );
        ctx.scale(scale, scale);
        ctx.globalAlpha = opacity;

        if (icons || images) {
          // Render icons or images if provided and loaded
          if (
            iconCanvasesRef.current[index] &&
            imagesLoadedRef.current[index]
          ) {
            ctx.drawImage(iconCanvasesRef.current[index], -20, -20, 40, 40);
          }
        } else {
          // Render numbered circles as a fallback
          ctx.beginPath();
          ctx.arc(0, 0, 20, 0, Math.PI * 2);
          ctx.fillStyle = "#4444ff";
          ctx.fill();
          ctx.fillStyle = "white";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.font = "16px Arial";
          ctx.fillText(`${icon.id + 1}`, 0, 0);
        }

        ctx.restore();
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [icons, images, iconPositions, isDragging, mousePos, targetRotation]);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={400}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="rounded-lg"
      aria-label="Interactive 3D Icon Cloud"
      role="img"
    />
  );
}