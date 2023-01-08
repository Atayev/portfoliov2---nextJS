import { Project } from "../typings";
import { sanityClient } from "../sanity";
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
    const result = await sanityClient.fetch(query)
    const projects: Project[] = result

    return projects
  }
  

