import { motion } from "framer-motion";
import { styles } from '../styles'
import { characters } from "../Constants/constants";
import { Tilt } from "react-tilt";

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const SectionWrapper = (Component, idName) => 
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 my-[-17%] w-[500%]`}
        style={{ marginLeft: "-20%" }}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    )
  };

  const ProjectCard = ({ index, name, description, category, image }) => {
    return (
      <motion.div
        variants={fadeIn("up", "spring", index * 0.2, 0.75)}
        className="w-full sm:w-1/2 lg:w-1/3 p-4"
      >
        <Tilt
          options={{ max: 25, scale: 1, speed: 400 }}
          className="bg-primary-500 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
        >
          <div className="relative w-full pb-[56.25%]"> 
            <img 
              src={image} 
              alt={name} 
              className="absolute top-2 left-28 w-auto h-full object-cover" 
            />
          </div>
          <div className="p-5">
            <h3 className="text-primary-800 font-bold text-xl mb-2">{name}</h3>
            <p className="text-grayscale-950 text-sm">{description}</p>
          </div>
        </Tilt>
      </motion.div>
    );
  }; 

  const Works = () => {
    return (
      <div className="w-full flex flex-col items-center">
        <div className="mt-20 flex flex-wrap justify-center gap-6">
          {characters.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    );
  };

export default SectionWrapper(Works, "");

