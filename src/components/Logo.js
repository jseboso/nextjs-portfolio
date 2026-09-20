import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion";
import brandColors from '@/lib/colors';

const MotionLink = motion.create(Link);


const Logo = () => {
    return (
        <div className='flex items-center justify-center mt-2'>
            <MotionLink href="/"
                className='w-24 h-12 bg-dark text-light flex items-center justify-center
             rounded-md text-3xl font-bold border border-solid border-transparent dark:border-light
            '
                whileHover={{
                    backgroundColor: [brandColors.dark, brandColors.primary, brandColors.primaryDark, brandColors.dark],
                    transition:{duration:4, repeat: Infinity}
                }}
            >JSO</MotionLink>
        </div >
    )
}

export default Logo