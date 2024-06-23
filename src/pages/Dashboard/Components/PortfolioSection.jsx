import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { MdGetApp } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

function PortfolioSection() {
  return (
    <HStack
      bg="white"
      px="4"
      py="2"
    
      borderRadius="xl"
      spacing={{
        base:"8",
        lg:"16"
      }}
      justify="space-between"
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDirection={{
        base: "column",
        xl: "row",
      }}
    >
      <HStack
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDirection={{
          base: "column",
          xl: "row",
        }}

       spacing={{
        base: '4',
        sm: '8', 
        md: '8', 
        lg: '8',
        xl: '20',
        '2xl': '20',
       }}
      >
        <Stack>
          <HStack alignItems="center">
            <Text fontSize="14px" textColor="#535D66">
              Total Portfolio value
            </Text>
            <Icon fontSize="20px" alignItems="center">
              <FaInfoCircle />
            </Icon>
          </HStack>
          <Text textColor="#171717" fontSize="24px" fontWeight="bold">
            $ 112,312.24
          </Text>
        </Stack>
        <Stack>
          <HStack alignItems="center">
            <Text fontSize="14px" textColor="#535D66">
              Wallet Balances
            </Text>
          </HStack>
          <HStack
            spacing={
              {
                base:"2",
                lg:"4"
              }
            }
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
                $ 22.39401000
              </Text>
              <Tag>BTC</Tag>
            </HStack>
            <HStack>
              <Text textColor="#171717" fontSize="24px" fontWeight="bold">
            
             <HStack> <FaBangladeshiTakaSign /> <Text>1,300.00</Text></HStack>
              </Text>
              <Tag>TAKA</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack>
        <Button
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
          <FaArrowDown fontSize="20px" px="4" />
          <Text px="4"> Deposit</Text>
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
          <FaArrowUp fontSize="20px" />
          <Text px="4">Withdraw</Text>
        </Button>
      </HStack>
    </HStack>
  );
}

export default PortfolioSection;
