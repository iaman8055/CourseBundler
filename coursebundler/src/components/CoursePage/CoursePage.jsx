import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const CoursePage = () => {
    const [lectureNumber,setLectureNumber]=useState(0)
    const lectures=[
        {
            _id:"znjfnjsm",
            title:'sample1',
            video: {
                url:"njnjnjkn"
            },
            description:"sample1 skfmkfmxkmfk",
        },
        {
            _id:"znjfnjsm",
            title:'sample2',
            video: {
                url:"mjnzdknd"
            },
            description:"sample2 skfmkfmxkmfk",

        },
        {
            _id:"znjfnjsm",
            title:'sample3',
            video: {
                url:"bhbbjb"
            },
            description:"sample3 skfmkfmxkmfk",

        }
    ]
  return (
    <Grid minH={'90vh'} templateColumns={['1fr','3fr 1fr']}>
        <Box mt={'5'}>
        <video autoPlay controls controlsList='nodownload nofullscreen noremoteplayback' 
        disablePictureInPicture
        disableRemotePlayback
        src='https://www.youtube.com/watch?v=2am19DDsu58&list=PLt5mNkGuWcuXc26LBe_5mBfVoN-12q_ns&index=4'></video>
        <Heading m={'4'} children={`#${lectureNumber+1} ${lectures[lectureNumber].title}`}/>
        <Heading m={'4'} children="Description"/>
        <Text m={'4'} 
        children={lectures[lectureNumber].description}
        />
        
        </Box>
        <VStack>{
            lectures.map((element,index)=>(
                <button key={element._id}
                onClick={()=>setLectureNumber(index)}
                style={
                    {
                        
                        width:"100%",
                        padding:'1rem',
                        textAlign:'center',
                        margin:0,
                        borderBottom:"1px solid rgba(0,0,0)"

                    }
                }
                >
                    <Text noOfLines={1}> 
                        #{index+1} {element.title}

                    </Text>
                </button>
            ))
            }
        </VStack>
    </Grid>
 )
}

export default CoursePage