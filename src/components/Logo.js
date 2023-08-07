import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionLink = motion(Link);

const Logo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      const intervalId = setInterval(() => {
      }, 120); // Change color every 1 second

      return () => {
        clearInterval(intervalId); // Clear the interval when component unmounts or isPlaying changes
      };
    }
  }, [isPlaying]);

  const handlePlayer = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='flex items-center justify-center mt-2'>
      <MotionLink
        href='/'
        className=' w-16 h-16 bg-dark hover:bg-white hover:text-dark text-light flex items-center 
        justify-center rounded-full font-bold dark:border-light border-2 '
        onClick={handlePlayer}
      >
       UGO
       {isPlaying && <audio src='./cool.wav' autoPlay />}

      </MotionLink>

    </div>
  );
};

export default Logo;
