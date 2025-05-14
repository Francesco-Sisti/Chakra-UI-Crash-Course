import { Flex, Box, Heading, Text, Button, Spacer, HStack, Avatar, useColorMode, IconButton, Tooltip, useColorModeValue } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { NavLink } from "react-router-dom"

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const bgColor = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  return (
    <Box 
      boxShadow="lg" 
      py={3} 
      position="sticky" 
      top={0} 
      zIndex={10}
      bg={bgColor}
      borderBottom="1px" 
      borderColor={borderColor}
    >
      <Flex 
        as="nav" 
        p="12px" 
        alignItems="center" 
        gap="12px" 
        maxW="1200px" 
        mx="auto"
      >
        <NavLink to="/">
          <Heading 
            as="h1" 
            size="lg" 
            color="purple.500" 
            _hover={{ color: "purple.600" }}
            transition="color 0.2s"
          >
            Chakra UI Tasks
          </Heading>
        </NavLink>
        <Spacer />

        <HStack spacing="24px">
          <Tooltip 
            label={colorMode === 'light' ? 'Modalità scura' : 'Modalità chiara'} 
            hasArrow
          >
            <IconButton
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant="ghost"
              aria-label="Cambia tema"
              _hover={{ bg: useColorModeValue("purple.50", "purple.900") }}
            />
          </Tooltip>
          <Avatar 
            name="John Doe" 
            src="https://bit.ly/tioluwani-kola" 
            size="sm" 
            border="2px"
            borderColor="purple.500"
          />
          <Text fontWeight="medium">mail@mail.com</Text>
          <Button 
            colorScheme="purple" 
            size="sm"
            boxShadow="sm"
            _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
            transition="all 0.2s"
          >
            Logout
          </Button>
        </HStack>
      </Flex>
    </Box>
  )
}














// Codice per imparare a usare flexbox
{/* <Flex bg="gray.200" justifyContent="space-between" wrap="wrap" gap={2}>
    <Box w="150px" h="50px" bg="red">1</Box>
    <Box w="150px" h="50px" bg="blue">2</Box>
    <Box w="150px" h="50px" flexGrow={1} bg="green">3</Box>
    <Box w="150px" h="50px" flexGrow={2} bg="yellow">4</Box>
</Flex> */}