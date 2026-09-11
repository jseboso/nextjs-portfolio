import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const FeaturedProjects = () => {
  return (
    <motion.div
      className='mb-16'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className='text-3xl md:text-2xl font-bold text-center mb-16 text-primary dark:text-primaryDark'>Featured Projects</h2>
      <div className='flex justify-center'>
        <Link href="/projects" className='flex items-center text-lg font-semibold'>
          <motion.div
            className='bg-primary dark:bg-primaryDark text-light dark:text-dark py-3 px-6 rounded-lg'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Portfolio
            <span className='ml-2'>→</span>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

export default FeaturedProjects;
