import React from 'react'
import Sidenav from '../../Components/Sidenav'
import Topnav from '../../Components/Topnav'
import { Box, Flex } from '@chakra-ui/react'
import DashboardLayout from '../../Components/DashboardLayout'
import PortfolioSection from './Components/PortfolioSection'


function Dashboard() {
  return (
    <DashboardLayout title={"Dashboard"}>
       <PortfolioSection></PortfolioSection>
    </DashboardLayout>
    
  )
}

export default Dashboard