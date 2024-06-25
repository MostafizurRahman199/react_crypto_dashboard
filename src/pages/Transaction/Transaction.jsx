import React from "react";
import DashboardLayout from "../../Components/DashboardLayout";
import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
  Text,
} from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa6";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import TransactionTable from "./components/TransactionTable";

export default function Transaction() {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 100,
    },
    {
      name: "Withdrawal",
      count: 50,
    },
    {
      name: "Trade",
      count: 22,
    },
  ];

  return (
    <DashboardLayout title={"Transaction"}>
      <Flex justify="end">
        <Button
          gap={2}
          bgColor="#5F00D9"
          textColor="white"
          borderRadius="10px"
          fontWeight={500}
          _hover={{
            bgColor: "#7924e9",
          }}
          mb="3"
        >
          {" "}
          <FaDownload /> Export CSV
        </Button>
      </Flex>
      <Card borderRadius="1rem" maxW="960px" maxH="508px">
        <Tabs>
          <TabList pt="4" justifyContent="space-between" px="4">
            <Flex>
              {tabs.map((tab, index) => (
                <Tab
                  key={index}
                  textColor="#797E82"
                  fontSize="12px"
                  _selected={{
                    textColor: "black",
                    borderBottomColor: "#5F00D9",
                    borderBottomWidth: "2px",
                    fontWeight: "bold",
                  }}
                >
                  <HStack>
                    <Text>{tab.name}</Text>
                    <Tag borderRadius="100px">{tab.count}</Tag>
                  </HStack>
                </Tab>
              ))}
            </Flex>
            <Flex justify="end">
              <InputGroup>
                <InputLeftElement pointerEvents="none" fontSize="20px" pb="2">
                  <CiSearch />
                </InputLeftElement>
                <Input
                  type="tel"
                  placeholder="Search by ID or destination"
                  size="sm"
                  border="none"
                  _focus={{
                    borderBottom: "1px",
                    borderBottomColor: "#5F00D9",
                    outlineStyle: "none",
                    

                  }}
                />
              </InputGroup>
            </Flex>
          </TabList>

          <TabPanels>
            <TabPanel>
             <TransactionTable></TransactionTable>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
}
