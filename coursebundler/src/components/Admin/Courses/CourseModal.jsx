import React, { useState } from 'react'
import { Avatar, Button, Container, HStack, Heading, Image, Input, Modal,ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, VStack, useDisclosure,Grid,Box} from '@chakra-ui/react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { fileuploadcss } from '../../Auth/Register'
const CourseModal = ({isOpen,onClose,id,deleteHandler,courseTitle,addLectureHandler,lectures=[1,2,3,4,5]}) => {
  const[title,setTitle]=useState('');
  const[description,setDescription]=useState('')
  const[video,setVideo]=useState('')
  const[videoPrev,setVideoPrev]=useState('')
    const changeVideoHandler=(e)=>{
      const file=e.target.files[0];
      const reader = new FileReader()
      reader.readAsDataURL(file);
      reader.onloadend=()=>{
          setVideoPrev(reader.result);
          setVideo(file)
      }
  }
  const handleClose=()=>{
    setTitle()
    setTitle()
    setVideo()
    setVideoPrev()
    onClose()
  }
  return (
    <Modal isOpen={isOpen} 
    onClose={handleClose} 
    size={'full'}
    scrollBehavior='outside'
    >
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>{courseTitle}</ModalHeader>
        <ModalCloseButton onClick={onClose}/>
        <ModalBody p={'16'}>
          <Grid templateColumns={['1fr','3fr 1fr']}>
            <Box px={['0','16']}>
              <Box my={'5'}>
                <Heading children={courseTitle}/>
                <Heading children={`#${id}`} size={'sm'} opacity={0.4}/>
              </Box>
              <Heading children={'Lectures'} size={'lg'}/>
{lectures.map((item,i)=>(
              <VideoCard
              key={i}
              title="React Intro"
              description="This is a intro lecture,where you will know the basics of react"
              num={i+1}
              lectureId="jbjfshjvnjs"
              courseId={id}
              deleteHandler={deleteHandler}
              />
))}

            </Box>
            <form 
            onSubmit={(e)=>addLectureHandler(e,id,title,description,video)
            }>
              <VStack spacing={'4'}>
                <Heading 
                children="Add Lecture"
                size={'md'}
                textTransform={'uppercase'}
                />
                <Input 
                focusBorderColor='purple.300'
                placeholder='Title'
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <Input 
                focusBorderColor='purple.300'
                placeholder='decr'
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                />
                 <Input 
                 required
             accept='video/mp4'
             type='file'
             focusBorderColor='purple.300'
             css={{"&::file-selector-button":{
              ...fileuploadcss,
              color:'purple',
             },}
             }
             onChange={changeVideoHandler}
             />
             {videoPrev&&(
              <video
              controlsList='nodownload'
              controls
              src={videoPrev}></video>
             )}
             <Button colorScheme='purple' w={'full'} type='submit'>Upload</Button>
              </VStack>
            </form>
          </Grid>

        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default CourseModal

const VideoCard=({title,description,num,lectureId,courseId,deleteHandler})=>{

  return(
    <Stack direction={['column','row']} my={'8'} boxShadow={'0 0 10px rgba(107,70,193,0.5)'} borderRadius={'lg'} justifyContent={['flex-start','space-between']}
    p={['4','8']}>
      <Box > 
        <Heading size={'sm'} children={`#${num} ${title}`}/>
        <Text children={description}/>
      </Box>
      <Button 
      color={'purple.600'}
      onClick={()=>deleteHandler(courseId,lectureId)}
      >
        <RiDeleteBin7Fill/>
      </Button>
    </Stack>
  )
}