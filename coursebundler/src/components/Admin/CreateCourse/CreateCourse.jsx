import { Button, Container, Grid, Heading, Image, Input, Select, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import cursor from '../../../assets/images/cursor.png'
import { fileuploadcss } from '../../Auth/Register'

const categories=[
  "Web Development",
  "Artificial Intelligence",
  "Data Structure & Algorithm",
  "App Development",
  "Data Science",
  "Game Development"
]
const CreateCourse = () => {
  const changeImageHandler=(e)=>{
    const file=e.target.files[0];
    const reader = new FileReader()
    reader.readAsDataURL(file);
    reader.onloadend=()=>{
        setImagePrev(reader.result);
        setImage(file)
    }
}
  const[title,setTitle]=useState("");
  const[description,setDescription]=useState('');
  const[createdBy,setCreatedBy]=useState('');
  const[image,setImage]=useState('');
  const[imagePrev,setImagePrev]=useState('');
  const[category,setCategory]=useState('');
  return (
    <Grid 
    css={{
      cursor: `url(${cursor}),default`
    }}
    minH={'100vh'} templateColumns={['1fr','5fr 1fr']}
    >
      <Container py={'16'}>
        <form>

      <Heading children="Create Course"
      textTransform={'uppercase'}
      textAlign={['center','left']}
      my={'16'}/>
      <VStack m={'auto'} spacing={'8'}>
      <Input
            value={title}
            type='text'
            onChange={(e)=>setTitle(e.target.value)}
            placeholder='abc'
            focusBorderColor='purple.300'
             />
             
              <Input
            value={description}
            type='text'
            onChange={(e)=>setDescription(e.target.value)}
            placeholder='Description'
            focusBorderColor='purple.300'
             /> <Input
             value={createdBy}
             type='text'
             onChange={(e)=>setCreatedBy(e.target.value)}
             placeholder='Creator Name'
             focusBorderColor='purple.300'
              />
              
             <Select
              focusBorderColor='purple.300'
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
             >
              <option>Category</option>
              {categories.map((item)=>(
                <option key={item} value={item}>{item}</option>
              ))}
             </Select>
             <Input 
             
             accept='image/*'
             type='file'
             focusBorderColor='purple.300'
             css={{"&::file-selector-button":{
              ...fileuploadcss,
              color:'purple',
             },}
             }
             onChange={changeImageHandler}
             />
             {imagePrev && (
              <Image src={imagePrev} boxSize={'64'} objectFit={'contain'}/>
             )}
             <Button w={'full'} colorScheme='purple' type='submit'>Create</Button>
      </VStack>
        </form>
      </Container>
        <Sidebar/>
    </Grid>
  )
}

export default CreateCourse;