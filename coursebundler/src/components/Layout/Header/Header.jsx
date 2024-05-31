import React from 'react'
import {ColorModeSwitcher} from '../../../ColorModeSwitcher'
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure } from '@chakra-ui/react'
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
const Header = () => {
    const{isOpen,onOpen,onClose}=useDisclosure()
    const LinkButton=({url='/' ,title='Home',onClose})=>(
        <Link onClick={onClose} to={url} >
            <Button variant={'ghost'}>{title}</Button>
        </Link>
    )
    const isAuthenticated=true;
    const user={
        role:"admin"
    }
    const LogoutHandler=()=>{
        console.log("Logout")
    }

  return <>
  <ColorModeSwitcher/>
  <Button
  onClick={onOpen} 
  colorScheme='yellow'
  width={'12'}
  position={"fixed"}
  rounded='full'
  left={'6'}
  top={'6'}
  >
    <RiMenu5Fill/>
  </Button>
  <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay/>
    <DrawerContent>
        <DrawerHeader borderBottomWidth={'1px'}>COURSE BUNDLER</DrawerHeader>
        <DrawerBody>
            <VStack spacing={'4'} alignItems={'flex-start'}>
                <LinkButton onClose={onClose} url='/' title='Home'/>
                <LinkButton onClose={onClose} url='/courses' title='Browse All Courses'/>
                <LinkButton onClose={onClose} url='/request' title='Request A Course'/>
                <LinkButton onClose={onClose} url='/contact' title='Contact Us'/>

            </VStack>
            <HStack 
            justifyContent={'space-evenly'}
            width={'80%'}
            position={'absolute'}
            bottom={'4rem'}
            >
                {isAuthenticated?(<>
                <VStack>
                    <HStack>
                    <Link onClick={onClose} to={'/profile'} >
                    <Button variant="ghost" colorScheme='yellow'>Profile</Button>
                </Link>
                <Link onClick={onClose} >
                
                    <Button variant={'ghost'} onClick={LogoutHandler}>
                    <RiLogoutBoxLine/>
                        Logout</Button>
                </Link>
                    </HStack>
                    {user.role==="admin" &&<Link to={'/admin/dashboard'} onClick={onClose}>
                        <Button variant={'ghost'} colorScheme='purple' >
                            <RiDashboardFill/>
                            Dasboard
                        </Button>
                        </Link>}
                </VStack>
                </>):(<>
                <Link onClick={onClose} to={'/login'}>
                    <Button colorScheme='yellow'>Login</Button>
                </Link>
                <p>OR</p>
                <Link onClick={onClose} to={'/register'}>
                    <Button colorScheme='yellow'>Register</Button>
                </Link>
                </>)}
            </HStack>
        </DrawerBody>
    </DrawerContent>
  </Drawer>
  </>
}

export default Header