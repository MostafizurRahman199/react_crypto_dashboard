import { Button, Card, Text } from '@chakra-ui/react'
import React from 'react'

export default function Contacts() {
  return (
   <Card p="24px" gap={2}  bg="#5F00D9" borderRadius="xl" >
    <Button borderRadius="100px" bg="white" textColor="#5F00D9" fontSize="12px" maxH="22px" maxW="56px">Contacts</Button>
    <Text fontSize="18px" fontWeight="medium"  textColor="white">Learn more about Loans – Keep your Bitcoin, access it’s value without selling it</Text>
   </Card>
  )
}
