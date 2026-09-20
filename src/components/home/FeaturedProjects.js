import React from 'react';
import { motion } from 'framer-motion';
import GradientButton from '@/components/GradientButton';
import { fadeInUp, revealViewport } from '@/lib/motion';

const FeaturedProjects = () => {
  return (
    <motion.div
      className='mb-16'
      initial="initial"
      whileInView="animate"
      viewport={revealViewport}
      variants={fadeInUp}
    >
      <h2 className='text-3xl md:text-2xl font-bold text-center mb-16 text-primary dark:text-primaryDark'>Featured Projects</h2>
      <div className='flex justify-center'>
        <GradientButton href="/projects" className="text-lg">
          View My Portfolio
          <span className='ml-1'>→</span>
        </GradientButton>
      </div>
    </motion.div>
  );
};

export default FeaturedProjects;
