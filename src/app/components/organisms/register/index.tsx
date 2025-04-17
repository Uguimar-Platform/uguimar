"use client"

import type React from "react"
import DynamicIcon from "../../molecules/dynamic-icon"
import FormRegister from "../../molecules/formRegister"

const RegisterOrganism: React.FC = () => {
  return (
    <>
      <section className="flex flex-col items-center max-w-7xl mx-auto pt-4 min-h-[90vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full bg-[#F5F7FF] rounded-2xl p-10 scale-105">
          {/* Columna izquierda: Título e iconos */}
          <div className="flex flex-col items-center justify-center">
            {/* Título con fuente serif más robusta */}
            <h1
              className="text-[64px] text-[#334EAC] text-center mb-2 w-full"
              style={{
                fontFamily: "serif",
                fontWeight: "600",
                fontStyle: "normal",
              }}
            >
              ¡Regístrate!
            </h1>

            <div className="flex flex-col items-center">
              {/* Contenedor para el conjunto de iconos */}
              <div className="scale-125">
                <DynamicIcon
                  labelText="" // Eliminamos el texto del componente
                  fontFamily="SFProDisplay"
                  fontWeight="medium"
                  labelClassName="hidden" // Ocultamos el label del componente
                />
              </div>

              {/* Texto descriptivo separado con formato exacto de 2 líneas */}
              <p className="text-center w-[400px] -mt-4 text-[1.4rem] leading-[1.8rem] text-[#081F5C] italic font-serif">
                Aprende, crece y destaca con cursos
                <br />
                prácticos y accesibles en un solo lugar.
              </p>
            </div>
          </div>

          {/* Columna derecha: Formulario de registro */}
          <div className="flex justify-center">
            <div className="w-full max-w-[600px] scale-105">
              <FormRegister />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default RegisterOrganism
