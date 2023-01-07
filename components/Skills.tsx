import React from 'react'
import {motion} from 'framer-motion'
import OneSkill from './OneSkill'
import { Skill } from '../pages/api/typings'
type Props = {
  skills:Skill[]
}

function Skills({ skills }: Props) {
  return (
      <motion.div className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto items-center justify-center'>
           <h3 className='absolute top-20 uppercase tracking-[20px] text-[#c2ab94] text-2xl '>
              Skills
          </h3>

          <h3 className='absolute top-28 uppercase tracking-[3px] text-sm'>Hover over a skill for current proficiensy</h3>

      <div className='grid grid-cols-4 md:grid-cols-6 gap-4 md:pt-10'>
        {skills.slice(0,skills.length/2).map(skill => (
          <OneSkill key={skill._id} directionLeft={false} skill={skill}/>
        ))}
        {skills.slice(skills.length/2,skills.length).map(skill => (
          <OneSkill key={skill._id} directionLeft skill={skill}/>
        ))}
          </div>
    </motion.div>
  )
}

export default Skills