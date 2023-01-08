import { Experience } from "../typings";
import { sanityClient } from "../sanity";
import { groq } from 'next-sanity'

const query = groq`
*[_type=='experience']{
    ...,
    technologies[]->
  }
`

type Data = {
    experiences:Experience[]
}

export const fetchExperiences =async ()=>{
    const result = await sanityClient.fetch(query)
    const experiences: Experience[] = result
  

   return experiences
  }
  

