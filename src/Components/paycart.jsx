

import { Box,Text,Image,Flex,Input,Spacer} from "@chakra-ui/react";

import axios from "axios"
import { useState,useEffect } from "react";


export default function PayCart(){
    const [data,setData]=useState([])
    
   function handleGet(){
      axios.get("https://prashant-json-server.herokuapp.com/procart")
      .then((res) => setData(res.data))
   }
  useEffect(()=>{
    handleGet()
    calculateTotal()
  })
    
  function calculateTotal(){
    return data.reduce((sum,elem)=>
      sum+ (elem.price),0)
 }
     
    return (
        <>
          <Box ml='5'>
            
            <Box mt='7px'></Box>
            {data?.map((elem)=>
              <Box display='flex' justifyContent='space-between' mt='20px'>
              <Box display='flex'>
                  <Box color='mineralgreen' ><Image h='50px'w='50px' src={elem.img} alt="..."/></Box>
                  <Box w='200px' color='mineralgreen'><Text fontSize='15' fontWeight='semibold'>{elem.title}</Text><Text fontSize='10'>{elem.des}</Text></Box>
              </Box>
              <Box>{elem.qty}</Box>
              <Box color='mineralgreen'>₹{elem.aprice}</Box>
            </Box>

            )}
            <Box mt='10px'><hr mb='5'/></Box>
             <Flex columnGap='3'>
            <Input mt='4' placeholder='Giftcards or discount code' />
            <Input mb='5' w='150px' mt='4'placeholder='Apply' />
            </Flex>
            <hr />
            <Flex>
             <Box p='4' >
             <Text  >Subtotal</Text>
             </Box>
             <Spacer />
             <Box p='4'>
             <text>${calculateTotal()}</text>
             </Box>
            </Flex>
            <Flex>
             <Box p='4' >
             <Text >Shipping charge</Text>
             </Box>
             <Spacer />
             <Box p='4'>
             <Text>$ 2.00</Text>
             </Box>
            </Flex>
            <hr />
            <Flex>
             <Box p='4' >
             <Text  >Total</Text>
             </Box>
             <Spacer />
             <Box p='4'>
             <Text  fontWeight='semibold' fontSize='20'>USD ${calculateTotal()+2}.00</Text>
             </Box>
            </Flex>
        </Box>

      
        </>
    )
}