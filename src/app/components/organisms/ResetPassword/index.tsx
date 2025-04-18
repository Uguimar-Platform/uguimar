'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import ButtonAtom from '@/app/components/atoms/button';
import FormResetPassword from '@/app/components/molecules/formResetPassword';

const ResetPassword: React.FC = () => {
  const router = useRouter();

  return (
    <section className="w-full md:w-[95%] my-10 sm:my-20 mx-auto flex flex-col items-center justify-center bg-transparent md:bg-white py-6 md:px-10 md:py-10 rounded-[20px] md:rounded-[30px]">
        <div className="w-full px-4">
          <ButtonAtom
            onClick={() => router.back()}
            icon="ArrowLeft"
            iconPosition="left"
            textColor="#334EAC"
            bgColor="transparent"
            hoverColor="#cdddf5"
            className="border border-[#334EAC]" 
            fontFamily="Poppins"
            fontWeight={500}
          >
            <span className="hidden md:inline">Volver</span>
          </ButtonAtom>  
        </div>
        <div className="w-full py-8 md:py-20 text-center">
        <FormResetPassword />
        </div> 
      
    </section>
  );
};

export default ResetPassword;
