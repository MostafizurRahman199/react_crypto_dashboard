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
import { TiThMenuOutline } from "react-icons/ti";

function Topnav({ title, onOpen }) {
  return (
    <Box>
      <HStack W="70rem" justify="space-between" mx="auto" h="16" px="16"  bg="white">
        <Icon onClick={onOpen} fontSize="24px"
        display={{
            base: "block",
            lg:"none"
        }}
        >{<TiThMenuOutline />} </Icon>
        <Heading fontWeight="medium" fontSize="28px">
          {title}
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
