import React from "react";

import { FaArrowTrendUp } from "react-icons/fa6";

import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Button, Card, HStack, Icon, Img, Stack, Tag, Text } from "@chakra-ui/react";

import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

function PriceSection() {
  return (
    <Card bg="white" borderRadius="xl" p="6" mt="14px" minW="500px" minH="345px">
      <HStack  justify="space-between" >
        <Stack justify="flex-start">
          <HStack alignItems="center">
            <Text fontSize="14px" textColor="#535D66">
              Current Price
            </Text>
          </HStack>
          <HStack
            spacing={{
              base: "2",
              lg: "4",
            }}
            align={{
              base: "flex-start",
              xl: "center",
            }}
            flexDirection={{
              base: "column",
              xl: "row",
              lg: "row",
            }}
          >
            <HStack>
              <Text textColor="#171717" fontSize="24px" fontWeight="bold">
                $26,670.25
              </Text>
              <HStack spacing="1">
                <Text fontWeight="medium" fontSize="14px" textColor="#059669">
                  <FaArrowTrendUp />
                </Text>
                <Text fontWeight="medium" fontSize="14px" textColor="#059669">
                  22.0%
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <Stack spacing="9">
          <HStack>
            <Button

            spacing="1"
              borderRadius="10px"
              bg="#5F00D9"
              textColor="white"
              fontSize="14px"
              px="16px"
              py="10px"
              fontWeight="meduim"
              _hover={{
                bg: "#6d0deb",
              }}
            >
            <FaPlusCircle fontSize="14px" />

              <Text px="1">Buy</Text>
            </Button>
            <Button
              bg="#5F00D9"
              textColor="white"
              fontSize="14px"
              px="16px"
              py="10px"
              fontWeight="meduim"
              _hover={{
                bg: "#6d0deb",
              }}
              borderRadius="10px"
            >
              <FaMinusCircle fontSize="14px" />
              <Text px="1">Sell</Text>
            </Button>
          </HStack>
        </Stack>
      </HStack>
         
           <HStack  justify="end" mt="16px">
           <Img src="/public/Tabs.png" maxW="147px" maxH="27px" ></Img>
           </HStack>

           <Stack mt="50px">

           <Img src="/public/Vector 27.png" maxW="420px" maxH="116px" ></Img>
           <HStack justify='space-between' fontSize="12px" textColor="#797E82">
            <Text>7:15 PM</Text>
            <Text>12:15 AM</Text>
            <Text>6:35 AM</Text>
            <Text>12:15 PM</Text>
            <Text>5:55 PM</Text>
           </HStack>
           </Stack>

          
         
    </Card>
  );
}

export default PriceSection;
