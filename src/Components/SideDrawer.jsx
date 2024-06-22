import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import Sidenav from "./Sidenav";

function SideDrawer({ isOpen, onOpen, onClose }) {
  const btnRef = React.useRef();

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton  _hover={{
            bg:"red",
            color:"white",
          }} />

          <DrawerBody >
            <Sidenav></Sidenav>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SideDrawer;
