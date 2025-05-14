import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Grid, GridItem, Text } from "@chakra-ui/react"
export default function RootLayout() {
  return (
    <div>
      <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">

        <GridItem as="aside" bg="purple.400" minHeight={{lg: '100vh'}} p={{base: '20px', lg: '30px'}} colSpan={{base: 6, lg: 2, xl: 1}}>
          <span>Sidebar</span>
        </GridItem>

        <GridItem as="main" colSpan={{base: 6, lg: 4, xl: 5}} p={{base: '20px', lg: '30px'}}>
          <Navbar />
          <Outlet />
        </GridItem>

      </Grid>
    </div>
  )
}
