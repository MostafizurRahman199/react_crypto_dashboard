import React from "react";

import { FaArrowTrendUp } from "react-icons/fa6";

import { FaBangladeshiTakaSign } from "react-icons/fa6";
import {
  Button,
  Card,
  HStack,
  Icon,
  Img,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";

import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi";
import { RiBtcFill } from "react-icons/ri";

function RecentTransactions() {
  return (
    <Card bg="white" borderRadius="xl" p="6" mt="14px" minW="500px" minH="345px">
      <Text fontSize="14px" textColor="#535D66" mb="24px">
        Recent Transactions
      </Text>

    <Stack spacing="4">
    <HStack justify="space-between">
        <HStack spacing="4">
          
            <Tag borderRadius="50" px="12px" py="12px" fontSize="16px">
              <HiCurrencyDollar />
            </Tag>
            <Stack spacing="0">
              <Text fontSize="16px" textColor="#171717">
                INR Deposit
              </Text>
              <Text fontSize="14px" textColor="#797E82">
                2022-06-09 7:06 PM
              </Text>
            </Stack>
          
        </HStack>

        <Text fontWeight="bold" fontSize="16px">+ ₹81,123.10 </Text>
      </HStack>
     
      <HStack justify="space-between">
        <HStack spacing="4">
          
            <Tag borderRadius="50" px="12px" py="12px" fontSize="16px">
            <RiBtcFill />
            </Tag>
            <Stack spacing="0">
              <Text fontSize="16px" textColor="#171717">
              BTC Sell
              </Text>
              <Text fontSize="14px" textColor="#797E82">
              2022-05-27 12:32 PM
              </Text>
            </Stack>
          
        </HStack>

        <Stack flexDirection="column" justifyItems="end">
        <Text fontSize="16px" textColor="#171717">
        - 12.48513391 BTC
              </Text>
             <HStack justify="end">
             <Text fontSize="14px" textColor="#797E82">
              + $81,123.10
              </Text>
             </HStack>

        </Stack>
      </HStack>
      
      <HStack justify="space-between">
        <HStack spacing="4">
          
            <Tag borderRadius="50" px="12px" py="12px" fontSize="16px">
              <HiCurrencyDollar />
            </Tag>
            <Stack spacing="0">
              <Text fontSize="16px" textColor="#171717">
              INR Deposit
              </Text>
              <Text fontSize="14px" textColor="#797E82">
                2022-06-09 7:06 PM
              </Text>
            </Stack>
          
        </HStack>

        <Text fontWeight="bold" fontSize="16px">+ ₹81,123.10 </Text>
      </HStack>
    </Stack>

    <Button mt="26px">View All</Button>
    </Card>
  );
}

export default RecentTransactions;
