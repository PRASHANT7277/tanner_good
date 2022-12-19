

import { Box,Text,Image,Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Count from "./count";
import axios from "axios"
import { useState,useEffect } from "react";
import { DeleteIcon } from '@chakra-ui/icons'

export default function Cart(){
    const [data,setData]=useState([])
    
   function handleGet(){
      axios
        .get("https://real-tan-adder-hose.cyclic.app/cart")
        .then((res) => setData(res.data));
   }
  useEffect(()=>{
    handleGet()
    calculateTotal()
  })
    function handleDelete(id){
      axios({
        url: `https://real-tan-adder-hose.cyclic.app/cart/${id}`,
        method: "DELETE",
      });
      
    }
    const HandleCount = (id,no,qty,price,aprice)=>{
         axios({
           url: `https://real-tan-adder-hose.cyclic.app/cart/${id}`,
           method: "PATCH",
           data: { qty: qty + no, price: price + aprice * no },
         });
   
  }
  function calculateTotal(){
    return data.reduce((sum,elem)=>
      sum+ (elem.price),0)
 }
 function qTotal(){
  return data.reduce((sum,elem)=>
    sum+ (elem.qty),0)
  }
     
    return (
        <>
          <Box mt="100px"  w="80%" margin="auto">
            <Box mt="100px" display='flex' justifyContent='space-between'>
                <Box><Text fontweight="semibold" fontSize="40px">Your cart</Text>({qTotal()}) item</Box>
                <Box mt='20px'><Text textDecor='underline'><Link to="/">Continue Shopping</Link></Text></Box>
            </Box>
            <Box display='flex' justifyContent='space-between' mt='20px'>
                <Box color="grey">PRODUCT</Box>
                <Box color="grey">QUANTITY</Box>
                <Box color="grey">TOTAL</Box>
            </Box>
            <Box mt='7px'><hr/></Box>
            {data?.map((elem)=>
              <Box display='flex' justifyContent='space-between' mt='20px'>
              <Link to={`/collections/${elem.id}`}><Box display='flex'>
                  <Box color='mineralgreen' ><Image h='120px'w='120px' src={elem.img} alt="..."/></Box>
                  <Box w='200px' color='mineralgreen'><Text fontSize='20' fontWeight='semibold'>{elem.title}</Text><Text>{elem.des}</Text></Box>
              </Box></Link>
              <Box display='flex' >
                  <Count qty={elem.qty} id={elem.id} HandleCount={HandleCount} price={elem.price} aprice={elem.aprice} />
                  <Box><Button onClick={()=>handleDelete(elem.id)}><DeleteIcon  h='50px'/></Button></Box>
              </Box>
              <Box color='mineralgreen'>₹{elem.price}</Box>
          </Box>

            )}
            <Box><hr/></Box>
            <Box mt='70px' color='mineralgreen' ><Text fontWeight='semibold' fontSize='15px' textAlign='right'>Subtotal ₹{calculateTotal()}</Text></Box>
            <Box><Text textAlign='right' color='mineralgreen' textDecoration='underline' > <a href='https://www.tannergoods.com/pages/shipping-information'>Tax included.shipping calculated at checkout.</a></Text></Box>
            <Box mb='50px' color='white' textAlign='right' mt='30px' ><Link to='/payment'><Button  bgColor='#475d4b' pt='25px' pb='25px' pl='150px' pr='150px' fontWeight='bold'>Check out</Button></Link></Box>
        </Box>

      
        </>
    )
}