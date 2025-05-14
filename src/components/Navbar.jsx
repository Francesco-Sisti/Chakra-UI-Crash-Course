import { Flex, Box, Heading, Text, Button, Spacer, HStack } from "@chakra-ui/react"

export default function Navbar() {
return (
    <div>
        <Flex as="nav" p="10px" alignItems="center" gap="10px">
            <Heading as="h1">Chakra UI Tasks</Heading>
            <Spacer></Spacer>

            <HStack spacing="20px">
                <Box bg="gray.200" p="10px">M</Box>
                <Text>mail@mail.com</Text>
                <Button colorScheme="purple">Login</Button>
            </HStack>
        </Flex>
    </div>
)
}














// Codice per imparare a usare flexbox
{/* <Flex bg="gray.200" justifyContent="space-between" wrap="wrap" gap={2}>
    <Box w="150px" h="50px" bg="red">1</Box>
    <Box w="150px" h="50px" bg="blue">2</Box>
    <Box w="150px" h="50px" flexGrow={1} bg="green">3</Box>
    <Box w="150px" h="50px" flexGrow={2} bg="yellow">4</Box>
</Flex> */}