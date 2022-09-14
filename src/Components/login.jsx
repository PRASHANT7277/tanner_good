import {Link,useNavigate} from 'react-router-dom'
import { Box,Button,FormControl,Input,Text
    } from "@chakra-ui/react";


export default function Login(){
    const navigate=useNavigate()
    return(
  <>
  <Box w='450px' m='auto' mb='150px' mt='50' textAlign='center' >      
  <Text fontSize='40'>Login</Text>
      
      <FormControl>
      <Input mt='5' type='email' placeholder='Email address' />
      </FormControl>
      <FormControl>
      <Input mt='5' type='password' placeholder='Password' />
      </FormControl>
      <Text mt='5' textAlign='left'><a href='/'>Forgot ypur Password?</a></Text>
      <Button mt='10'pl='70' pr='70' pt='6' pb='6'  fontSize='large' backgroundColor='#475D4B' colorScheme='white' onClick={()=>{navigate('/')}}>Sign in</Button>
      <Text mt='5' ><Link to='/signup'>Create account</Link></Text>
  </Box>




  

  </>
    )
}