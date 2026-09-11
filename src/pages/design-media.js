import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from 'next/image';
import React, { useState } from "react";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import { LeftArrow, RightArrow, ExpandIcon, CloseIcon } from "@/components/DesignIcons";

const designs = [
  {
    id: 1,
    title: "Radio K Poster Design",
    description: "Promotional poster design for university radio station event.",
    image: "/images/designs/placeholder1.jpg", // Replace with actual path
    category: "Print"
  },
  {
    id: 2,
    title: "Album Artwork",
    description: "Album cover design for local music project.",
    image: "/images/designs/placeholder2.jpg", // Replace with actual path
    category: "Album Art"
  },
  {
    id: 3,
    title: "Brand Identity Design",
    description: "Logo and visual identity for tech startup.",
    image: "/images/designs/placeholder3.jpg", // Replace with actual path
    category: "Branding"
  },
  {
    id: 4,
    title: "DJ Event Flyer",
    description: "Promotional flyer for campus DJ event.",
    image: "/images/designs/placeholder4.jpg", // Replace with actual path
    category: "Print"
  },
  {
    id: 5,
    title: "Music Visualization",
    description: "Digital visual created for audio performance.",
    image: "/images/designs/placeholder5.jpg", // Replace with actual path
    category: "Digital Art"
  },
  // Add more designs as needed
];

// Animation variants for the carousel
const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

// Filter categories
const categories = ["All", ...Array.from(new Set(designs.map(design => design.category)))];

const DesignCarousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  
  // Calculate current index within all designs
  const imageIndex = Math.abs(page % designs.length);
  
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const toggleFullscreen = (image) => {
    setFullscreenImage(image ? image : null);
  };

  return (
    <div className="relative w-full h-[60vh] overflow-hidden rounded-2xl border-2 border-solid border-dark
      bg-light dark:bg-dark dark:border-light md:h-[50vh] sm:h-[40vh] mb-16">
      
      {/* Main carousel */}
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute w-full h-full flex flex-col items-center justify-center"
        >
          <div className="relative w-4/5 h-4/5 md:w-[90%] md:h-[80%] cursor-pointer" onClick={() => toggleFullscreen(designs[imageIndex].image)}>
            <Image 
              src={designs[imageIndex].image} 
              alt={designs[imageIndex].title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
            <div className="absolute top-2 right-2 p-2 bg-dark/50 text-light rounded-full opacity-0 hover:opacity-100 transition-opacity">
              <ExpandIcon className="w-5 h-5" />
            </div>
          </div>
          <div className="text-center mt-4 px-8">
            <h2 className="text-2xl font-bold dark:text-light md:text-xl sm:text-lg">
              {designs[imageIndex].title}
            </h2>
            <p className="text-dark/75 dark:text-light/75 mt-2 md:text-sm">
              {designs[imageIndex].description}
            </p>
            <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-dark/10 text-dark dark:bg-light/10 dark:text-light">
              {designs[imageIndex].category}
            </span>
          </div>
        </motion.div>
        
        {/* Navigation arrows */}
        <button 
          className="absolute left-8 z-10 bg-dark/50 text-light p-2 rounded-full hover:bg-dark/80 transition-colors dark:bg-light/50 dark:text-dark dark:hover:bg-light/80"
          onClick={() => paginate(-1)}
          aria-label="Previous design"
        >
          <LeftArrow className="w-6 h-6" />
        </button>
        <button 
          className="absolute right-8 z-10 bg-dark/50 text-light p-2 rounded-full hover:bg-dark/80 transition-colors dark:bg-light/50 dark:text-dark dark:hover:bg-light/80"
          onClick={() => paginate(1)}
          aria-label="Next design"
        >
          <RightArrow className="w-6 h-6" />
        </button>
        
        {/* Dot indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 flex-wrap px-4">
          {designs.map((_, index) => (
            <button
              key={index}
              onClick={() => setPage([index, index > imageIndex ? 1 : -1])}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === imageIndex 
                  ? "bg-dark dark:bg-light" 
                  : "bg-dark/30 dark:bg-light/30"
              }`}
              aria-label={`Go to design ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen image overlay */}
      {fullscreenImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center" onClick={() => toggleFullscreen(null)}>
          <button 
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              toggleFullscreen(null);
            }}
          >
            <CloseIcon className="w-6 h-6" />
          </button>
          <div className="relative w-[90%] h-[90%]">
            <Image
              src={fullscreenImage}
              alt="Fullscreen view"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </div>
  );
};

const GridView = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [fullscreenImage, setFullscreenImage] = useState(null);
  
  // Filter designs based on selected category
  const filteredDesigns = selectedCategory === "All" 
    ? designs 
    : designs.filter(design => design.category === selectedCategory);
  
  const toggleFullscreen = (image) => {
    setFullscreenImage(image ? image : null);
  };

  return (
    <div className="w-full mt-12">
      {/* Section title */}
      <h2 className="text-3xl font-bold mb-8 text-center dark:text-light">Design Gallery</h2>
      
      {/* Category filters specifically for grid view */}
      <div className="flex flex-wrap justify-center gap-4 px-4 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category 
                ? "bg-dark text-light dark:bg-light dark:text-dark" 
                : "bg-light/75 text-dark dark:bg-dark/75 dark:text-light hover:bg-dark/20 dark:hover:bg-light/20"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {filteredDesigns.length > 0 ? (
        <div className="grid grid-cols-3 gap-8 lg:grid-cols-2 md:grid-cols-1">
          {filteredDesigns.map((design) => (
            <motion.div
              key={design.id}
              className="relative rounded-2xl border border-solid border-dark bg-light p-4 dark:bg-dark dark:border-light"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
              <div 
                className="relative w-full h-48 mb-4 overflow-hidden rounded-lg cursor-pointer"
                onClick={() => toggleFullscreen(design.image)}
              >
                <Image 
                  src={design.image} 
                  alt={design.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-2 right-2 p-2 bg-dark/50 text-light rounded-full opacity-0 hover:opacity-100 transition-opacity">
                  <ExpandIcon className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-bold dark:text-light">{design.title}</h3>
              <p className="text-dark/75 dark:text-light/75 mt-2">{design.description}</p>
              <span className="inline-block mt-3 px-3 py-1 text-xs font-medium rounded-full bg-dark/10 text-dark dark:bg-light/10 dark:text-light">
                {design.category}
              </span>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center text-dark dark:text-light py-8">
          No designs found in this category.
        </div>
      )}
      
      {/* Fullscreen image overlay */}
      {fullscreenImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center" onClick={() => toggleFullscreen(null)}>
          <button 
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              toggleFullscreen(null);
            }}
          >
            <CloseIcon className="w-6 h-6" />
          </button>
          <div className="relative w-[90%] h-[90%]">
            <Image
              src={fullscreenImage}
              alt="Fullscreen view"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </div>
  );
};

const GraphicDesign = () => {
  return (
    <>
      <Head>
        <title>Sebas Osorio | Graphic Design</title>
        <meta name="description" content="Graphic design portfolio showcasing branding, album art, and print designs by Sebas Osorio" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className='pt-16'>
          <AnimatedText text="Graphic Design Portfolio"
            className="mb-16 mt-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <DesignCarousel />
          <GridView />
        </Layout>
      </main>
    </>
  );
};

export default GraphicDesign;