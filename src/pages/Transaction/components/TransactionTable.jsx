import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    HStack,
    Text,
    Stack,
    Tag,
  } from '@chakra-ui/react'


export default function TransactionTable() {

const tableData = [
    {
        id: "HD82NA2H",
        Date:"2022-06-09",
        time:"7:00 AM",
        type: "INR Deposit",
        amount:"+ 81,123.10",
        status:"Pending",

    },
    {
        id: "HD82NA2H",
        Date:"2022-06-07",
        time:"7:00 AM",
        type: "INR Withdraw",
        amount:"- 81,123.10",
        status:"Processing",

    },
    {
        id: "HD82NA2H",
        Date:"2022-06-04",
        time:"7:00 AM",
        type: "Buy",
        amount:"+ 12.48513391 BTC",
        status:"Cancelled",

    },
    {
        id: "HD82NA2F",
        Date:"2022-06-04",
        time:"7:00 AM",
        type: "Sell",
        amount:"+ 12.48513391 BTC",
        status:"Completed",

    },
    {
        id: "HD82NA2Z",
        Date:"2022-06-04",
        time:"7:00 AM",
        type: "BTC Deposit",
        amount:"+ 12.48513391 BTC",
        status:"Cancelled",

    },
    {
        id: "HD82NA2T",
        Date:"2022-06-04",
        time:"7:00 AM",
        type: "BTC Withdraw",
        amount:"+ 12.48513391 BTC",
        status:"Completed",

    },

]


const statusColor = {
    Processing: "orange",
    Pending: "gray",
    Completed:"green",
    Cancelled:"red"
}

  return (
    <TableContainer>
    <Table variant='simple'>
      {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
      <Thead>
        <Tr p="0px">
          <Th textAlign="start"  p="4" >ID</Th>
          <Th   textAlign="start"  p="4" >Date & Time</Th>
          <Th  textAlign="start"  p="4" >Type</Th>
          <Th  p="4">Amount</Th>
          <Th  p="4">Status</Th>
        </Tr>
      </Thead>
      <Tbody>
      {
        tableData.map((data)=>(

            <Tr key={data.id} px="0px" _hover={{
                bg: 'gray.100',
            }}>
                <Td px="0px" py="1">{data.id}</Td>
                <Td px="0px" py="1"><Stack >
                    <Text>{data.Date}</Text>
                    <Text fontSize="12px" textColor="gray">{data.time}</Text>
                    </Stack>
                </Td>
                <Td fontWeight="medium" px="0px" py="1">{data.type}</Td>
                <Td px="0px">{data.amount}</Td>
              
                <Td px="0px" py="1">
                    <Tag bg={statusColor[data.status]} textColor="white" borderRadius="16px">
                    {data.status}
                    </Tag>
                </Td>
              

            </Tr>
        ))
      }
       
      </Tbody>
      
    </Table>
  </TableContainer>
  )
}
