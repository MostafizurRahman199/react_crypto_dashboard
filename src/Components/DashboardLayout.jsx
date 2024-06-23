import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Topnav from "./Topnav";
import Sidenav from "./Sidenav";
import SideDrawer from "./SideDrawer";

export default function DashboardLayout({ title, children }) {
  const { isOpen, isClose, onOpen, onClose } = useDisclosure();

  return (
    <Flex>
      <Box
        display={{
          base: "none",
          lg: "flex",
        }}
      >
        <Sidenav></Sidenav>
      </Box>
      <SideDrawer isOpen={isOpen} isClose={isClose} onClose={onClose}></SideDrawer>
      <Box flexGrow={1}>
        <Topnav title={title} onOpen={onOpen}></Topnav>
        <Container maxW="70rem"  mt="8" overflowX="hidden" overflowY="auto" h="86vh">
          {children}
        </Container>
      </Box>
    </Flex>
  );
}
