import React from 'react'
import Sidenav from '../../Components/Sidenav'
import Topnav from '../../Components/Topnav'
import { Box, Flex } from '@chakra-ui/react'


function Dashboard() {
  return (
    <Flex>

        <Sidenav></Sidenav>
        <Box flexGrow={1}>
        <Topnav></Topnav> 
        </Box>
        </Flex>
    
  )
}

export default Dashboard