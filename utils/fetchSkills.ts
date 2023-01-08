import { Skill } from "../typings";
import { sanityClient } from "../sanity";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from 'next-sanity'
const query = groq`
    *[_type=='skill']
`

type Data = {
    skills:Skill[]
}

export const fetchSkills =async()=>{
    const result= await sanityClient.fetch(query)
    const skills: Skill[] =await result  
    return skills
  }
  


// export const fetchSkills =async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`)

//     const data =await res.json()
//     const skills: Skill[] = data.skills

//     return skills
// }