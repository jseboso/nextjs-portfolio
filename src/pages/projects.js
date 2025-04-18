import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import React, { useState } from "react";
import { GithubIcon } from "@/components/Icons";
import testProjectImage from "../../public/images/projects/codeScreenshot.png"
import project0 from "../../public/images/projects/portfolio.png"
import project1 from "../../public/images/projects/schedule.png"
import project2 from "../../public/images/projects/scale-explorer.png"
import { motion } from "framer-motion"
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <motion.article 
      className="w-full flex items-center justify-between relative rounded-br-2xl
      rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
      lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-dark
      rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
      ' />
      <Link href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage 
          src={img} 
          alt={title} 
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-2xl">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-4 flex items-center">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link 
              href={github} 
              target="_blank" 
              className="w-10 mr-4 bg-dark text-light p-2 rounded-full flex items-center justify-center dark:bg-light dark:text-dark"
            >
              <GithubIcon className="w-6 h-6" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href={link} 
              target="_blank"
              className="rounded-lg bg-primary text-light p-2 px-6 text-lg font-semibold
              dark:bg-primaryDark dark:text-dark hover:bg-primary/90 dark:hover:bg-primaryDark/90
              transition-colors duration-300 sm:px-4 sm:text-base"
            >
              Visit Project
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <motion.article 
      className="w-full flex flex-col items-center justify-center rounded-2xl
      border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
      xs:p-4 hover:shadow-xl transition-all duration-300"
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
      rounded-br-3xl dark:bg-dark md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
      ' />
      <Link href={link} target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage 
          src={img} 
          alt={title} 
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={link}
              target="_blank"
              className="px-4 py-2 rounded-md bg-primary text-light font-medium md:text-sm
              dark:bg-primaryDark dark:text-dark hover:bg-primary/90 dark:hover:bg-primaryDark/90
              transition-colors duration-300"
            >
              Visit Project
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link 
              href={github} 
              target="_blank" 
              className="w-10 h-10 bg-dark text-light rounded-full flex items-center justify-center
              dark:bg-light dark:text-dark"
            >
              <GithubIcon className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.article>
  )
}


