import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Link from "next/link";
type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#c2ab94] text-2xl ">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 pt-3 mt-3 md:pt-16 md:mt-24  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#da9e63]">
        {projects.map((project) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-3 items-center justify-center p-14 md:p-44 h-screen "
          >
            <motion.img
              initial={{
                y: -200,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#e68b31] rounded-lg shadow-lg md:h-full "
              src={urlFor(project.image).url()}
              alt={project?._type}
            />
            <div className="flex justify-center items-center space-x-2">
              {project.technologies.map((t) => (
                <img
                  key={t._id}
                  className="h-7 w-7 "
                  src={urlFor(t.image).url()}
                  alt={t?._type}
                />
              ))}
            </div>
            <h4 className="text-2xl md:text-4xl font-semibold text-center">
              {project.title}
            </h4>
            <div className="flex space-x-3 px-0 md:px-10 max-w-6xl">
              <Link
                href={project.linkToBuild}
                className="bg-[#e68b31] py-5 px-10 rounded-md text-black font-bold text-lg animate-pulse"
              >
                Live Preview
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#da9f63]/30 left-0 h-[400px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
