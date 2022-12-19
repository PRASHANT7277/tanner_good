import Carousel from "../Carousel/Carousel"
import { useState,useEffect } from "react"
import axios from 'axios'
import {Box,Text,Button,Image} from "@chakra-ui/react"
import Product from "./Product"
import Dimg from '../Images/d.png'
import Eimg from '../Images/e.png'
import { Link } from "react-router-dom"

export default function Homepage(){
    const [data,setData]=useState()
    const [data1,setData1]=useState()
     
    function getData(){
        axios.get('https://real-tan-adder-hose.cyclic.app/first')
        .then((res)=>setData(res.data))
    }
    function getData1(){
        axios.get('https://real-tan-adder-hose.cyclic.app/final')
        .then((res)=>setData1(res.data))
    }
   
    useEffect(()=>{
       getData()
       getData1()
       
    },[])
   
    return(
        <>
       
        <Carousel/>
        <Box id='top-bar'>
            <Box><Text fontSize='35px' fontWeight='semibold'>Trending Right Now</Text></Box>
            <Box id='but1'><Link to='/everyday'><Button><Text pl='14px' pr='14px' color='grey'fontFamily='sans-serif' fontWeight='normal'>VIEW ALL</Text></Button></Link></Box>
        </Box>
        <Box className='pro-bar'>{data?.map((elem)=><Product id={elem.id} {...elem}/>)}</Box>
         <Box id='tit'>
         <Text fontWeight={'semibold'} fontSize='35px' mb='25px'>We Create Products Worth Holding Onto</Text>
                <Text fontSize='18px'>In a world where we are overwhelmed by products made to break down or go out style, we aim to go</Text>
                <Text fontSize='18px'mr='15%'>against that grain.  </Text>
                <Text id='text' fontSize='20px' fontWeight={'semibold'}>Break it in. Wear it well. Pass it on. </Text>
         </Box>
         <Box><Image w='98%' ml='6px' src={Dimg} alt='..'/></Box>
         <Box><Text ml='3%' mt='40px' mb='40px' fontSize='35px' fontWeight='semibold'>Our Best Sellers</Text></Box>
         <Box className='pro-bar'>{data1?.map((elem)=><Product id={elem.id} {...elem}/>)}</Box>
         <Box ><Link to='/everyday'><Button id='but2'><Text pl='10px' pr='10px' color='white' fontFamily='sans-serif' fontWeight='normal'>VIEW ALL</Text></Button></Link></Box>
         <Box><Image src={Eimg} alt='...'/></Box>
        </>
    )
}