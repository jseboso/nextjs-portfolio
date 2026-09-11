import React from 'react';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Biography from './Biography';
import ProfilePicture from './ProfilePicture';
import Stats from './Stats';

const AboutSection = () => {
  return (
    <main className='flex w-full flex-col items-center justify-center dark:text-light'>
      <Layout className='pt-0'>
        <AnimatedText text="About Me" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
        <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
          <Biography />
          <ProfilePicture />
          <Stats />
        </div>
        <Skills />
        <Experience />
        <Education />
      </Layout>
    </main>
  );
};

export default AboutSection;
