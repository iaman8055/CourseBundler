import { Box, Container, FormLabel, Heading, Input, VStack,Button, Avatar} from '@chakra-ui/react'
import React, { useState } from 'react'

import { Link } from 'react-router-dom'
export const fileuploadcss={
    
        cursor:'pointer',
        marginLeft:'-5%',
        width:'110%',
        height:'100%',
        color:'#ECC948',
        backgroundColor:'white',
    
}
const fileUploadStyle={
    "&::file-selector-button":fileuploadcss,
}

const Register = () => {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[imagePrev,setImagePrev]=useState('')
    const changeImageHandler=(e)=>{
        const file=e.target.files[0];
        const reader = new FileReader()
        reader.readAsDataURL(file);
        reader.onloadend=()=>{
            setImagePrev(reader.result);
        }
    }
  return (
    <Container h={'fit-content'} >
    <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading textTransform={'uppercase'} children={"Registration"}/>
        <form style={{width: "100%"}}>
        <Box my={'4'} display={'flex'} justifyContent={'center'}>
                <Avatar src={imagePrev} size={'2xl'}/>
            </Box>
         <Box my={'4'}>
            <FormLabel htmlFor='name' children="Name"/>
            <Input
            required
            id='name'
            value={name}
            type='text'
            onChange={(e)=>setName(e.target.value)}
            placeholder='abc'
            focusBorderColor='yellow.500'
             />
            </Box>
            <Box my={'4'}>
            <FormLabel htmlFor='email' children="Email Address"/>
            <Input
            required
            id='email'
            value={email}
            type='email'
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='abc@gmail.com'
            focusBorderColor='yellow.500'
             />
            </Box>
            
            <Box my={'4'}>

             <FormLabel htmlFor='password' children="Password"/>
             <Input 
             required
             id='password'
             value={password}
             onChange={(e)=>setPassword(e.target.value)}
             placeholder='Enter Your Password'
             type='password'
             focusBorderColor='yellow.500'
             />
            </Box>
             <Box my={'4'}>

             <FormLabel htmlFor='password' children="Password"/>
             <Input 
             required
             id='password'
             value={password}
             onChange={(e)=>setPassword(e.target.value)}
             placeholder='Enter Your Password'
             type='password'
             focusBorderColor='yellow.500'
             />
            </Box>
            <Box my={'4'}>
            <FormLabel htmlFor='chooseAvatar' children="Choose Avatar"/>
             <Input 
             required
             id='chooseAvatar'
             accept='/image/*'
             type='file'
             focusBorderColor='yellow.500'
             css={fileUploadStyle}
             onChange={changeImageHandler}
             />
            </Box>
            
            <Button my={'4'} colorScheme='yellow' type='submit'>Sign Up</Button>
            <Box my={'4'}>
                Already a User? <Link to={'/login'}><Button colorScheme={'yellow'} variant={'link'}>Login here</Button>{" "}
                her</Link>
            </Box> 
        </form>
    </VStack>
</Container>
  )
}

export default Register