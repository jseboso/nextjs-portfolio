import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'


const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref} />
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
            >
                <h3 className='capitalize font-bold text-2xl'>
                    {position}&nbsp;
                    <a href={companyLink}
                        target="_blank"
                        className='text-primary capitalize'
                    >
                        @{company}
                    </a>
                </h3>
                <span className='capitalize font-medium text-dark/75'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full'>
                    {work}
                </p>
            </motion.div>
        </li>
    );
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>
                Experience
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'
                />

                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details
                        position="Software Engineer Intern" company="Infinite Campus"
                        companyLink="www.google.com/"
                        time="Jan 2024-Present" address="Blaine, MN."
                        work="Developed and maintained an activity registration page used by 10 million students across
                    46 states using Angular (front-end) and Java (back-end), managing SQL database interactions
                    for data integrity. Utilized Agile Scrum methodologies, including sprints and product backlog
                    management, and collaborated in requirements analysis and solution design for optimal
                    user experience and performance."
                    />

                    <Details
                        position="Undergraduate Teaching Assistant" company="University of Minnesota"
                        companyLink="www.google.com/"
                        time="Sep 2023 - Jan 2024" address="Minneapolis, MN."
                        work="Led weekly lab sections to teach 430 students to program in Java and object-oriented concepts.
                        Maintained weekly office hours and graded problem sets and exams. Used leadership and
                        collaboration skills to effectively deliver a higher education Java-based curriculum."
                    />

                    <Details
                        position="Computer Science Instructional Coordinator" company="Osiris Organization"
                        companyLink="www.google.com/"
                        time="Jun 2023 - Sep 2023" address="St Paul, MN."
                        work="Developed a Scratch-based curriculum to introduce programming concepts to over
                        120 middle and high school students at St. Paul Public Schools. Worked one-on-one with
                        instructors to more effectively teach problem solving fundamentals and computer literacy to students."
                    />

                    <Details
                        position="Technology and Communications Intern" company="ISD 622"
                        companyLink="www.google.com/"
                        time="Jun 2023 - Sep 2023" address="Oakdale, MN."
                        work="Worked with technical support specialists to develop software troubleshooting and customer
                        service skills. Disassembled and repaired devices (iPads, Chromebooks) in a
                        district of 10,700+ students."
                    />
                </ul>

            </div>

        </div>
    )
}

export default Experience