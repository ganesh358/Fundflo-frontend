import { Alert, AlertIcon, Button, Flex, FormControl, Grid, Img, Input, Radio, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Payment(){
    const navigate = useNavigate()
    const [tabIndex, setTabIndex] = useState(0)
    const [success,setSuccess] = useState(false)
    const colors = useColorModeValue(
        ['red.50', 'teal.50', 'blue.50'],
        ['red.900', 'teal.900', 'blue.900'],
      )
      const bg = colors[tabIndex]
     const summary = JSON.parse(localStorage.getItem("payment"))
      const handlePay = () => {
          setSuccess(true)
        setTimeout(() => {
            navigate("/")
        }, 2000);
      }
      const handlelink = () => {
        navigate("/")
     }
 

    return (
        <SimpleGrid pr='3rem' pl='3rem'>
            <Img  cursor='pointer' onClick={handlelink}  w='8rem' src='https://media.licdn.com/dms/image/C560BAQHfHCEgvxmU3w/company-logo_200_200/0/1648792369353?e=1686787200&v=beta&t=fJ-FVIhJFGPYflmeSnEz0a9M5fA5T-OpPLInGNyq6nQ'/>

            <Text  fontStyle='italic' fontSize='2xl' fontWeight='bold' textAlign='center'>Payments</Text>
            {
                success == true ? 
                <Alert status='success'>
            <AlertIcon/>
            Payment successfull!
           </Alert> : ""
            }

        <Flex mt='2rem' justifyContent='space-between'>
            <Grid>
                <Text fontSize='2xl' fontWeight='bold'>Order Summary</Text>
                <Text fontWeight='bold'>{summary.title}</Text>
                <Flex>Order Number :<Text fontWeight='bold'>{summary.OrderNumber}</Text></Flex>
                <Flex>Order Price : <Text fontWeight='bold'>{summary.price}</Text></Flex>
                <Flex> Total Price : <Text fontWeight='bold'>{summary.price}</Text></Flex>  
            </Grid>
            <Grid>
            <Text fontWeight='bold'>Shipping Address :</Text>
                <Text>Ganesh</Text>
                 <Text> Bus stand</Text>
                  <Text> SHIRPUR, MAHARASHTRA, 425405</Text>
                  <Text>IN</Text>
            </Grid>
        </Flex>
           
            
          
          <Tabs mt='2rem' onChange={(index) => setTabIndex(index)} bg={bg}>
            <TabList gap='10rem'>
                <Tab>Pay with Debit/Credit/ATM Cards</Tab>
                <Tab>Other UPI Apps</Tab>
                <Tab>Cash On Delivery/Pay On Delivery</Tab>
            </TabList>
            <TabPanels p='2rem'>
                <TabPanel>
                    <Text fontWeight='bold' fontSize='2xl'>Enter card details</Text>
                    <Flex mt='2rem '>
                      
                        <Grid w='30rem' gridGap='2rem'  >
                            <Flex ><Text fontWeight='bold' w='10rem'>Card Number</Text><Input  isInvalid errorBorderColor='black' type='number' placeholder="**** **** **** ****" /></Flex>
                            <Flex><Text fontWeight='bold' w='10rem'>Name on card</Text><Input isInvalid errorBorderColor='black' type='text' placeholder="Name" /></Flex>
                            <Flex><Text fontWeight='bold' w='10rem'>Expiry date</Text> <Input isInvalid errorBorderColor='black' name="Expiry" type="month" placeholder="MM / YY"/></Flex>
                           <Flex justifyContent='center'> <Button onClick={handlePay} w='15rem' _hover='none' bgColor='gold'>Pay</Button></Flex>   
                        </Grid>
                        <Grid>
                            

                        </Grid>
                    </Flex>
                </TabPanel>
                <TabPanel >
                    <Grid w='20rem' gridGap='2rem'>
                    <Text fontWeight='bold' fontSize='1.5rem'>Pls enter you UPI ID</Text>
                    <Input isRequired type="text" isInvalid errorBorderColor='black' placeholder="Ex: MobileNumber@upi" name="" id="" />
                    <Flex > <Button onClick={handlePay} w='15rem' _hover='none' bgColor='gold'>Pay</Button></Flex>   
                    </Grid>
                  
                </TabPanel>
                <TabPanel>
                    <Grid gridGap='2rem'>
                    <Flex><Radio border='1px solid black' colorScheme='green' size='md' name='1'><Text fontSize='2xl'>Cash on Delivery</Text></Radio></Flex>
                    <Text color='teal'>Scan & Pay using Amazon app. Cash, UPI ,Cards also accepted.</Text>
                    <Flex > <Button onClick={handlePay} w='15rem' _hover='none' bgColor='gold'>Pay</Button></Flex>   
                    </Grid>
                </TabPanel>
            </TabPanels>
            </Tabs>
        </SimpleGrid>
    )
}