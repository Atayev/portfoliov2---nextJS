import { Social } from "../typings";
import { sanityClient } from '../sanity'
import type { NextApiRequest, NextApiResponse } from "next";
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
  
// export const fetchSocials = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)

//     const data = await res.json()
//     const socials: Social[] = data.socials
//     return socials
// }