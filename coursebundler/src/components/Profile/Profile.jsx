import { Avatar, Button, Container, HStack, Heading, Image, Input, Modal,ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, VStack, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { fileuploadcss } from '../Auth/Register'

const Profile = () => {
    const user={
        Name:"Aman Chauhan",
        email:"iamanchauhan3@gmail.com",
        createdAt:String(new Date().toISOString()),
        role:"user",
        subscription:{
            status:undefined
        },
        playlist:[
            {
                course: 'sadasd',
                poster: "https://media.istockphoto.com/id/1496920323/photo/thinking-robot.jpg?s=612x612&w=0&k=20&c=heLdpKSUvt0w7dtm5IXmu4JJ5GvPvdpcywrqcL78P9s="
            }
        ]
    }
    const{onOpen,isOpen,onClose}=useDisclosure() 
    const changeImageSubmitHandler=(e,image)=>{
        e.preventDefault()
    }

    const removeFromPlaylistHandler=()=>{
        console.log("jxjmnzcjm")}
  return (
    <Container minH={'95vh'} maxW={'container.lg'} py={'8'}>
        <Heading children="Profile" textTransform={'uppercase'} m={'8'}/>
        <Stack justifyContent={'flex-start'} direction={['column','row']} alignItems={'center'} spacing={['8','16']}
        padding={'8'}
        >
            <VStack>
                <Avatar boxSize={'48'}/>
                <Button colorScheme='yellow' variant={'ghost'} onClick={onOpen}>
                    Change Photo
                </Button>
            </VStack>
            <VStack spacing={'4'} alignItems={['center','flex-start']}>
                <HStack>
                    <Text children={'Name'} fontWeight={'bold'}/>
                    <Text children={user.Name}/>
                </HStack>
                <HStack>
                    <Text children={'Email'} fontWeight={'bold'}/>
                    <Text children={user.email}/>
                </HStack>
                <HStack>
                    <Text children={'CreatedAt'} fontWeight={'bold'}/>
                    <Text children={user.createdAt.split('T')[0]}/>
                </HStack>
                {user.role!=='admin' && (
                    <HStack>
                        <Text children="Subscription" fontWeight={'bold'}/>
                        {
                            user.subscription.status==="active"?(
                                <Text children="cancel subscription"/>
                            ):(
                                <Link to={'/subscribe'}>
                                    <Button colorScheme='yellow'>Subscribe</Button>
                                </Link>
                            )
                        }
                    </HStack>
                )}
                <Stack
                direction={['column','row']}
                alignItems={'center'}
                >
                    <Link to={'/updateprofile'}>
                        <Button>Update Profile</Button>
                    </Link>
                    <Link to={'/changepassword'}>
                        <Button>Change Passoword</Button>
                    </Link>
                </Stack>
            </VStack>
        </Stack>
        <Heading children="Playlist" size={'md'} my={'8'}/>
        {
            user.playlist.length>0 && (
                <Stack
                direction={['column','row']}
                alignItems={'center'}
                flexWrap={'wrap'}
                p={'4'}
                >
                    {user.playlist.map((element,index)=>(
                        <VStack w={'48'} m='2' key={element.course}>
                            <Image
                            boxSize={'full'}
                            objectFit={'contain'}
                            src={element.poster}
                            />
                            <HStack>
                                <Link to={`/course/${element.course}`}>
                                    <Button variant={'ghost'} colorScheme='yellow'>Watch Now</Button>
                                </Link>
                                <Button onClick={()=>removeFromPlaylistHandler(element.course)}>
                                <RiDeleteBin7Fill/>
                            </Button>
                            </HStack>
                           
                        </VStack>
                    ))}
                </Stack>
            )
        }
        <ChangePhotoBox 
        changeImageSubmitHandler={changeImageSubmitHandler}
        isOpen={isOpen} 
        onClose={onClose}/>
    </Container>
  )
}

export default Profile

const ChangePhotoBox=({ isOpen,onClose,changeImageSubmitHandler})=>{
    const[image,setImage]=useState("")
    const[imagePrev,setImagePrev]=useState();
    const changeImage=(e)=>{
        const file=e.target.files[0];
        const reader = new FileReader()
        reader.readAsDataURL(file);
        reader.onloadend=()=>{
            setImagePrev(reader.result);
        }
    }
    return(
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay backdropFilter={'blur(10px)'}/>
            <ModalContent>
                <ModalHeader>
                    Change Photo
                </ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <Container>
                        <form onSubmit={(e)=>changeImageSubmitHandler(e,image)}>
                            <VStack spacing={'8'}>
                               {imagePrev && <Avatar src={imagePrev} boxSize={'48'}/>}
                                <Input 
                                type='file' 
                                css={{'&::file-selector-button':fileuploadcss}}
                                onChange={changeImage}
                                />
                                <Button w={'full'} colorScheme='yellow' type='submit'>
                                    Change
                                </Button>
                            </VStack>
                        </form>
                    </Container>
                </ModalBody>
                <ModalFooter>
                    <Button mr={'3'} onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>

        </Modal>
    )
}