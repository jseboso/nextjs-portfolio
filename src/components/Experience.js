import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'


const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                    {position}&nbsp;
                    <a href={companyLink}
                        target="_blank"
                        className='text-primary dark:text-primaryDark capitalize'
                    >
                        @{company}
                    </a>
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full md:text-sm'>
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
        <div className='my-40'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Professional Experience
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                    md:w-[2px] md:left-[30px] xs:left-[20px]
                    '
                />

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        position="Software Engineer I" company="Infinite Campus"
                        companyLink="https://www.infinitecampus.com/"
                        time="Apr 2025 - Present" address="Blaine, MN."
                        work="Engineered full-stack features for the Stores & Activities team using Angular, Java, and SQL,
                        delivering new tools like the Activity History page to over 10 million students. Boosted front-end
                        performance by up to 50% through component optimization and enhanced accessibility for screen reader
                        users. Developed RESTful APIs, integrated Stripe for payment processing, and improved code quality
                        with automated tests using Cypress and Jest. Demonstrated leadership by mentoring a software
                        engineering intern and facilitating Agile sprints."
                    />

                    <Details
                        position="Software Engineer Intern" company="Infinite Campus"
                        companyLink="https://www.infinitecampus.com/"
                        time="Jan 2024 - April 2025" address="Blaine, MN."
                        work="Developed and maintained an activity registration page used by hundreds of school districts across 47 states
                        using Angular (front-end) and Java (back-end). Built and integrated RESTful APIs, managed SQL data integrity, and
                        implemented automated unit testing. Collaborated in Agile sprints on requirements analysis,
                        accessibility improvements, and new feature design."
                    />

                    <Details
                        position="Undergraduate Teaching Assistant" company="University of Minnesota"
                        companyLink="https://twin-cities.umn.edu/"
                        time="Sep 2023 - Jan 2024" address="Minneapolis, MN."
                        work="Mentored 430+ students in foundational Java and Object-Oriented Programming, clarifying complex
                        technical concepts during weekly labs and office hours. Reviewed student code submissions, providing
                        constructive feedback on programming style, efficiency, and logic to reinforce software development
                        best practices."
                    />

                    <Details
                        position="Computer Science Instructional Coordinator" company="Osiris Organization"
                        companyLink="https://osirisorganization.org/"
                        time="Jun 2023 - Sep 2023" address="St Paul, MN."
                        work="Developed a Scratch and Python-based curriculum to introduce programming concepts to over
                        120 middle and high school students at St. Paul Public Schools. Worked one-on-one with
                        instructors to more effectively teach problem solving fundamentals and computer literacy to students."
                    />

                    <Details
                        position="Technology and Communications Intern" company="ISD 622"
                        companyLink="https://www.isd622.org/"
                        time="Jun 2023 - Sep 2023" address="Oakdale, MN."
                        work="Collaborated with technical support specialists to debug district-wide educational
                        software and enhance internal support systems. Assisted in designing and developing a technical
                        services webpage to streamline device repair requests and IT resources for a district of 10,700+
                        students. Also gained hands-on experience repairing and configuring devices such as iPads
                        and Chromebooks."
                    />
                </ul>

            </div>

        </div>
    )
}

export default Experience