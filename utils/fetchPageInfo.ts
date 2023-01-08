import { PageInfo } from "../typings";
import { sanityClient } from "../sanity";
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
  


