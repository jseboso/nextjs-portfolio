import React from 'react';
import Layout from './Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LinkArrow } from './Icons';

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark
            dark:text-light dark:border-light font-medium
            bg-light dark:bg-dark
        '>
            <Layout className='py-8'>
                <div className="flex flex-col items-center mb-8">
                    <h2 className="text-xl font-bold mb-4">Connect With Me</h2>
                    <div className="flex gap-6 mb-4">
                        <SocialLink href="https://www.linkedin.com/in/jon-s-osorio/" label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </SocialLink>
                        <SocialLink href="https://github.com/jseboso" label="GitHub">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </SocialLink>
                        <SocialLink href="mailto:jsebosorio@gmail.com" label="Email">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </SocialLink>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8 md:grid-cols-2 sm:grid-cols-1">
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-lg font-semibold mb-3">Navigation</h3>
                        <ul className="space-y-2">
                            <li><FooterLink href="/">Home</FooterLink></li>
                            <li><FooterLink href="/projects">Projects</FooterLink></li>
                            {/* <li><FooterLink href="/graphic-design">Graphic Design</FooterLink></li> */}
                        </ul>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-lg font-semibold mb-3">About Me</h3>
                        <ul className="space-y-2">
                            <li><FooterLink href="https://www.radiok.org/" target="_blank">Radio K</FooterLink></li>
                            <li><FooterLink href="https://cse.umn.edu/" target="_blank">UMN Computer Science</FooterLink></li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center md:items-start md:col-span-2 sm:col-span-1">
                        <h3 className="text-lg font-semibold mb-3">Get In Touch</h3>
                        <FooterLink href="mailto:jsebosorio@gmail.com" target="_blank">Say hello <LinkArrow className="w-5 ml-1" /></FooterLink>
                        <p className="mt-4 text-center md:text-left text-sm max-w-md">
                            {`I'm always open to discussing new projects, creative ideas, or opportunities!`}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center pt-8 border-t border-dark/10 dark:border-light/10">
                    <div className="flex items-center mb-4">
                        Built with
                        <motion.span
                            className="text-primary dark:text-primaryDark text-2xl px-1"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
                        >
                            &#9825;
                        </motion.span>
                        by&nbsp;
                        <Link href="https://www.linkedin.com/in/jon-s-osorio/" className="font-bold
                            relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] 
                            after:bg-dark dark:after:bg-light after:origin-left after:scale-x-0 
                            hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out
                        ">
                            Sebas
                        </Link>
                    </div>
                    <p className="text-sm text-dark/70 dark:text-light/70">
                        {new Date().getFullYear()} &copy; All Rights Reserved.
                    </p>
                </div>
            </Layout>
        </footer>
    );
};

const SocialLink = ({ href, children, label }) => {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group p-2 rounded-full bg-dark/5 dark:bg-light/5 hover:bg-dark/10 dark:hover:bg-light/10 transition-colors"
            whileHover={{ y: -5 }}
            aria-label={label}
        >
            <span className="text-dark dark:text-light">
                {children}
            </span>
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-dark text-light dark:bg-light dark:text-dark text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {label}
            </span>
        </motion.a>
    );
};

const FooterLink = ({ href, children, target = "_self" }) => {
    return (
        <Link
            href={href}
            target={target}
            className="relative text-dark/80 dark:text-light/80 hover:text-dark dark:hover:text-light
                after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] 
                after:bg-dark dark:after:bg-light after:origin-right after:scale-x-0 
                hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300"
        >
            {children}
        </Link>
    );
};

export default Footer;