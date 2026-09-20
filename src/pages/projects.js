import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import React, { useState } from "react";
import { GithubIcon } from "@/components/Icons";
import GradientButton from "@/components/GradientButton";
import testProjectImage from "../../public/images/projects/codeScreenshot.png"
import project0 from "../../public/images/projects/portfolio.png"
import project1 from "../../public/images/projects/schedule.png"
import project2 from "../../public/images/projects/scale-explorer.png"
import project3 from "../../public/images/projects/event-manager.png"
import { motion } from "framer-motion"
import TransitionEffect from "@/components/TransitionEffect";
import { fadeInUp, staggerContainer, revealViewport } from "@/lib/motion";

const FramerImage = motion.create(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <motion.article
      className="w-full p-[2px] rounded-3xl bg-brandGradient xs:rounded-2xl"
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={revealViewport}
    >
      <div className="w-full flex items-center justify-between rounded-3xl
        bg-light dark:bg-dark p-12 lg:flex-col lg:p-8 xs:rounded-2xl xs:p-4">
        <Link href={link}
          target="_blank"
          rel="noopener noreferrer"
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
          <Link href={link} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-2">
            <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-2xl">{title}</h2>
          </Link>
          <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
          <div className="mt-4 flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} on GitHub`}
                className="w-10 h-10 bg-dark text-light p-2 rounded-full flex items-center justify-center dark:bg-light dark:text-dark"
              >
                <GithubIcon className="w-6 h-6" />
              </Link>
            </motion.div>
            <GradientButton href={link} target="_blank" className="text-lg sm:text-base">
              Visit Project
            </GradientButton>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <motion.article
      className="w-full p-[2px] rounded-2xl bg-brandGradient hover:shadow-xl transition-shadow duration-300"
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={revealViewport}
    >
      <div className="w-full flex flex-col items-center justify-center rounded-2xl
        bg-light dark:bg-dark p-6 xs:p-4">
        <Link href={link} target="_blank" rel="noopener noreferrer"
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
          <Link href={link} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-2">
            <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
          </Link>
          <div className="w-full mt-2 flex items-center justify-between">
            <GradientButton href={link} target="_blank" size="compact" className="md:text-sm">
              Visit Project
            </GradientButton>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} on GitHub`}
                className="w-10 h-10 bg-dark text-light rounded-full flex items-center justify-center
                dark:bg-light dark:text-dark"
              >
                <GithubIcon className="w-6 h-6" />
              </Link>
            </motion.div>
          </div>
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
      img: project3,
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

  const categories = ["All", ...new Set(projectsData.map((project) => project.category))];

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

          <p className="text-center mb-8 text-lg md:text-base sm:text-sm max-w-3xl mx-auto">
            A selection of projects spanning web apps, embedded systems, and backend tools — each one a different problem worth solving.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                  filter === category
                    ? 'bg-brandGradient text-light [text-shadow:0_1px_3px_rgba(0,0,0,0.35)]'
                    : 'bg-primary/10 dark:bg-primaryDark/10 border border-primary/30 dark:border-primaryDark/30 text-dark dark:text-light hover:bg-primary/20 dark:hover:bg-primaryDark/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {featuredProjects.length > 0 && (
            <motion.section
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={revealViewport}
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
          )}

          {otherProjects.length > 0 && (
            <motion.section
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={revealViewport}
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
            <GradientButton href="mailto:jsebosorio@gmail.com" size="large">
              Let&apos;s Connect
            </GradientButton>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default ProjectsPage;
