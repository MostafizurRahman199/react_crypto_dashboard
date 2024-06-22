import { Button, Card, Text } from '@chakra-ui/react'
import React from 'react'

export default function Loans() {
  return (
   <Card p="24px" gap={2} borderRadius="xl" >
    <Button borderRadius="100px" bg="#5F00D9" textColor="white" fontSize="12px" maxH="23px" maxW="45px">Loans</Button>
    <Text fontSize="18px" fontWeight="medium" >Learn more about Loans – Keep your Bitcoin, access it’s value without selling it</Text>
   </Card>
  )
}
