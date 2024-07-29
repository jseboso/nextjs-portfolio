import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion";

const MotionLink = motion(Link);


const Logo = () => {
    return (
        <div className='flex items-center justify-center mt-2'>
            <MotionLink href="/"
                className='w-24 h-12 bg-dark text-light flex items-center justify-center
             rounded-md text-3xl font-bold border border-solid border-transparent dark:border-light
            '
                whileHover={{
                    backgroundColor: ["#121212", "#B63E96", "#58E6D9", "#121212"],
                    transition:{duration:4, repeat: Infinity}
                }}
            >JSO</MotionLink>
        </div >
    )
}

export default Logo