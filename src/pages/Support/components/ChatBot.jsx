import { Button, Card, Text } from '@chakra-ui/react'
import React from 'react'

export default function ChatBot() {
  return (
   <Card   bg="#5F00D9" bgImage="/public/Shapes.png" bgSize="cover" bgRepeat="no-repeat"  p="6" borderRadius="16px" width="100%" maxH="130px">
    <Button borderRadius="100px" bg="white" textColor="#5F00D9" fontSize="12px" maxH="22px" maxW="56px">Contacts</Button>
    <Text fontSize="18px" fontWeight="medium"  textColor="white">Chat with us now</Text>
   </Card>
  )
}