const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");

  const projectsData = [
    {
      title: "Music Theory Assistant",
      img: project2,
      summary: "An interactive music theory app with structured lessons, quizzes, and tools like a chord finder, ear training, and metronome.",
      link: "https://github.com/jseboso/music-theory-assistant",
      github: "https://github.com/jseboso/music-theory-assistant",
      type: "Featured Project",
      category: "Web Development",
      techStack: ["Next.js", "Supabase", "Electron", "TailwindCSS"]
    },
    {
      title: "Mi Gente Event Manager",
      img: project2,
      summary: "A full-stack student org website for Mi Gente LSCC at UMN - built with Next.js, React, Tailwind CSS, MongoDB, and NextAuth. Features event listings, RSVP, board profiles, and admin tools.",
      link: "https://github.com/jseboso/mi-gente-event-manager",
      github: "https://github.com/jseboso/mi-gente-event-manager",
      type: "Featured Project",
      category: "Web Development",
      techStack: ["Next.js", "MongoDB", "NextAuth", "Sharp/Formidable"]
    },
    {
      title: "NextJS/Tailwind JSO Portfolio Website",
      img: project0,
      summary: "A portfolio website created using NextJS, ReactJS, Tailwind, Node.js, and Framer Motion!",
      link: "https://github.com/jseboso/nextjs-portfolio",
      github: "https://github.com/jseboso/nextjs-portfolio",
      type: "Featured Project",
      category: "Web Development",
      techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Schedule Server",
      img: project1,
      summary: "A personal website featuring my weekly schedule, information about me, and various interactive features.",
      link: "https://github.com/jseboso/schedule-server",
      github: "https://github.com/jseboso/schedule-server",
      type: "Featured Project",
      category: "Web Development",
      techStack: ["Node.js", "Express", "MySQL", "HTML/CSS"]
    },
    {
      title: "Battery Simulator",
      img: testProjectImage,
      summary: "C & Assembly Battery Display Simulator",
      link: "https://github.com/jseboso/battery-simulator",
      github: "https://github.com/jseboso/battery-simulator",
      type: "Featured Project",
      category: "Embedded Systems",
      techStack: ["C", "Assembly", "Embedded Systems"]
    },
    {
      title: "Voting Machine",
      img: testProjectImage,
      summary: "Election algorithm for Open Party Listing and Instant Runoff Election voting",
      link: "https://github.com/jseboso/election-algorithm",
      github: "https://github.com/jseboso/election-algorithm",
      type: "Featured Project", 
      category: "Backend Development",
      techStack: ["Java", "Algorithms", "Data Structures"]
    }
  ];

  const filteredProjects = projectsData.filter(project => {
    return filter === "All" || project.category === filter;
  });

  const featuredProjects = filteredProjects.slice(0, 3);
  const otherProjects = filteredProjects.slice(3);

  return (
    <>
      <Head>
        <title>Sebas Osorio | Projects Portfolio</title>
        <meta name="description" content="Jon Sebastian Osorio's software development and web projects portfolio, showcasing expertise in React, Next.js, and more." />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className='pt-16'>
          <AnimatedText text="My Projects"
            className="mb-8 mt-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <p className="text-center mb-12 text-lg md:text-base sm:text-sm max-w-3xl mx-auto">
            My portfolio of projects showcasing my skills in web development, software engineering, and more. Each project represents a unique challenge I&apos;ve tackled using various technologies.
          </p>

          <motion.section
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8 text-primary dark:text-primaryDark">Featured Projects</h2>
            <div className="flex flex-col gap-24 md:gap-16 sm:gap-12">
              {featuredProjects.map((project, index) => (
                <FeaturedProject
                  key={index}
                  title={project.title}
                  img={project.img}
                  summary={project.summary}
                  link={project.link}
                  github={project.github}
                  type={
                    <div className="flex flex-wrap gap-2 items-center">
                      <span>{project.category}</span>
                      {project.techStack.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="text-xs font-medium px-2 py-1 rounded-full bg-dark/10 dark:bg-light/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  }
                />
              ))}
            </div>
          </motion.section>

          {otherProjects.length > 0 && (
            <motion.section
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              <h2 className="text-2xl font-bold mb-8 text-primary dark:text-primaryDark">More Projects</h2>
              <div className="grid grid-cols-2 gap-10 md:grid-cols-1">
                {otherProjects.map((project, index) => (
                  <Project
                    key={index}
                    title={project.title}
                    img={project.img}
                    link={project.link}
                    github={project.github}
                    type={
                      <div className="flex flex-wrap gap-2 items-center">
                        <span>{project.category}</span>
                        {project.techStack.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="text-xs font-medium px-2 py-1 rounded-full bg-dark/10 dark:bg-light/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    }
                  />
                ))}
              </div>
            </motion.section>
          )}

          {filteredProjects.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20">
              <h3 className="text-2xl font-medium mb-4">No projects found</h3>
              <p className="text-dark/70 dark:text-light/70 text-center mb-6">
                Try selecting a different category.
              </p>
              <button 
                className="px-4 py-2 bg-primary text-light dark:bg-primaryDark dark:text-dark rounded-lg"
                onClick={() => setFilter("All")}
              >
                Show All Projects
              </button>
            </div>
          )}

          <div className="mt-24 text-center">
            <h2 className="text-2xl font-bold mb-4">Interested in working together?</h2>
            <p className="mb-6 max-w-lg mx-auto">
              I&apos;m always open to discussing new projects, creative ideas, and opportunities.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="mailto:jsebosorio@gmail.com" 
                className="inline-block bg-primary text-light dark:bg-primaryDark dark:text-dark py-3 px-8 rounded-lg font-semibold"
              >
                Let&apos;s Connect
              </Link>
            </motion.div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default ProjectsPage;