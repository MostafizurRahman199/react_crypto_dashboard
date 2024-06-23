import React from 'react'
import Sidenav from '../../Components/Sidenav'
import Topnav from '../../Components/Topnav'
import { Box, Flex, Grid, GridItem, space } from '@chakra-ui/react'
import DashboardLayout from '../../Components/DashboardLayout'
import PortfolioSection from './Components/PortfolioSection'
import PriceSection from './Components/PriceSection'
import RecentTransactions from './Components/RecentTransactions'
import Loans from './Components/Loans'
import Contacts from './Components/Contacts'


function Dashboard() {
  return (
    <DashboardLayout title={"Dashboard"} >
      <Grid gridTemplateColumns={
        {
          base:"repeat(1, 1fr)",
          md:"repeat(2, 1fr)"
        }

      
      }
      
     gap={3}>
        <GridItem colSpan={{
          base:1,
          xl:2,
          "2xl":2,
          md:2,
          lg:2,
        }}>
            <PortfolioSection></PortfolioSection>
        </GridItem>
        <GridItem colSpan={{
          md:2,
          xl:1,
          "2xl":1,
          lg:2,
          base:1,
        }} pr={
          {
            base:"0",
            md:"2",
            lg:"2"
          }
        } >
            <PriceSection></PriceSection>
        </GridItem>
        <GridItem colSpan={{
          md:2,
          xl:1,
          "2xl":1,
          lg:2,
          base:1,
        }} pl={
          {
            base:"0",
            md:"2",
            lg:"2"
          }
        }>
           <RecentTransactions></RecentTransactions>
        </GridItem>
        <GridItem colSpan={1} pr={
          {
            base:"0",
            md:"2",
            lg:"2"
          }
        }>
         <Loans></Loans>
        </GridItem>
        <GridItem colSpan={1}  pl={
          {
            base:"0",
            md:"2",
            lg:"2"
          }
        }>
         <Contacts></Contacts>
        </GridItem>
      </Grid>
    </DashboardLayout>
    
  )
}

export default Dashboard