import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Grid, GridItem, Box, useColorModeValue } from "@chakra-ui/react"
import Sidebar from "../components/Sidebar"

export default function RootLayout() {
  const bgColor = useColorModeValue("gray.50", "gray.900")
  const sidebarBg = useColorModeValue("purple.400", "purple.800")
  
  return (
    <Box>
      <Grid 
        templateColumns="repeat(6, 1fr)" 
        bg={bgColor}
        transition="all 0.3s ease"
      >
        <GridItem 
          as="aside" 
          bg={sidebarBg} 
          minHeight={{base: 'auto', lg: '100vh'}} 
          p={{base: '20px', lg: '30px'}} 
          colSpan={{base: 6, lg: 2, xl: 1}}
          boxShadow="md"
          transition="all 0.3s ease"
        >
          <Sidebar />
        </GridItem>

        <GridItem 
          as="main" 
          colSpan={{base: 6, lg: 4, xl: 5}} 
          p={{base: '20px', lg: '30px'}}
          maxW="1400px"
          mx="auto"
        >
          <Navbar />
          <Box pt={4}>
            <Outlet />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  )
}
