import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../pages/api/typings";
import { urlFor } from "../sanity";
type Props = {
  experience:Experience
};

function ExpCard({ experience }: Props) {
  return (
    <article className="flex flex-col mt-6 md:mt-10 rounded-lg items-center space-y-7 flex-shrink-0 w-fit md:w-[600px] xl:w-full snap-center bg-[#0d191ac5]  hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        src={urlFor(experience?.companyImage).url()}
        className="w-32 h-32 mt-3 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-top"
        alt="logo"
          />
          
        <div className="px-0 md:px-10 ml-7">
        <h4 className="text-2xl md:text-4xl font-light">{ experience?.jobTitle}</h4>
              <p className="font-bold text-2xl mt-1">{experience?.company}</p>
        <div className="flex space-x-2 my-1">
          {experience?.technologies.map(t=>(
            <img
            className="w-10 h-10  rounded-full object-cover"
            src={urlFor(t.image).url()} alt="" />
          ))}
                  
              </div>
        <p className="uppercase py-5 text-gray-300 ">{experience?.dateStarted} - {experience?.dateEnded}</p>

              <ul className="list-disc space-y-4 text-lg md:mb-6">
          {
            experience?.points.map(point => (
              <li>
                {point}
              </li>
            ))
                }
              </ul>
          </div>
    </article>
  );
}

export default ExpCard;
