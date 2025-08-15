import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Layout from '@/components/Layout'
import profilePic from "../../public/images/profile/JSO_portrait_outdoor.jpg";
import secondPic from "../../public/images/profile/JSOHeadshot2.jpg";
import AnimatedText from '@/components/AnimatedText'
import { LinkArrow } from '@/components/Icons'
import TransitionEffect from '@/components/TransitionEffect'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import AnimatedNumbers from '@/components/AnimatedNumbers'
import { motion } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] });

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const AnimatedButton = ({ href, download, className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        target={download ? "_blank" : "_self"}
        className={className}
        download={download}
      >
        {children}
      </Link>
    </motion.div>
  );
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

const Biography = () => {
  return (
    <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
      <h2 className='mb-4 text-2xl font-bold uppercase text-primary dark:text-primaryDark'>Biography</h2>
      <p className='font-medium text-xl'>
        {`Hi, I'm Jon (Sebas) Osorio, a full-stack software engineer with a passion for creating beautiful, functional,
        and user-centered digital experiences. With over 3 years of experience in the field. I am always looking for
        new and innovative ways to bring my clients' visions to life.`}
      </p>
      <p className='my-4 font-medium text-xl'>
        {`I believe that design is about more than just making things look pretty - it's about solving problems and
        creating intuitive, enjoyable experiences for users.`}
      </p>
      <p className='font-medium text-xl'>
        {`Whether I'm working on a website, mobile app, or
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
    <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3 text-primary dark:text-primaryDark'>
      <StatItem value={20} text="satisfied clients" />
      <StatItem value={15} text="projects completed" />
      <StatItem value={3} text="years of experience" />
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

const FeaturedProjects = () => {
  return (
    <motion.div 
      className='mb-16'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className='text-3xl font-bold text-center mb-16 text-primary dark:text-primaryDark'>Featured Projects</h2>
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

// Main Home component
export default function Home() {
  return (
    <>
      <Head>
        <title>Sebas Osorio | Home Page</title>
        <meta name="description" content="JSO Portfolio" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-30 md:p-16 sm:pt-8'>
          <Hero />
          <div className='mt-24'>
            <AnimatedText 
              text="Passion for creating digital experiences" 
              className='!text-4xl !mb-16 text-primary dark:text-primaryDark lg:!text-3xl sm:!text-2xl'
            />
            
            <div className='grid grid-cols-3 gap-8 lg:grid-cols-2 md:grid-cols-1'>
              <FeatureCard 
                icon="💻"
                title="Web Development"
                description="Building responsive, accessible, and performant web applications using modern technologies."
              />
              <FeatureCard 
                icon="🎨"
                title="UI/UX Design"
                description="Creating intuitive and beautiful user interfaces that provide excellent user experiences."
              />
              <FeatureCard 
                icon="🔧"
                title="Software Engineering"
                description="Developing robust, scalable, and maintainable software solutions for complex problems."
              />
            </div>
          </div>
        </Layout>
      </main>
      <About />
      <FeaturedProjects />
    </>
  );
}