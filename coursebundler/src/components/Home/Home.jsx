import React from 'react'
import {Heading, Stack, VStack,Text, Button,Image, Box, HStack} from "@chakra-ui/react"
import './Home.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import {CgGoogle,CgYoutube} from "react-icons/cg"
import {SiCoursera,SiUdemy} from "react-icons/si"
import {DiAws} from "react-icons/di"
const Home = () => {
  return (
    <section className='Home'>
        <div className='container'>
            <Stack 
            direction={['column','row']}
            height='100%'
            justify={['center','space-between']}
            align={'center'}
            spacing={['16','56']}
            >
                <VStack width={'full'} alignItems={['center','flex-end']}>
                    <Heading children="LEARN FROM THE EXPERTS" size={'2xl'}/>
                    <Text textAlign={['center','left']} children="Find Valuable Content At Reasonable Price"/>
                    <Link to="/courses">
                    <Button size={'lg'} colorScheme='yellow'> 
                    Explore Now
                    </Button>
                    </Link>
                </VStack>
                <Image className='vector-graphics' boxSize={"xs"} src={logo}/>
            </Stack>
        </div>
        <Box padding={'8'} bg={'blackAlpha.800'}>
          <Heading
          textAlign={'center'}
          fontFamily="body"
          color={'yellow.400'}
          children="OUR BRANDS"
          />
          <HStack className='brandsbanner' justifyContent={'space-evenly'}>
            <CgGoogle/>
            <CgYoutube/>
            <SiCoursera/>
            <SiUdemy/>
            <DiAws/>

          </HStack>
        </Box>
        <div className="container1">

        <video autoPlay controls controlsList='nodownload nofullscreen noremoteplayback' 
        disablePictureInPicture
        disableRemotePlayback
        src='https://www.youtube.com/watch?v=2am19DDsu58&list=PLt5mNkGuWcuXc26LBe_5mBfVoN-12q_ns&index=4'></video>
        </div>
    </section>
  )
    
}

export default Home