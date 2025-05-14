import { SimpleGrid, Box, Text } from "@chakra-ui/react"

export default function Dashboard() {

  return (
    <SimpleGrid spacing={10} minChildWidth="250px" p="10px">
      <Box bg="white" height="200px" border="1px solid">
        <Text color={{base: "yellow", md: "green", lg: "blue"}}>Total Revenue</Text>
      </Box>
      <Box bg="white" height="200px" border="1px solid">
      </Box>
      <Box bg="white" height="200px" border="1px solid">
      </Box>
      <Box bg="white" height="200px" border="1px solid">
      </Box>

      <Box bg="white" height="200px" border="1px solid">
      </Box>
      <Box bg="white" height="200px" border="1px solid">
      </Box>
      <Box bg="white" height="200px" border="1px solid">
      </Box>
      <Box bg="white" height="200px" border="1px solid">
      </Box>

      <Box bg="white" height="200px" border="1px solid">
      </Box>
      <Box bg="white" height="200px" border="1px solid">
      </Box>
      <Box bg="white" height="200px" border="1px solid">
      </Box>
      <Box bg="white" height="200px" border="1px solid">
      </Box>
    </SimpleGrid>
  )
}
