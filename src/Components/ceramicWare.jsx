import { useState,useEffect } from "react"
import { Box,Image,Flex,Spacer,Select } from "@chakra-ui/react"
import Product from "./Product"
import axios from "axios"
import img from '../Images/n.png'
import Filter from "./filter"

export default function CeramicWare(){
    const [data,setData]=useState()
    const [type,setType]=useState('ASC')
 function getData(){
        axios.get(`https://prashant-json-server.herokuapp.com/Ceramic?_sort=price&_order=${type}`)
        .then((res)=>setData(res.data))
    }
     useEffect(()=>{
       getData()
       },[type])
       return(
        <>
        
        <Box><Image src={img} alt='...'/></Box>
        <Box mt='10'mb='3' w='90%' ml='5%' >
        <Flex>
         <Box p='4'>
           <Filter/>
            </Box>
             <Spacer />
           <Box p='4' >
           10 products
          </Box>
          <Spacer />
          <Box p='4'>
          <Select placeholder='Featured' value={type} onChange={(e)=>setType(e.target.value)}>
            <option value='ASC'>Proce low to high</option>
            <option value='DESC'>Proce high to low</option>
            <option value='ASC'>sort by A-Z</option>
            <option value='DESC'>sort by Z-A</option>
          </Select>
         </Box>
        </Flex>
    </Box>
        <Box className='pro-bar'>{data?.map((elem)=><Product id={elem.id} {...elem}/>)}</Box>
        </>
       )
}