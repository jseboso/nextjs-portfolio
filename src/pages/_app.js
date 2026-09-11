import '@/styles/globals.css';
import { Montserrat } from "next/font/google";
import Head from "next/head";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import BackgroundGraphics from '@/components/BackgroundGraphics';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  
  useEffect(() => {
    if (!localStorage.theme) {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
    }
  }, []);
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen relative z-0 transition-colors duration-300`}>
        <NavBar />
        <BackgroundGraphics />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}