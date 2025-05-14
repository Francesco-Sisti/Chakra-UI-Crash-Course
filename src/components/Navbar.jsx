import { Flex, Box, Heading, Text, Button, Spacer, HStack, Avatar, useColorMode, IconButton, Tooltip } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { NavLink } from "react-router-dom"

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box boxShadow="md" py={2}>
      <Flex as="nav" p="10px" alignItems="center" gap="10px" maxW="1200px" mx="auto">
        <NavLink to="/">
          <Heading as="h1" size="lg" color="purple.500">Chakra UI Tasks</Heading>
        </NavLink>
        <Spacer />

        <HStack spacing="20px">
          <Tooltip label={colorMode === 'light' ? 'Modalità scura' : 'Modalità chiara'}>
            <IconButton
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant="ghost"
              aria-label="Cambia tema"
            />
          </Tooltip>
          <Avatar name="John Doe" src="https://bit.ly/tioluwani-kola" size="sm" />
          <Text fontWeight="medium">mail@mail.com</Text>
          <Button colorScheme="purple" size="sm">Logout</Button>
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