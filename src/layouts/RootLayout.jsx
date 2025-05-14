import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Grid, GridItem, Box, useColorModeValue, Container, Flex } from "@chakra-ui/react"
import Sidebar from "../components/Sidebar"

export default function RootLayout() {
  const bgColor = useColorModeValue("gray.50", "gray.900")
  const sidebarBg = useColorModeValue("purple.500", "purple.900")
  const mainBg = useColorModeValue("white", "gray.800")
  
  return (
    <Box minH="100vh" bg={bgColor}>
      <Grid 
        templateColumns="repeat(6, 1fr)" 
        transition="all 0.3s ease"
      >
        <GridItem 
          as="aside" 
          bg={sidebarBg} 
          minHeight={{base: 'auto', lg: '100vh'}} 
          p={{base: '20px', lg: '30px'}} 
          colSpan={{base: 6, lg: 2, xl: 1}}
          boxShadow="lg"
          transition="all 0.3s ease"
          borderRightRadius={{base: 0, lg: "md"}}
          position="sticky"
          top="0"
          zIndex="10"
        >
          <Sidebar />
        </GridItem>

        <GridItem 
          as="main" 
          colSpan={{base: 6, lg: 4, xl: 5}} 
          bg={mainBg}
          borderRadius={{base: 0, lg: "md"}}
          boxShadow="sm"
          m={{base: 0, lg: 4}}
          overflow="hidden"
        >
          <Flex direction="column" h="100%">
            <Box position="sticky" top="0" zIndex="5" bg={mainBg} boxShadow="sm">
              <Navbar />
            </Box>
            <Container maxW="container.xl" py={6} px={{base: 4, md: 6}}>
              <Outlet />
            </Container>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  )
}
