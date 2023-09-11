import React from 'react'
import {motion, useScroll} from 'framer-motion'
import PropTypes from 'prop-types';


const LiIcon = ({reference}) => {

  const {scrollYProgress} = useScroll(
      { 
          target: reference,
          offset: ["center end", "center center"]
      }
  )
  return (
    <figure className='absolute hidden md:flex left-0 stroke-dark dark:stroke-light'>
        <svg className='-rotate-90' width='75' height='75' viewBox='0 0 100 100'>
        <circle cx='75' cy='50' r='20' className=' stroke-primary  fill-none '/>
        <motion.circle cx='75' cy='50' r='20' className='stroke-[5px] dark:fill-dark fill-light'
        style={
         { pathLength: scrollYProgress}
        }/>
        <circle cx='75' cy='50' r='10' className='animate-pulse stroke-1 fill-teal-600 dark:fill-primary'/>
        </svg>
    </figure>
  )
}

LiIcon.PropTypes = {
  reference : PropTypes.any //React ref object for the parent element of this component
}

export default LiIcon