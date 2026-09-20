import Head from 'next/head'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import Hero from '@/components/home/Hero'
import AboutSection from '@/components/home/AboutSection'
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
        </Layout>
      </main>
      <AboutSection />
      <FeaturedProjects />
    </>
  );
}
