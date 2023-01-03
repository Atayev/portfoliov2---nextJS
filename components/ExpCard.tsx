import React from "react";
import { motion } from "framer-motion";
type Props = {};

function ExpCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 md:w-[600px] xl:w-[900px] snap-center bg-[#0d191ac5] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
        src="https://i.ibb.co/P63sw31/scandiweb.jpg"
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-top"
        alt="logo"
          />
          
          <div className="px-0 md:px-10 ">
              <h4 className="text-4xl font-light">React Developer Trainee</h4>
              <p className="font-bold text-2xl mt-1">Scandiweb</p>
              <div className="flex space-x-2 my-2">
                  <img
                      className="w-10 h-10 rounded-full object-cover"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png" alt="" />
              </div>
              <p className="uppercase py-5 text-gray-300">Date</p>

              <ul className="list-disc space-y-4 text-lg ml-5">
                  <li>Summary points lorem</li>
              </ul>
          </div>
    </article>
  );
}

export default ExpCard;
