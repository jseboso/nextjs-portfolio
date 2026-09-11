import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import profilePic from "../../../public/images/profile/JSO_portrait_outdoor.jpg";
import AnimatedText from '@/components/AnimatedText';
import { LinkArrow } from '@/components/Icons';
import AnimatedButton from './AnimatedButton';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const Hero = () => {
  return (
    <div className="flex items-center justify-between w-full lg:flex-col">
      {/* Profile Picture Headshot */}
      <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
        bg-light p-8 m-6 mr-10 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
        <Image
          src={profilePic}
          alt="Sebas Osorio"
          className='w-full h-auto rounded-2xl'
          priority
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
        <AnimatedText
          text="Jon Sebastian Osorio"
          className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'
        />

        <p className='my-4 text-xl font-medium md:text-sm sm:text-xs'>
          As a motivated and results-driven Colombian-American University of Minnesota graduate,
          I am keen on utilizing my programming expertise to create innovative solutions. I possess a strong foundation in languages such as Java, C++, Python, and JavaScript, alongside significant experience with SQL, Angular, and Node.js.
          In my free time I love playing volleyball, making music, and serving as a DJ for the university&apos;s radio station, Radio K.
        </p>

        <motion.div
          className='flex items-center self-start mt-4 lg:self-center space-x-4'
          variants={fadeIn}
        >
          <AnimatedButton
            href="/Jon Sebastian Osorio Resume - 2025.pdf"
            target="_blank"
            className="flex items-center bg-primary text-light p-2.5 px-6
              rounded-lg text-lg font-semibold
              border-2 border-solid border-transparent hover:bg-transparent hover:text-primary hover:border-primary
              dark:bg-primaryDark dark:text-dark dark:hover:bg-transparent dark:hover:text-primaryDark dark:hover:border-primaryDark
              md:p-2 md:px-4 md:text-base transition-all duration-300"
            download={true}
          >
            Resume <LinkArrow className="w-6 ml-1" />
          </AnimatedButton>

          <AnimatedButton
            href="mailto:jsebosorio@gmail.com"
            className="text-lg font-medium relative text-dark dark:text-light
                      after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px]
                      after:bg-dark dark:after:bg-light after:origin-left after:scale-x-0
                      hover:after:scale-x-100 after:transition-transform after:duration-300 md:text-base"
          >
            Contact Me
          </AnimatedButton>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
