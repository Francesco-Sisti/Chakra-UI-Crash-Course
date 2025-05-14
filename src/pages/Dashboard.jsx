import { Heading, Text, Container, Box, Button } from "@chakra-ui/react"

export default function Dashboard() {

  const boxStyles = {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "purple.500",
    color: "white",
    margin: 10,
    textAlign: "center",
    filter: "blur(2px)",
    ':hover': {
      filter: "blur(0px)",
      color: "black.500",
      backgroundColor: "orange.500",
      transition: "all 0.3s ease",
      cursor: "pointer",
      transform: "scale(1.05)",
      boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
      border: "2px solid black",
    }
  }
  return (
    <Container as="section" maxW="4xl" py={20}>
      <Heading my={30}  p={5}>Chakra UI Components</Heading>
      <Text marginLeft={30} color="blue" fontWeight="bold">
        Chakra UI is a simple, modular and accessible component library that
        gives you the building blocks you need to build your React applications.
      </Text>

      <Box my={30} p={5} bg="orange.500" color="white">
        <Text>
          This is a text component
        </Text>
      </Box>

      <Box sx={boxStyles}>
        Hello World
      </Box>
    </Container>
  )
}
