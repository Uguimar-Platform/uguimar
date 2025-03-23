"use client";
import { CarInstructor } from "./components/molecules/cardInstructor";

export default function Home() {
  return (
    <>
    <div className="flex flex-col p-8 w-full justify-center items-center gap-4">
      {/* Valeria Montes Rivas */}
      <CarInstructor
        imageSrc="/Course_Python.webp"
        title="Valeria Montes Rivas"
        description="Simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown—"
        textColor="text-white"
        font="poppins"
        fontWeight={400}
        className="bg-[#3B82F6] w-1/2"
      />

        {/* Andrés Ferrer Guzmán */}
        <CarInstructor
          imageSrc="https://example.com/andres.jpg"
          title="Andrés Ferrer Guzmán"
          description="Simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown—"
          textColor="text-gray-800"
          font="poppins"
          fontWeight={400}
          className="w-1/2"
        />

        {/* Emilio Vargas Sotelo */}
        <CarInstructor
          imageSrc="https://example.com/emilio.jpg"
          title="Emilio Vargas Sotelo"
          description="Simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown—"
          textColor="text-gray-800"
          font="poppins"
          fontWeight={400}
          className="w-1/2"
        />

        {/* Mateo Cisneros Luján */}
        <CarInstructor
          imageSrc="https://example.com/mateo.jpg"
          title="Mateo Cisneros Luján"
          description="Simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown—"
          textColor="text-gray-800"
          font="poppins"
          fontWeight={400}
          className="w-1/2"
        />
      </div>
    </>
  );
}
