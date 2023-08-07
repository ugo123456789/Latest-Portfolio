import Link from 'next/link'
import React from 'react'
import { TextIcon } from './icons'

const HireMe = () => {  
  return (
<div className='fixed lg:left-4 lg:bottom-4 lg:right-auto lg:top-auto flex right-2 left-auto top-0 bottom-auto items-center justify-center '>
  <div className='w-32 lg:w-48 h-auto flex items-center justify-center relative'>
    <TextIcon className="fill-dark animate-spin-slow dark:fill-light" />
<Link href='mailto:ugonnagodson512@gmail.com'
        className='dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
        bg-dark text-light shadow-lg border-2 border-dark w-14 h-14 text-[10px] lg:text-[16px] lg:w-20 lg:h-20 rounded-full font-semibold hover:text-dark
        hover:bg-light '
      >
       HireMe
       </Link>
  </div>
</div>

  )
}

export default HireMe