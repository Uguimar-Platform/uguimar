"use client";
import LinkAtom from "../../atoms/links";

type FontFamily = "Poppins" | "Onest" | "SFProDisplay";
type FontWeight =
  | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  | "thin" | "extralight" | "light" | "normal" | "regular"
  | "medium" | "semibold" | "bold" | "extrabold" | "black";

interface NavigationMenuProps {
  fontFamily?: FontFamily;
  fontWeight?: FontWeight;
  direction?: "horizontal" | "vertical";
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({
  fontFamily = "Onest",
  fontWeight = "medium",
  direction = "horizontal",
}) => {
  const menuItems = [
    { label: "Inicio", route: "/" },
    { label: "Cursos", route: "/cursos" },
    { label: "Planes", route: "/planes" },
    { label: "FAQ", route: "/faq" },
    { label: "Rutas", route: "/rutas" },
    { label: "Feedback", route: "/feedback" },
  ];

  if (direction === "vertical") {
    return (
      <nav className="w-full flex flex-col items-center gap-2 px-4">
        {menuItems.map((item, index) => (
          <LinkAtom
            key={index}
            label={item.label}
            to={item.route}
            className="w-full py-2 hover:bg-[#7096D1] hover:text-white rounded-md transition-colors"
            fontFamily={fontFamily}
            fontWeight={fontWeight}
          />
        ))}
      </nav>
    );
  }

  // horizontal (default)
  return (
    <nav className="hidden md:flex max-w-[1200px] mx-auto bg-[#F9FCFF] rounded-full border-2 border-[#334EAC] p-1.5 justify-center">
      {menuItems.map((item, index) => (
        <li
          key={index}
          className="hover:bg-[#7096D1] hover:text-white rounded-full px-8 py-1 font-medium font-['Onest'] flex items-center h-full list-none"
        >
          <LinkAtom
            label={item.label}
            to={item.route}
            className="text-[15px]"
            fontFamily={fontFamily}
            fontWeight={fontWeight}
          />
        </li>
      ))}
    </nav>
  );
};

export default NavigationMenu;
