import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className='bg-light dark:bg-dark p-6 rounded-2xl shadow-lg border border-dark/10 dark:border-light/10'
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className='text-3xl text-primary dark:text-primaryDark mb-4'>{icon}</div>
      <h3 className='text-xl font-bold mb-2'>{title}</h3>
      <p className='text-dark/75 dark:text-light/75'>{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
