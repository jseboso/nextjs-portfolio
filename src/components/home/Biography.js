import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, revealViewport } from '@/lib/motion';

const Biography = () => {
  return (
    <motion.div
      className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'
      initial="initial"
      whileInView="animate"
      viewport={revealViewport}
      variants={fadeInUp}
    >
      <h2 className='mb-4 text-3xl md:text-2xl font-bold text-primary dark:text-primaryDark'>Biography</h2>
      <p className='font-medium text-xl'>
        {`I'm Jon (Sebas) Osorio, a full-stack software engineer with 3+ years building products end to end, from database to backend to frontend. I care as much about how something works as how it feels to use.`}
      </p>
      <p className='my-4 font-medium text-xl'>
        {`Good design solves problems before it looks good. Whether it's a web app, a mobile product, or an internal tool, I bring that same user-first thinking to every build.`}
      </p>
    </motion.div>
  );
};

export default Biography;
