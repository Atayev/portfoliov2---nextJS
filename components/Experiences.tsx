import React from "react";
import { motion } from "framer-motion";
import ExpCard from "./ExpCard";
import { Experience } from "../pages/api/typings";

type Props = {
  experiences:Experience[]
};

function Experiences({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row  px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-[4.2rem] uppercase tracking-[20px] text-[#c2ab94] text-2xl ">
        Experience
      </h3>
      <div className="w-full flex flex-shrink-0 snap-center space-x-4 absolute top-[4.5rem] overflow-x-scroll p-6 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#da9e63]">
        {experiences.map(experience => (
          <ExpCard key={experience._id} experience={experience} />
          
        ))}
      </div>
    </motion.div>
  );
}

export default Experiences;
