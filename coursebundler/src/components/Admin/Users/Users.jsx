import { Box, Button, Grid, HStack, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../Sidebar'
import cursor from '../../../assets/images/cursor.png'
import { RiDeleteBin7Fill } from 'react-icons/ri'


const Users = () => {
  const updateHandler=(userId)=>{
    console.log(userId)
  }
  const deleteHandler=(userId)=>{
    console.log(userId)
  }
  const users=[{
    _id:"bhzcbhcbh",
    Name:"Aman Chauhan",
    email:"iamanchauhan3@gmail.com",
    role:"user",
    subscription:{
        status:undefined
    }
  }]
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
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Subscription</Th>
                <Th isNumeric>Action</Th>

              </Tr>
            </Thead>
            <Tbody>
              {users.map((item)=>(
              <Row 
              updateHandler={updateHandler}
              deleteHandler={deleteHandler}
              key={item._id}
               item={item}/>

              ))}
            </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Sidebar/>
    </Grid>
  )
}

export default Users

const Row=({item,deleteHandler,updateHandler})=>{
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>{item.subscription.status==='active'?'Active':'Note Active'}
      </Td>
      <Td isNumeric>
        <HStack justifyContent={'center'}>
          <Button onClick={()=>updateHandler(item._id)} variant={'outline'} color={"purple.500"}>
            Change Role
          </Button>
          <Button onClick={()=>deleteHandler(item._id)} color={'purple.600'}>
            <RiDeleteBin7Fill/>
          </Button>
        </HStack>
      </Td>

    </Tr>
  )
}