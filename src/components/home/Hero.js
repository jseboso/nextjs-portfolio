import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import profilePic from "../../../public/images/profile/JSO_portrait_outdoor.jpg";
import AnimatedText from '@/components/AnimatedText';
import GradientBorderCard from '@/components/GradientBorderCard';
import GradientButton from '@/components/GradientButton';
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
    <div className="grid grid-cols-[2fr_3fr] gap-x-12 items-center w-full max-w-[1168px] mx-auto
      md:gap-x-8 lg:grid-cols-1 lg:gap-y-10">
      {/* Profile Picture Headshot */}
      <GradientBorderCard
        rounded="rounded-2xl"
        className="w-full mx-auto lg:max-w-sm md:order-1"
        innerClassName="p-8"
      >
        <Image
          src={profilePic}
          alt="Sebas Osorio"
          className='w-full h-auto rounded-2xl'
          priority
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </GradientBorderCard>

      <div className='flex flex-col items-center self-center lg:w-full lg:text-center'>
        <AnimatedText
          text="Jon Sebastian Osorio"
          className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl
            !text-transparent !bg-clip-text !bg-brandGradientText bg-[length:200%_auto] animate-shimmer'
        />

        <p className='my-4 max-w-prose self-start lg:self-center text-xl font-medium md:text-sm sm:text-xs'>
          Colombian-American software engineer and University of Minnesota graduate, building with Java, Python, JavaScript, and modern web tools like React and Node.js.
          Off the clock, I&apos;m playing volleyball, making music, or running.
        </p>

        <motion.div
          className='flex items-center self-start mt-4 lg:self-center space-x-4'
          variants={fadeIn}
        >
          <GradientButton
            href="/Jon Sebastian Osorio - Resume 2026.pdf"
            download={true}
            className="text-lg md:text-base"
          >
            Resume <LinkArrow className="w-6 ml-1" />
          </GradientButton>

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
