import { Social } from "../typings";
import { sanityClient } from '../sanity'
import { groq } from 'next-sanity'
const query = groq`
    *[_type=='social']
`

type Data = {
    socials:Social[]
}

export const fetchSocials = async()=>{
    const result = await sanityClient.fetch(query)
    const socials: Social[] = result
    
    return socials
  }
  
