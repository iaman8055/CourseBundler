import { Button, Container, Heading, VStack,Input} from '@chakra-ui/react'
import React, { useState } from 'react'

const UpdateProfile = () => {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");

  return (
    <Container minH={'90vh'}>
        <form>
            <Heading children="Update Profile"
            my={'16'}
            textTransform={'uppercase'}
            textAlign={['center','left']}
            />
            <VStack spacing={'8'}>
            <Input 
                 id='profile'
                 value={name}
                 onChange={(e)=>setName(e.target.value)}
                 placeholder='name'
                 type='text'
                 focusBorderColor='yellow.500'
                 />
                 <Input 
                 id='email'
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}
                 placeholder='Email'
                 type='email'
                 focusBorderColor='yellow.500'
                 />
                 <Button w={'full'} colorScheme='yellow' type='submit'>Update</Button>
            </VStack>
            
        </form>
    </Container>
  )
}

export default UpdateProfile