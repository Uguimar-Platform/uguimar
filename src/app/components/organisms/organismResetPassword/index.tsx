'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import ButtonAtom from '@/app/components/atoms/button';
import FormResetPassword from '@/app/components/molecules/formResetPassword';

const OrganismResetPassword: React.FC = () => {
  const router = useRouter();

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#E7F1FF] px-4 py-10 relative">
      
      <div className="absolute top-6 left-6">
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
          Volver
        </ButtonAtom>
      </div>

      
      <div className="w-full max-w-3xl bg-white rounded-[30px] px-6 py-10 shadow-md">
        <FormResetPassword />
      </div>
    </section>
  );
};

export default OrganismResetPassword;
