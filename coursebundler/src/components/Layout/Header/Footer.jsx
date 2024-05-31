import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import { DiGithub } from 'react-icons/di'
import {TiSocialInstagramCircular, TiSocialYoutubeCircular } from 'react-icons/ti'
const Footer = () => {
  return (
    <Box padding={'4'} bg={'blackAlpha.900'} minH={'10vh'}>
        <Stack direction={['column','row']}>
            <VStack
            alignItems={['center','flex-start']}
            width={'full'}
            >
                <Heading children="All Rights Reserved" color={'white'}/>
                <Heading 
                fontFamily={'body'}
                size={'sm'}
                children="@Aman Chauhan"
                color={'yellow.400'}
                />
            </VStack>
            <HStack spacing={['2','10']} justifyContent={'center'}
            color={'white'}
            fontSize={'50'}
            >
                <a href='https://www.youtube.com/channel/UCD9K5i6XzQ5MnA35MEQt_EQ' target='blank'>
                    <TiSocialYoutubeCircular/>
                </a>
                <a href='https://github.com/iaman8055' target='blank'>
                    <DiGithub/>
                </a>
                <a href='https://www.instagram.com/__aman_chauhan_/' target='blank'>
                    <TiSocialInstagramCircular/>
                </a>
            </HStack>
        </Stack>
    </Box>
  )
}

export default Footer