import { Icon, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { IoMdMail } from "react-icons/io";
import { IoChatbubble } from "react-icons/io5";
export default function SupportCommunicate({icon, title}) {
  return (
    <Stack>
    <Icon fontSize="24px" color="#5F00D9">
    {icon}
    </Icon>
    <Text fontSize="32px" fontWeight="bold">
      {title}
    </Text>
    <Text fontSize="14px" textColor="#535D66" maxW="386px">
      Have a question or just want to know more? Feel free to reach out to
      us.   
    </Text>
  </Stack>
  )
}
