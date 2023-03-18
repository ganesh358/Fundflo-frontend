import { Alert, AlertIcon, Button, Flex, FormControl, FormLabel, Grid, Img, Input, Radio, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Payment(){
    const navigate = useNavigate()
    const [tabIndex, setTabIndex] = useState(0)
    const [success,setSuccess] = useState(false)
    const [card,setCard] = useState("")
    const [name,setName] = useState("")
    const [upi,setUpi] = useState("")
    const [val,setVal] = useState("")
    const [date,setDate] = useState("")
    const colors = useColorModeValue(
        ['red.50', 'teal.50', 'blue.50'],
        ['red.900', 'teal.900', 'blue.900'],
      )
      const bg = colors[tabIndex]
     const summary = JSON.parse(localStorage.getItem("payment"))
      const handlePay = (event) => {
        event.preventDefault()

        if(card.length === 16 || upi){
          setSuccess(true)
        setTimeout(() => {
            navigate("/")
        }, 3000);
        }else{
            alert("Please enter correct card number!")
        }
      
      }
      const handlelink = () => {
        navigate("/")
     }

     const chashOrcardpay = () => {
        setSuccess(true)
        setTimeout(() => {
            navigate("/")
        }, 3000);
        
     }
 

    return (
        <SimpleGrid pr='3rem' pl='3rem'>
            <Img  cursor='pointer' onClick={handlelink}  w='8rem' src='https://media.licdn.com/dms/image/C560BAQHfHCEgvxmU3w/company-logo_200_200/0/1648792369353?e=1686787200&v=beta&t=fJ-FVIhJFGPYflmeSnEz0a9M5fA5T-OpPLInGNyq6nQ'/>

            <Text  fontStyle='italic' fontSize='2xl' fontWeight='bold' textAlign='center'>Payments</Text>
            

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
           
        {
                success == true ? 
                <Alert status='success'>
            <AlertIcon/>
            Payment successfull!
           </Alert> : ""
            }
          
          <Tabs mt='2rem' onChange={(index) => setTabIndex(index)} bg={bg}>
            <TabList  gap='10rem'>
                <Tab fontWeight='bold'>Pay with Debit/Credit/ATM Cards</Tab>
                <Tab fontWeight='bold'>Other UPI Apps</Tab>
                <Tab fontWeight='bold'>Cash On Delivery/Pay On Delivery</Tab>
            </TabList>
            <TabPanels p='2rem'>
                <TabPanel>
                    <Text fontWeight='bold' fontSize='2xl'>Enter card details</Text>
                    <Flex mt='2rem '>
                      
                        <Grid w='30rem' gridGap='2rem'  >
                        <form onSubmit={handlePay}>
                            <FormControl isRequired>
                                <FormLabel>Card Number</FormLabel>
                                <Input variant='flushed' type='number' placeholder='**** **** **** ****' onChange={(e)=>setCard(e.target.value)} />
                                <FormLabel>Name on card</FormLabel>
                                <Input variant='flushed' placeholder='Name on card' onChange={(e)=>setName(e.target.value)}/>
                                <FormLabel>Expiry date</FormLabel>
                               <Input variant='flushed' onChange={(e)=>setDate(e.target.value)}  name="Expiry" type="month" placeholder="MM / YY"/>
                            
                                    </FormControl>
                                    <Button
                                        w='20rem'
                                        _hover='none'
                                        mt={4}
                                        bgColor='gold'
                                        type='submit'
                                    >Pay</Button>
                            </form>
                       
                        </Grid>
                        <Grid>
                            

                        </Grid>
                    </Flex>
                </TabPanel>
                <TabPanel >
                    <Grid w='20rem' gridGap='2rem'>
                    <form onSubmit={handlePay}>
                            <FormControl isRequired>
                                <FormLabel>Enter you UPI ID</FormLabel>
                                <Input variant='flushed' type='text' placeholder='Ex: MobileNumber@upi' onChange={(e)=>setUpi(e.target.value)} />
                                
                            
                                    </FormControl>
                                    <Button
                                        w='20rem'
                                        _hover='none'
                                        mt={4}
                                        bgColor='gold'
                                        type='submit'
                                    >Pay</Button>
                            </form>
                    </Grid>
                  
                </TabPanel>
                <TabPanel>
                    <Grid gridGap='2rem'>
                    <Flex><Radio onClick={(e)=>setVal(e.target.value)}  border='1px solid black' colorScheme='green' size='md' name='1'><Text fontSize='2xl'>Cash on Delivery</Text></Radio></Flex>
                    <Text color='teal'>Scan & Pay using Amazon app. Cash, UPI ,Cards also accepted.</Text>
                    <Flex > <Button onClick={chashOrcardpay} w='15rem' _hover='none' bgColor='gold'>Pay</Button></Flex>   
                    </Grid>
                </TabPanel>
            </TabPanels>
            </Tabs>
        </SimpleGrid>
    )
}