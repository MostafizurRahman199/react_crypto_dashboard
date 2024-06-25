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
import SupportForm from "./SupportForm";

export default function SupportCard() {
  return (
    <Grid
      gridTemplateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
      }}
      gap={6}
    >

  <GridItem colSpan={{
          base:2,
          xl:1,
          "2xl":1,
          md:1,
          lg:1,
        }}>
      <SupportCommunicate icon={ <IoMdMail />} title={"Contact Us"}></SupportCommunicate>
    </GridItem>   
    <GridItem colSpan={{
          base:2,
          xl:1,
          "2xl":1,
          md:1,
          lg:1,
        }}>
   <SupportForm></SupportForm>
    </GridItem>   

    <GridItem colSpan={{
          base:2,
          xl:1,
          "2xl":1,
          md:1,
          lg:1,
        }}>
    <SupportCommunicate icon={ <IoChatbubble />} title={"Live Chat"}></SupportCommunicate>

    </GridItem>

    <GridItem colSpan={{
          base:2,
          xl:1,
          "2xl":1,
          md:1,
          lg:1,
        }}>
    <ChatBot></ChatBot>
    </GridItem>
<GridItem>

</GridItem>

    </Grid>
  );
}
