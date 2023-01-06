import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../pages/api/typings";
import { urlFor } from "../sanity";

type Props = {
  skill: Skill;
};

function OneSkill({ skill }: Props) {
  console.log(skill);
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x:-200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x:0
        }}
        src={urlFor(skill?.image).url()}
        className="rounded-full border border-[#c2ab94]/50 object-cover  w-12 h-12 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute  opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[#c2ab94] h-12 w-12 xl:w-24 xl:h-24  rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-lg md:text-3xl font-bold text-black opacity-100 ">
            {skill?.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default OneSkill;
