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
            imageSrc='/Course_Python.webp'
            textColor='#081F5C'
            title='Lionel Andrés Messi Cuccittini'
            description='lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.'
            className='border border-gray-400 bg-white self-start '
          />
          <CarInstructor
            imageSrc='/Course_Python.webp'
            title='Lionel Andrés Messi Cuccittini'
            textColor='#ffffff'
            description='lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.'
            className='border border-gray-400 bg-[#334EAC] self-end'
          />
          <CarInstructor
            imageSrc='/Course_Python.webp'
            title='Lionel Andrés Messi Cuccittini'
            textColor='#081F5C'
            description='lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.'
            className='border border-gray-400 bg-white self-start'
          />
          <CarInstructor
            imageSrc='/Course_Python.webp'
            title='Lionel Andrés Messi Cuccittini'
            textColor='#ffffff'
            description='lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.'
            className='border border-gray-400 bg-[#334EAC] self-end'
          />
        </div>


      </section>
    </>
  )
}

export default FeatureInstructor
