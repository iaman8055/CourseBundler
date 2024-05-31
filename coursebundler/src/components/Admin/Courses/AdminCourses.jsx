import { Box, Button, Grid, HStack, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr,useDisclosure } from '@chakra-ui/react'

import React from 'react'
import Sidebar from '../Sidebar'
import cursor from '../../../assets/images/cursor.png'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import CourseModal from './CourseModal'


const AdminCourses = () => {
    
  const courses=[{
    _id:"bhzcbhcbh",
    title:"React Course",
    category:"Web development",
    poster:{
      url:'https://media.istockphoto.com/id/1496920323/photo/thinking-robot.jpg?s=612x612&w=0&k=20&c=heLdpKSUvt0w7dtm5IXmu4JJ5GvPvdpcywrqcL78P9s='
    },
    createdBy:"Aman Chauhan",
    views:'232',
    numOfVideos:'12'
  }]
  const courseDetailsHandler=(userId)=>{
    onOpen()
  }
  const deleteHandler=(userId)=>{
    console.log(userId)
  }
  const deleteLectureButtonHandler=(courseId,lectureId)=>{

  }
  const addLectureHandler=(e,courseId,title,description,video)=>{
    e.preventDefault();
  }
  const{isOpen,onClose,onOpen}=useDisclosure();
  return (
    <Grid
    css={{
      cursor: `url(${cursor}),default`
    }}
    minH={'100vh'} templateColumns={['1fr','5fr 1fr']}
    >
      <Box p={['0','16']} overflowY={'auto'}>
          <Heading
          textTransform={'uppercase'}
          children="All Users"
          my={'16'}
          textAlign={['center','left']}
          />
          <TableContainer>
            <Table variant={'simple'} size={'lg'}>
            <TableCaption>All available users in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {courses.map((item)=>(
              <Row 
              courseDetailsHandler={courseDetailsHandler}
              deleteHandler={deleteHandler}
              key={item._id} item={item}/>

              ))}
            </Tbody>
            </Table>
          </TableContainer>
          <CourseModal 
  isOpen={isOpen} 
  onClose={onClose} // Pass the onClose function here
  id={'hsjhnskznfk'}
  courseTitle="React Course"
  deleteHandler={deleteLectureButtonHandler}
  addLectureHandler={addLectureHandler}
/>

        </Box>

        <Sidebar/>
    </Grid>
  )
}
export default AdminCourses;

const Row=({item,courseDetailsHandler,deleteHandler})=>{
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td><Image src={item.poster.url}/></Td>
      <Td>{item.title}</Td>
      <Td>{item.category}</Td>
      <Td>{item.createdBy}
      </Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>
          <Td isNumeric>
        <HStack justifyContent={'center'}>
          <Button onClick={()=>courseDetailsHandler(item._id)} variant={'outline'} color={"purple.500"}>
            View Lecture
          </Button>
          <Button onClick={()=>deleteHandler(item._id)} color={'purple.600'}>
            <RiDeleteBin7Fill/>
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}