import React from 'react';
import { motion } from 'framer-motion';
import { ServerIcon, DatabaseIcon, FlaskIcon, CloudIcon, CodeIcon, PaletteIcon } from '@/components/Icons';
import { bentoReveal, staggerContainer, revealViewport } from '@/lib/motion';

const CATEGORIES = [
  {
    title: 'Frontend & Languages',
    icon: CodeIcon,
    skills: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'React', 'Next.js', 'Angular', 'Python', 'C++'],
    span: 'col-span-2 md:col-span-1',
    hero: true,
  },
  {
    title: 'Cloud & DevOps',
    icon: CloudIcon,
    skills: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Azure', 'AWS', 'Linux', 'Git', 'Jira'],
    span: 'col-span-2 md:col-span-1',
  },
  {
    title: 'Backend & Architecture',
    icon: ServerIcon,
    skills: ['Java', 'Spring Framework', 'RESTful APIs', 'Event-Driven Architecture', 'Microservices', 'Hibernate'],
    span: 'col-span-2 md:col-span-1',
  },
  {
    title: 'Data & Messaging',
    icon: DatabaseIcon,
    skills: ['SQL Server', 'PostgreSQL', 'Supabase', 'Data Modeling', 'Stripe Webhooks'],
    span: 'col-span-1 md:col-span-1',
  },
  {
    title: 'Testing & Quality',
    icon: FlaskIcon,
    skills: ['JUnit', 'TDD', 'Cypress', 'Jest', 'Postman'],
    span: 'col-span-1 md:col-span-1',
  },
  {
    title: 'Design & Prototyping',
    icon: PaletteIcon,
    skills: ['Figma', 'UI/UX Design', 'Responsive Design'],
    span: 'col-span-4 lg:col-span-2 md:col-span-1',
  },
];

const BentoCard = ({ title, icon: Icon, skills, span, hero }) => {
  return (
    <motion.div
      variants={bentoReveal}
      whileHover={{ y: -4, transition: { duration: 0.25, ease: 'easeOut' } }}
      className={`${span} p-[2px] rounded-3xl bg-brandGradient`}
    >
      <div className="relative h-full overflow-hidden bg-light dark:bg-dark rounded-[calc(1.5rem-2px)] p-7 flex flex-col gap-4 lg:p-5">
        {hero && (
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute w-72 h-72 rounded-full bg-primary/30 dark:bg-primary/20 blur-3xl"
              style={{ top: '-25%', left: '-10%' }}
              animate={{ x: [-30, 50, -10, -30], y: [-20, 30, 50, -20] }}
              transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute w-64 h-64 rounded-full bg-primaryDark/30 dark:bg-primaryDark/20 blur-3xl"
              style={{ bottom: '-25%', right: '-5%' }}
              animate={{ x: [30, -50, 10, 30], y: [30, -20, -50, 30] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        )}

        <div
          className={`pointer-events-none absolute -rotate-12 text-primary/[0.07] dark:text-primaryDark/[0.08]
            ${hero ? '-right-8 -bottom-8 w-48 h-48' : '-right-6 -bottom-6 w-28 h-28'}`}
        >
          <Icon className="w-full h-full" />
        </div>

        <div className="relative flex items-center gap-3">
          <div className="w-10 h-10 shrink-0 text-primary dark:text-primaryDark">
            <Icon className="w-full h-full" />
          </div>
          <h3 className={`font-bold ${hero ? 'text-2xl lg:text-xl' : 'text-lg'}`}>{title}</h3>
        </div>

        <div className="relative flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-sm font-medium px-3 py-1 rounded-full
                bg-primary/10 dark:bg-primaryDark/10
                border border-primary/30 dark:border-primaryDark/30
                text-dark dark:text-light"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const TechStack = () => {
  return (
    <div className="mt-48 md:mt-32">
      <motion.h2
        className="font-bold text-8xl mb-16 w-full text-center md:text-6xl xs:text-4xl md:mb-8"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={revealViewport}
      >
        Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-4 auto-rows-[minmax(170px,auto)] gap-5 lg:grid-cols-2 md:grid-cols-1 md:auto-rows-min"
        initial="initial"
        whileInView="animate"
        viewport={revealViewport}
        variants={staggerContainer}
      >
        {CATEGORIES.map((category) => (
          <BentoCard key={category.title} {...category} />
        ))}
      </motion.div>
    </div>
  );
};

export default TechStack;
