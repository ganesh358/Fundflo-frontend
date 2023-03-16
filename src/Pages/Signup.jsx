import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, SimpleGrid, Text,Link, Box, Img } from "@chakra-ui/react";
import React, {useState} from "react";
import {useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

function Register(){
    const [show, setShow] = React.useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [loading,setLoading] = useState(false)
    const [upload,setUpload] = useState(false)
    const navigate = useNavigate()
    const handleClick = () => setShow(!show)

    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)
        setUpload(false)
        const payload = {
            email,
            password,
            name
        }

        fetch("https://fundflo-backend.onrender.com/user/signup",{
            method : "POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body : JSON.stringify(payload)
        })
        .then((res) => res.json())
        .then((res) => {
            setLoading(false)
            setUpload(true);
            setTimeout(()=>{navigate('/')},3000)
  
        })
        .catch((err) => console.log(err))
    }
    return (
        <SimpleGrid pl='35%'  pr='35%' justifyContent='center'>
              <Img w='8rem' src='https://media.licdn.com/dms/image/C560BAQHfHCEgvxmU3w/company-logo_200_200/0/1648792369353?e=1686787200&v=beta&t=fJ-FVIhJFGPYflmeSnEz0a9M5fA5T-OpPLInGNyq6nQ'/>
             <Box w='40rem' pb='5rem'  pl='25%' pt='10%' pr='25%'  boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'>
            {/* {
                err == true ? <Alert status='error'>
                <AlertIcon />
                <AlertTitle>Email already exists!</AlertTitle>
                <AlertDescription>Try another email.</AlertDescription>
              </Alert> : ""
            } */}
            {
                loading == true ? <Alert status='info'>
                <AlertIcon />
                <AlertTitle>Loading....</AlertTitle>
              </Alert> : ""
            }

            {
                upload==true ?<Alert status='success' variant='subtle'>
                <AlertIcon />
                Register successful!
              </Alert> :""

            }
            <Text fontSize='3xl' fontWeight='600' textAlign='center'>Register</Text>
           <form onSubmit={handleSubmit}>
         <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input placeholder='Name' onChange={(e)=>setName(e.target.value)} />
            <FormLabel
            >Email</FormLabel>
            <Input placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
            <FormLabel>Password</FormLabel>
            <InputGroup size='md'>
            <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
                onChange={(e)=>setPassword(e.target.value)}
            />
            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' _hover={{ background: "white" }} bgColor='white' size='sm' onClick={handleClick}>
                {show ? <ViewIcon/> : <ViewOffIcon />}
                </Button>
            </InputRightElement>
            </InputGroup>
                </FormControl>
                <Button
                w='20rem'
            mt={4}
            colorScheme='green'
            
            type='submit'
          >
            Sign up
          </Button>
          </form>
          <Text mt='1rem'>Already have an account? <Link color='blue' href='/'>Login</Link></Text>
        
                   </Box> 
        </SimpleGrid>
    )
}

export {Register}