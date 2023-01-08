import { PageInfo } from "../typings";
import { sanityClient } from "../sanity";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from 'next-sanity'


const query = groq`
*[_type=='pageInfo'][0]
`

type Data = {
    pageInfo:PageInfo
}

export const fetchPageInfo = async() => {
    const result = await sanityClient.fetch(query)
    const pageInfo:PageInfo = result
    
    return pageInfo
  }
  


// export const fetchPageInfo =async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`)

//     const data =await res.json()
//     const pageInfo: PageInfo= data.pageInfo

//     return pageInfo
// }