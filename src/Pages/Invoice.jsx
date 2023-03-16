import { Box, Button, Flex, Grid, Img, SimpleGrid, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";



export default function Invoice(){
  const navigate = useNavigate()

    const InvoiceData = JSON.parse(localStorage.getItem("invoice"))
    const handlelink = () => {
       navigate("/")
    }

    return (
        <SimpleGrid pr='10rem' pl='10rem' >
         <Flex ml='-6rem' alignItems='center' justifyContent='space-around'><Img cursor='pointer' onClick={handlelink}  w='8rem' src='https://media.licdn.com/dms/image/C560BAQHfHCEgvxmU3w/company-logo_200_200/0/1648792369353?e=1686787200&v=beta&t=fJ-FVIhJFGPYflmeSnEz0a9M5fA5T-OpPLInGNyq6nQ'/><Text fontWeight='bold' fontSize='2xl' textAlign='center'>Invoice</Text> <Button mt='1' color='white' bgColor='black' w='4rem' onClick={window.print}>Print</Button></Flex>
            
        <Grid p='2rem'  border='1px solid black'>
            <Flex justifyContent='space-between'>
                <Box w='20rem'>
                     <Text fontWeight='bold'> Sold By :</Text>
                    <Text>
                            Cloudtail India Private Limited
                            Sy No. 524/1,2,3,4,6, 525/1,2,3,4,5,6, *
                            526/3,4,5,6,527 of madivala village and Sy no.51/1
                            of thatanahalli village, kasaba hobli, anekal taluk,,
                            Bangalore urban district
                            Bangalore, Karnataka, 562107
                            IN

                    </Text>
                </Box>
                <Box  w='20rem'>
                <Text fontWeight='bold'>Billing Address :</Text>
                <Text>Ganesh</Text>
                 <Text> Bus stand</Text>
                  <Text> SHIRPUR, MAHARASHTRA, 425405</Text>
                  <Text>IN</Text>

                </Box>
            </Flex>
            <Flex justifyContent='space-between'>
                <Box>
                    <Text> Order Number: 403-2982097-7717905</Text>
                    <Text>Order Date: 04.11.2018</Text>
                </Box>
                <Box  w='20rem'>
                <Text fontWeight='bold'>Shipping Address :</Text>
                <Text>Ganesh</Text>
                 <Text> Bus stand</Text>
                  <Text> SHIRPUR, MAHARASHTRA, 425405</Text>
                  <Text>IN</Text>
                </Box>

            </Flex>
            <Box>
          <Text>  Invoice Number : BLR7-6466451</Text>
 <Text>Invoice Details : KA-BLR7-1004-1819</Text>
<Text>Invoice Date : 04.11.2018</Text>
            </Box>
           
           <TableContainer mt='1rem'  border='1px solid black'>
  <Table size='sm'>
    <Thead>
      <Tr bgColor='blackAlpha.400'>
        <Th>Sr.No.</Th>
        <Th>Description</Th>
        <Th>Unit Price</Th>
        <Th>Net Amount</Th>
        <Th isNumeric>Total Amount</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>1</Td>
        <Td>{InvoiceData.title}</Td>
        <Td>₹{InvoiceData.price}</Td>
        <Td>₹{InvoiceData.price}</Td>
        <Td isNumeric >₹{InvoiceData.price}</Td>
      </Tr>
      
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>Total Rs:</Th>
        <Th></Th>
        <Th isNumeric></Th>
         <Th isNumeric></Th>
         <Th isNumeric bgColor='blackAlpha.400'>₹{InvoiceData.price}</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>


</Grid>
        </SimpleGrid>
    )
}