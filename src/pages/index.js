import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'
import Hero from '@/components/home/Hero'
import AboutSection from '@/components/home/AboutSection'
import FeatureCard from '@/components/home/FeatureCard'
import FeaturedProjects from '@/components/home/FeaturedProjects'

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
      <AboutSection />
      <FeaturedProjects />
    </>
  );
}
