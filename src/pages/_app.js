import '@/styles/globals.css';
import { Montserrat } from "next/font/google";
import Head from "next/head";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import backgroundDoodles2 from "../../public/images/doodles/BackgroundRender4.png";
import Image from 'next/image';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
        <NavBar />
        <div className="opacity-5 w-full justify-center fixed xs:hidden dark:invert">
          <Image src={backgroundDoodles2} alt=""/>
        </div>
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>

    </>

  );
}
