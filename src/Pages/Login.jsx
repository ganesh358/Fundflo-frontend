


import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, FormControl, FormLabel, Img, Input, InputGroup, InputRightElement, Link, SimpleGrid, Text } from "@chakra-ui/react"
import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
function Login({token,setToken}){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = React.useState(false)
   const [err,setErr] = useState(false)
    const [upload,setUpload] = useState(false)
 
  const handleClick = () => setShow(!show)

    const handleSubmit = (event) => {
        event.preventDefault()
        setUpload(false)
        const payload = {
            email,
            password,
        }

        fetch("http://localhost:8080/user/login",{
            method : "POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body : JSON.stringify(payload)
        })
        .then((res) => res.json())
        .then((res) => {
            console.log("check",res)
            setUpload(true);
            
            if(res.token){
                setTimeout(() => {
                 localStorage.setItem("fundflo", res.token);
                setToken(res.token)
                }, 3000);
            }else{
                setErr(true)
            }
          
          
           
        })
        .catch((err) => console.log(err))
    }
    return (
        <SimpleGrid   pl='20%' pr='20%' justifyContent='center'>
            <Img w='8rem' src='https://media.licdn.com/dms/image/C560BAQHfHCEgvxmU3w/company-logo_200_200/0/1648792369353?e=1686787200&v=beta&t=fJ-FVIhJFGPYflmeSnEz0a9M5fA5T-OpPLInGNyq6nQ'/>
            <Box w='40rem' pb='5rem' pl='25%' pt='10%' pr='25%'  boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'>
        {
                err == true ? <Alert status='error'>
                <AlertIcon />
                <AlertTitle>invalid credentials</AlertTitle>
                <AlertDescription>Try again.</AlertDescription>
              </Alert> : ""
            }
            {
                upload==true ?<Alert status='success' variant='subtle'>
                <AlertIcon />
               Login successful!
              </Alert> :""

            }
            <Text fontSize='3xl' fontWeight='600' textAlign='center'>Login</Text>
          <form onSubmit={handleSubmit}>
        <FormControl isRequired >
            <FormLabel
            >Email</FormLabel>
            <Input placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
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
           Login
          </Button>
          </form>
         <Text mt='1rem'>Don't have an account? <Link color='blue' href='/register'>
         Register
          </Link> </Text>
                    
          </Box>
        </SimpleGrid>
    )
}

export {Login}