import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { RxDropdownMenu } from "react-icons/rx";
import { TbSquareRoundedArrowDownFilled } from "react-icons/tb";
import { IoIosContact } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineAccountBox } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
function Topnav() {
  return (
    <Box >
      <HStack maxW="60rem" justify="space-between" mx="auto" px="32" h="16">
        <Heading fontWeight="medium" fontSize="28px">
          Dashboad
        </Heading>

        <Menu>
          <MenuButton fontSize="24px" fontWeight="medium">
            <VscAccount />
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Icon px="1" fontSize="26px">
                <MdOutlineAccountBox />
              </Icon>
              Profile
            </MenuItem>
           
            <MenuItem>
              <Icon px="1" fontSize="26px">
                <IoSettingsOutline />
              </Icon>
              Setting
            </MenuItem>
            <MenuItem>
              <Icon px="1" fontSize="26px">
                <IoLogOutOutline />
              </Icon>
              Logout
            </MenuItem> 
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
}

export default Topnav;
