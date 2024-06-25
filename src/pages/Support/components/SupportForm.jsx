import {
    Button,
    Card,
    Flex,
    Grid,
    GridItem,
    HStack,
    Icon,
    Input,
    Stack,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  import { IoMdMail } from "react-icons/io";
  import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from "@chakra-ui/react";
  import { Textarea } from "@chakra-ui/react";
  import { Link } from "@chakra-ui/react";
  import SupportCommunicate from "./SupportCommunicate";
  import ChatBot from "./ChatBot";
  import { IoChatbubble } from "react-icons/io5";


export default function SupportForm() {
  return (
    <Card p="6" borderRadius="16px" maxH="544px">
        <Stack spacing="6">
          <Text fontWeight="bold" fontSize="14px">
            You will receive response within 24 hours of time of submit.
          </Text>

          <HStack>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="name" placeholder="James" borderRadius="8px" />
            </FormControl>
            <FormControl>
              <FormLabel>Surname</FormLabel>
              <Input type="name" placeholder="Arthur" borderRadius="8px" />
            </FormControl>
          </HStack>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="name@gmail.com" borderRadius="8px"/>
          </FormControl>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Your Message..." borderRadius="8px" />
          </FormControl>

          <Text>
          I agree with {" "}
            <Link color="#5F00D9" href="#">
            Terms & Conditions.
            </Link>
          </Text>
        </Stack>
        <Button bg="#D8DDE2" textColor="#797E82" mt="2" w="100%" h="38px">
          Send a Message
        </Button>
        <Button bg="#EEEEF4" textColor="#171717" mt="2" w="100%" h="38px">
          Book a Meeting
        </Button>
      </Card>
  )
}
