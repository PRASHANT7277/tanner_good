import { Box,Text,Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"
export default function Product({title,des,price,img,id}){



    return(
        <>
        <Link to={`/collections/${id}`}>
        <Box id='mainpro'>
            <Box><Image id='ipro' src={img}alt='..'/></Box>
            <Box id='pro'>
                <Text fontWeight={'bold'}>{title}</Text>
                <Text color={'grey'}>{des}</Text>
                <Text>$ {price}.00</Text>
            </Box>
        </Box>
        </Link>
        </>
    )
}