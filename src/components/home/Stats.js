import React from 'react';
import AnimatedNumbers from '@/components/AnimatedNumbers';

const StatItem = ({ value, text }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-1 rounded-2xl
      border border-primary/20 dark:border-primaryDark/20
      bg-primary/5 dark:bg-primaryDark/5 backdrop-blur-sm
      px-6 py-5 md:px-4 md:py-4'>
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
    <div className='col-span-2 flex flex-col items-stretch justify-between gap-4 xl:col-span-8 xl:flex-row xl:items-stretch md:order-3 text-primary dark:text-primaryDark'>
      <StatItem value={20} text="satisfied clients" />
      <StatItem value={15} text="projects completed" />
      <StatItem value={3} text="years of experience" />
    </div>
  );
};

export default Stats;
