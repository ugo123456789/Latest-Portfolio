import React from 'react'

import html from "../../public/images/assets/html.png"
import css from "../../public/images/assets/css.png"
import javascipt from "../../public/images/assets/javascript.png"
import reactImage from "../../public/images/assets/react.png"
import nextjs from "../../public/images/assets/nextjs.png"
import tailwind from "../../public/images/assets/tailwind.png"
import github from "../../public/images/assets/github.png"
import redux from "../../public/images/assets/redux.png"
<<<<<<< HEAD
=======
import typescript from  "../../public/images/assets/typescript.png"
>>>>>>> 8d8849b (Typescript added. LadderHills Project added)

import Image from 'next/image'




const techs = [
    {
        id: 1,
        src: html,
        title: 'HTML',
        style: 'shadow-orange-500 bg-gray-300'
    },
    {
        id: 2,
        src: css,
        title: 'CSS',
        style: 'shadow-blue-500 bg-gray-300'
    },
    {
        id: 3,
        src: javascipt,
        title: 'JavaScript',
        style: 'shadow-yellow-500 bg-gray-300'
    },
    {
        id: 4,
        src: reactImage,
        title: 'React',
        style: 'shadow-blue-500 bg-gray-300'
    },
    {
        id: 5,
        src: nextjs,
        title: 'NextJS',
        style: 'shadow-gray-400 bg-gray-300'
    },
    {
        id: 7,
        src: tailwind,
        title: 'Tailwind',
        style: 'shadow-sky-500 bg-gray-300'
    },
    {
        id: 8,
        src: github,
        title: 'Github',
        style: 'shadow-gray-500 bg-gray-300'
    },
    {
        id: 9,
        src: redux,
        title: 'Redux',
        style: 'shadow-purple-500 bg-gray-300'
    },
<<<<<<< HEAD
=======
    {
      id: 10,
      src: typescript,
      title: 'Typescript',
      style: 'shadow-purple-500 bg-gray-300'
  },
>>>>>>> 8d8849b (Typescript added. LadderHills Project added)
];



const Skills = () => {

  return (
    <div name='experience' className='dark:text-light w-full'>
    <div className='dark:text-light max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div>
        <p className='dark:text-light text-5xl md:text-8xl mt-16 md:mt-32 w-full justify-center text-center font-bold p-2 text-dark '>Skills</p>
        <p className='dark:text-light py-4 md:py-6 text-dark text-lg md:text-xl'>Technologies I work with</p>
      </div>
  
      <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 text-center py-4 md:py-8 px-6 sm:px-8'>
        {techs.map((tech) => {
          const { id, src, title, style } = tech;
          return (
            <div key={id} className={'shadow-lg hover:scale-105 duration-500 py-2 rounded-lg ' + style}>
              <Image src={src} alt={title} className='w-16 md:w-20 mx-auto' />
              <p className='mt-2 text-dark text-sm md:text-base'>{title}</p>
            </div>
          );
        })}
      </div>
    </div>
  </div>
  

  )
}

export default Skills