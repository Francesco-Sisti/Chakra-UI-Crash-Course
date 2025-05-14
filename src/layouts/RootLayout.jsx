import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { 
  Grid, 
  GridItem, 
  Box, 
  useColorModeValue, 
  Container, 
  Flex, 
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Show,
  Hide
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import Sidebar from "../components/Sidebar"
import { useRef } from "react"

export default function RootLayout() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const bgColor = useColorModeValue("gray.50", "gray.900")
  const sidebarBg = useColorModeValue("purple.500", "purple.900")
  const mainBg = useColorModeValue("white", "gray.800")
  
  return (
    <Box minH="100vh" bg={bgColor}>
      {/* Versione mobile: Drawer con sidebar */}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent bg={sidebarBg}>
          <DrawerCloseButton color="white" />
          <DrawerBody p={0}>
            <Sidebar onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Grid 
        templateColumns="repeat(6, 1fr)" 
        transition="all 0.3s ease"
      >
        {/* Sidebar desktop */}
        <Hide below="lg">
          <GridItem 
            as="aside" 
            bg={sidebarBg} 
            minHeight="100vh" 
            p="30px" 
            colSpan={{lg: 2, xl: 1}}
            boxShadow="lg"
            transition="all 0.3s ease"
            borderRightRadius="md"
            position="sticky"
            top="0"
            zIndex="10"
          >
            <Sidebar />
          </GridItem>
        </Hide>

        {/* Area principale */}
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
              <Navbar 
                onOpenSidebar={onOpen} 
                showMenuButton={true} 
              />
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
