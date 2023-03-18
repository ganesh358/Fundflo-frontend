import { Box, Button, Flex, Grid, Img, SimpleGrid, Text} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import Report from "../component/Report";
import { orderData } from "./data";

import { FcBarChart } from 'react-icons/fc';
 




export default function Order({token,setToken}){
  const navigate = useNavigate()
    
const handleInvoice = (item) => {
   localStorage.setItem("invoice",JSON.stringify(item));
  navigate("/invoice")
}

const handleBuy = (item) => {
    localStorage.setItem("payment",JSON.stringify(item));
   navigate("/payment")
 }
const handleLogout = () => {
    setToken("")
    localStorage.clear()
}

    return (
        <SimpleGrid>
             <Flex pr='4rem' pl='3rem' alignItems='center' justifyContent='space-between'><Img  w='8rem' src='https://media.licdn.com/dms/image/C560BAQHfHCEgvxmU3w/company-logo_200_200/0/1648792369353?e=1686787200&v=beta&t=fJ-FVIhJFGPYflmeSnEz0a9M5fA5T-OpPLInGNyq6nQ'/><Button _hover="none" color='white' bgColor='blue.500' onClick={handleLogout}>Logout</Button></Flex>
          <Text fontWeight='bold' fontSize='2xl' textAlign='center'>Your Orders</Text>
      
       <Flex fontWeight='bold' color='blue' pr='8rem' justifyContent='flex-end'><a href="#report"><span style={{fontSize:"2rem"}}><FcBarChart/></span></a></Flex>
     
     <SimpleGrid p='4rem' gridGap='2rem'>
     {orderData.map((item) => <Grid boxShadow='rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'   key={item.id}>
        <Flex p='1rem' justifyContent='space-between'>
            <Flex gap='2rem'>
                <Box p='2rem'> <Img w='3rem' src={item.image}/></Box>
            <Grid >
                <Text fontSize='.8rem'><Text color='gray'>ORDER PLACED:</Text>{item.OrderDate}</Text>
                <Text fontWeight='bold'>{item.title}</Text>
                <Text>{item.category}</Text>
                <Text>Rs:{item.price}</Text>
                <Button bgColor='gold' w='6rem' onClick={()=> handleBuy(item)}>Buy it again</Button>
            </Grid>
           
            </Flex>
            <Box color='teal' fontSize='1.5rem' fontWeight='bold' alignSelf='center'>
                <Button _hover='none' bgColor='teal.100' onClick={()=>handleInvoice(item)}>Invoice</Button>
            </Box>
            </Flex>
     </Grid>)}
     </SimpleGrid>
     <Grid pb='2rem'  scrollBehavior="smooth" id="report" justifyContent='center'>
     <Text fontWeight='bold' fontSize='2xl' textAlign='center'>Report</Text>
        <Report/>
        <Text fontSize='.9rem' textAlign='center'>User orders report in daily, Week and Month</Text>
     </Grid>

        </SimpleGrid>
    )
}