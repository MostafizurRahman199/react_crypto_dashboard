import React from 'react'
import Sidenav from '../../Components/Sidenav'
import Topnav from '../../Components/Topnav'
import { Box, Flex, Grid, GridItem, space } from '@chakra-ui/react'
import DashboardLayout from '../../Components/DashboardLayout'
import PortfolioSection from './Components/PortfolioSection'
import PriceSection from './Components/PriceSection'
import RecentTransactions from './Components/RecentTransactions'


function Dashboard() {
  return (
    <DashboardLayout title={"Dashboard"}>
      <Grid gridTemplateColumns={
        {
          base:"repeat(1, 1fr)",
          md:"repeat(2, 1fr)"
        }

      
      }
      
     gap={8}>
        <GridItem colSpan={2}>
            <PortfolioSection></PortfolioSection>
        </GridItem>
        <GridItem colSpan={1} >
            <PriceSection></PriceSection>
        </GridItem>
        <GridItem colSpan={1}>
           <RecentTransactions></RecentTransactions>
        </GridItem>
      </Grid>
    </DashboardLayout>
    
  )
}

export default Dashboard