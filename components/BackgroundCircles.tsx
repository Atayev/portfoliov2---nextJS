import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
          scale: [1, 2, 2, 3, 1],
          borderRadius:["20%","20%","50%","80%","20%"]
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute  border border-[#da9e63] rounded-full h-[200px] w-[200px] mt-52  animate-ping" />
      <div className="absolute  border border-[#da9e63] rounded-full h-[300px] w-[300px] mt-52 opacity-20" />
      <div className="absolute border border-[#bb8957] opacity-20 animate-pulse  mt-52 h-[650px] w-[650px] rounded-full" />
      <div className="absolute  border border-[#da9e63] rounded-full h-[800px] w-[800px] mt-52 opacity-20" />
    </motion.div>
  );
}
