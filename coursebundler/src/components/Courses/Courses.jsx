import React, { useState } from 'react'
import { Button, Container, Heading, Input,HStack,Text, Stack, VStack,Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const  Course=
    ({
        views,title,imageSrc,id,addToPlayHandler,creator,description,lecturecount
    })=>{
        return (
            <VStack 
            className='course'
            alignItems={['center','flex-start']}
            >
                <Image src={imageSrc} boxSize={'60'} objectFit={'contain'}/>
                <Heading textAlign={['center','left']} maxW={'200px'} fontFamily={'sans-serif'}
                size={'sm'}
                children={title}
                noOfLines={3}
                />
                <Text noOfLines={2} children={description}/>
                <HStack>
                    <Text fontWeight={'bold'} textTransform={'uppercase'} children={'Creator'}/>
                    <Text fontWeight={'body'} textTransform={'uppercase'} children={creator}/>
                </HStack>
                <Heading 
                textAlign={'center'}
                size={'xs'}
                children={`Lectures- ${lecturecount}`}
                textTransform={'uppercase'}
                />
                <Heading
                size='xs'
                children={`views- ${views}`}
                textTransform={'uppercase'}
                />
                <Stack direction={['column','row']}
                alignItems={'center'}>
                    <Link to={`/course/${id}`}>
                        <Button colorScheme='yellow'>Watch Now</Button>
                    </Link>
                    <Link to={`/course/${id}`}>
                        <Button variant={'ghost'} 
                        colorScheme='yellow'
                        onClick={()=>addToPlayHandler(id)}>Add To Playlist</Button>
                    </Link>
                </Stack>
            </VStack>

        )
    }



const Courses = () => {
    const[keyword,setKeyword]=useState('')
    const categories=[
        "Web Development",
        "Artificial Intelligence",
        "Data Structure & Algorithm",
        "App Development",
        "Data Science",
        "Game Development"
    ]
    const[category,setCategory]=useState('')
  return (
    <Container 
    minH={'95vh'}
    maxW='container.lg'
    paddingY="8"
    >
        <Heading children="All Courses" m={'8'}/>
        <Input value={keyword} onChange={e=>setKeyword(e.target.value)}
        placeholder='Search a Course'
        type='text'
        focusBorderColor='yellow.500'
        />
        <HStack overflowX={'auto'} paddingY={'8'} css={{'&::-webkit-scrollbar':{
            display:'none'
        }}}>
            
            {
                categories.map((item,index)=>(

            <Button key={index} onClick={()=>setCategory(item)} minW={'60'}>
                <Text children={item}/>
            </Button>
                ))
            }
        </HStack>
        <Stack
        direction={['column','row']}
        align={['center','flex-start']}
        flexWrap={'wrap'}
        justifyContent={['flex-start','space-evenly']}
        >
            <Course
            title={'sample1'}
            description={'samle1'}
            views={23}
            imageSrc={'sample1'}
            id={'sample1'}
            creator={"sample boy"}
            lectureCount={2}
            />
        </Stack>
    </Container>
  )
}

export default Courses