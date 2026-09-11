import React from 'react';
import AnimatedNumbers from '@/components/AnimatedNumbers';

const StatItem = ({ value, text }) => {
  return (
    <div className='flex flex-col items-end justify-center xl:items-center'>
      <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
        <AnimatedNumbers value={value} />+
      </span>
      <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
        {text}
      </h2>
    </div>
  );
};

const Stats = () => {
  return (
    <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3 text-primary dark:text-primaryDark'>
      <StatItem value={20} text="satisfied clients" />
      <StatItem value={15} text="projects completed" />
      <StatItem value={3} text="years of experience" />
    </div>
  );
};

export default Stats;
