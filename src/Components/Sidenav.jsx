import { Box, HStack, Heading, Icon, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import "@fontsource/ubuntu"; // Defaults to weight 400
import { RxDashboard } from "react-icons/rx";
{/* <RxDashboard /> */}
import { GrTransaction } from "react-icons/gr";
{/* <GrTransaction /> */}
import { BiPointer, BiSupport } from "react-icons/bi";
{/* <BiSupport /> */}


export default function Sidenav() {

    const navLinks = [
        {
            icon:RxDashboard,
            text:"Dashboard",
            link:'/'
        },
        {
            icon:GrTransaction,
            text:"Transactions",
            link:'transactions'
        }
    ]

  return (
   <Stack boxShadow="lg" maxW="16rem" h="100vh"  justify="space-between" mb="6">
       <Box>
       <Heading as="h1" fontSize="20px" pt="3.5rem" textAlign="center">@DOSOMECODING</Heading>
        
        <Box mt='6' mx="3">
           { navLinks.map((nav)=>(
               <HStack key={nav.text} px="4" py="3" textColor="#797E82" fontSize="14px" 
               borderRadius="10px"
               _hover={{
                   textColor:"#171717",
                   fontWeight:"bold",
                   bg:"#F3F3F7",
                   border:"10px"

               }}>
                   <Icon as={nav.icon}></Icon>
                   <Text>{nav.text}</Text>
               </HStack>
           ))}
        </Box>
       </Box>

         <Box mt='6' mx="3">
           <HStack key="Support" px="4" py="3" textColor="#797E82" fontSize="14px" 
                borderRadius="10px"
                _hover={{
                    textColor:"#171717",
                    fontWeight:"bold",
                    bg:"#F3F3F7",
                    border:"10px",
                  

                }}>
                    <Icon as={BiSupport}></Icon>
                    <Text>Support</Text>
                </HStack>
          
         </Box>
        
   </Stack>
  )
}
