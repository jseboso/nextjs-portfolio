import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Layout from '@/components/Layout'
import profilePic from "../../public/images/profile/JSO_portrait_outdoor.jpg";
import secondPic from "../../public/images/profile/JSOHeadshot2.jpg";
import backgroundDoodles from "../../public/images/doodles/BackgroundRender3.png";
import AnimatedText from '@/components/AnimatedText'
import { LinkArrow } from '@/components/Icons'
import TransitionEffect from '@/components/TransitionEffect'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import AnimatedNumbers from '@/components/AnimatedNumbers'

const inter = Inter({ subsets: ['latin'] });

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
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
        <AnimatedText 
          text="Jon Sebastian Osorio" 
          className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' 
        />
        
        <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
          As a motivated and results-driven Colombian-American student at the University of Minnesota,
          I am keen on utilizing my programming expertise to create innovative solutions. I possess a strong foundation in languages such as Java, C++, Python, and JavaScript, alongside significant experience with SQL, Angular, and Node.js.
          In my free time I love playing volleyball, making music, and serving as a DJ for the university&apos;s radio station, Radio K.
        </p>
        
        <div className='flex items-center self-start mt-2 lg:self-center'>
          <Link 
            href="/Jon Sebastian Osorio Resume - 2025.pdf" 
            target="_blank"
            className="flex items-center bg-dark text-light p-2.5 px-6
              rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
              border-2 border-solid border-transparent hover:border-dark
              dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
              hover:dark:border-light md:p-2 md:px-4 md:text-base"
            download={true}
          >
            Resume <LinkArrow className="w-6 ml-1" />
          </Link>
          
          <Link 
            href="mailto:jsebosorio@gmail.com"
            className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

const Biography = () => {
  return (
    <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
      <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
      <p className='font-medium'>
        {`- Hi, I'm Jon (Sebas) Osorio, a web developer and software engineer intern with a passion for creating beautiful, functional,
        and user-centered digital experiences. With 4 years of experience in the field. I am always looking for
        new and innovative ways to bring my clients' visions to life.`}
      </p>
      <p className='my-4 font-medium'>
        {`- I believe that design is about more than just making things look pretty – it's about solving problems and
        creating intuitive, enjoyable experiences for users.`}
      </p>
      <p className='font-medium'>
        {`- Whether I'm working on a website, mobile app, or
        other digital product, I bring my commitment to design excellence and user-centered thinking to
        every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.`}
      </p>
    </div>
  );
};

const ProfilePicture = () => {
  return (
    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
      bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
      <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
      <Image 
        src={secondPic} 
        alt="Sebas Osorio" 
        className='w-full h-auto rounded-2xl'
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

const Stats = () => {
  return (
    <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
      <StatItem value={25} text="satisfied clients" />
      <StatItem value={20} text="projects completed" />
      <StatItem value={4} text="years of experience" />
    </div>
  );
};

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

// About section component
const About = () => {
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

// Main Home component
export default function Home() {
  return (
    <>
      <Head>
        <title>Sebas Osorio | Home Page</title>
        <meta name="description" content="JSO Portfolio" />
      </Head>
      <TransitionEffect />
      <Image src={backgroundDoodles} className='opacity-5 w-full justify-center fixed xs:hidden' />
      
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-30 md:p-16 sm:pt-8'>
          <Hero />
        </Layout>
      </main>
      
      <About />
    </>
  );
}