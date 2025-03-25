import React from 'react'
import LabelAtom from '../../atoms/label'
import { CarInstructor } from '../../molecules/cardInstructor'

const FeatureInstructor : React.FC = () => {
  return (
    <>
      <section className='flex flex-col items-center max-w-4xl mx-auto'>
        <LabelAtom
          text='Aprende con los mejores'
          as='h1'
          fontFamily='SFProDisplay'
          fontWeight={700}
          textColor='text-black'
          fontSize={64}
          className='text-center'
        />
        <LabelAtom
          text='profesores'
          as='h1'
          fontFamily='SFProDisplay'
          fontWeight={700}
          textColor='#334EAC'
          fontSize={64}
          className='text-center mb-16'
        />

        <div className='flex flex-col gap-4 mt-6 w-full'>
          <CarInstructor
            imageSrc='/teacher_1.webp'
            textColor='#081F5C'
            title='Lionel Andrés Messi Cuccittini'
            description="Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown-"
            className='border border-gray-400 bg-white self-start '
          />
          <CarInstructor
            imageSrc='/teacher_2.webp'
            title='Lionel Andrés Messi Cuccittini'
            textColor='#ffffff'
            description="Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown-"
            className='border border-gray-400 bg-[#334EAC] self-end'
          />
          <CarInstructor
            imageSrc='/teacher_3.webp'
            title='Lionel Andrés Messi Cuccittini'
            textColor='#081F5C'
            description="Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown-"
            className='border border-gray-400 bg-white self-start'
          />
          <CarInstructor
            imageSrc='/teacher_4.webp'
            title='Lionel Andrés Messi Cuccittini'
            textColor='#ffffff'
            description="Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown-"
            className='border border-gray-400 bg-[#334EAC] self-end'
          />
        </div>


      </section>
    </>
  )
}

export default FeatureInstructor
