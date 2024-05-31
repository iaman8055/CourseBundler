import { Button, Container, Heading, VStack,Input } from '@chakra-ui/react'
import React, { useState } from 'react'

const ChangePassword = () => {
    const[oldpassword,setOldPassword]=useState("");
    const[newpassword,setNewPassword]=useState("");

  return (
    <Container minH={'90vh'}>
        <form>
            <Heading children="Change Password"
            my={'16'}
            textTransform={'uppercase'}
            textAlign={['center','left']}
            />
            <VStack spacing={'8'}>
            <Input 
                 id='password'
                 value={oldpassword}
                 onChange={(e)=>setOldPassword(e.target.value)}
                 placeholder='Enter old Password'
                 type='password'
                 focusBorderColor='yellow.500'
                 />
                 <Input 
                 id='password'
                 value={newpassword}
                 onChange={(e)=>setNewPassword(e.target.value)}
                 placeholder='Enter new Password'
                 type='password'
                 focusBorderColor='yellow.500'
                 />
                 <Button w={'full'} colorScheme='yellow' type='submit'>Change</Button>
            </VStack>
            
        </form>
    </Container>
  )
}

export default ChangePassword