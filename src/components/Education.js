import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'
import useTimelineLine from './hooks/useTimelineLine'


const Details = ({ type, time, place, info }) => {
    return (
        <li className='my-8 first:mt-0 last:mb-0 w-full flex items-center gap-x-6 md:gap-x-4'>
            <div data-timeline-icon className='relative z-10 shrink-0 flex items-center justify-center w-[75px] md:w-[60px] xs:w-[40px]'>
                <LiIcon />
            </div>
            <motion.div
                className='flex-1 rounded-2xl bg-light/[0.04] dark:bg-light/[0.05] backdrop-blur-md
                border border-dark/5 dark:border-light/10 p-6 md:p-4 xs:p-3'
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                    {type}
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {info}
                </p>
            </motion.div>
        </li>
    );
}

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );
    const line = useTimelineLine(ref);
    return (
        <div>
            <motion.h2
                className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-80px' }}
            >
                Education
            </motion.h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div
                    style={{ scaleY: scrollYProgress, top: line.top, height: line.height }}
                    className='absolute left-[34.5px] w-[6px] bg-brandGradient origin-top rounded-full
                    md:w-[3px] md:left-[28.5px] xs:left-[18.5px]
                    '
                />

                <ul className='w-full flex flex-col'>
                    <Details
                        type="Bachelor Of Science In Computer Science (with Distinction)"
                        time="2021 - May 2025"
                        place="University of Minnesota Twin Cities"
                        info="College of Science and Engineering - Relevant courses include Data Structures and Algorithms, User Interface Design, Operating
                        Systems, Software Engineering I, Social Computing, Computer Graphics, Internet Programming,
                        Program Design and Development, Artificial Intelligence.
                        GPA: 3.86, Dean's List Award (x6)"
                    />
                    <Details
                        type="High School Diploma"
                        time="2017 - 2021"
                        place="Math and Science Academy, Woodbury"
                        info="Relevant activities include LINK Crew, Boy's Volleyball, Academic Triathlon, LEGO Robotics.
                        GPA: 4.0"
                    />
                </ul>

            </div>

        </div>
    )
}

export default Education
