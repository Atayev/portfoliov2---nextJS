import { Project } from "../typings";
import { sanityClient } from "../sanity";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from 'next-sanity'



const query = groq`
*[_type=='project']{
    ...,
    technologies[]->
  }
`

type Data = {
    projects:Project[]
}

export const fetchProjects = async () => {
    const res = await sanityClient.fetch(query)
    const projects: Project[] = res

    return projects
  }
  


// export const fetchProjects =async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`)

//     const data =await res.json()
//     const projects: Project[] = data.projects

//     return projects
// }