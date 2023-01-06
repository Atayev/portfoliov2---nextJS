import React from "react";
import { motion } from "framer-motion";
type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
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
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 pt-16 mt-16  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#da9e63]">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen "
          >
            <motion.img
              initial={{
                y: -200,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg"
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#c2ab94]">
                  test case {i + 1} of {projects.length}
                </span>{" "}
                {project}
              </h4>
              <p className="text-lg text-center  md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                ipsa molestias ratione atque saepe dolorem minima eos, ipsam
                velit repudiandae repellat labore quibusdam eligendi! In ipsum
                praesentium provident voluptatum vel.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#da9f63]/30 left-0 h-[400px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;