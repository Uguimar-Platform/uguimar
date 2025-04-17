'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import ButtonAtom from '@/app/components/atoms/button';
import FormResetPassword from '@/app/components/molecules/formResetPassword';

const organismResetPassword: React.FC = () => {
  const router = useRouter();

  return (
    <section className="min-h-screen m-20 items-center justify-center bg-white  px-6 py-10 rounded-[30px]">
        <div className="pb-6">
          <ButtonAtom
            icon="ArrowLeft"
            iconPosition="left"
            textColor="#334EAC"
            bgColor="transparent"
            hoverColor="#cdddf5"
            className="top-6 left-6 border border-[#334EAC]"
            fontFamily="Poppins"
            fontWeight={500}
          >
            Volver
          </ButtonAtom>  
        </div>
        <div>
          <FormResetPassword />
        </div> 
      
    </section>
  );
};

export default organismResetPassword;
