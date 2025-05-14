import { 
  Box, 
  Heading, 
  Table, 
  Thead, 
  Tbody, 
  Tr, 
  Th, 
  Td, 
  Avatar, 
  Text, 
  Flex, 
  Badge, 
  useColorModeValue 
} from "@chakra-ui/react"

export default function Profile() {
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  
  const userData = {
    name: "John Doe",
    email: "mail@mail.com",
    role: "Amministratore",
    joined: "10/01/2023",
    tasks: [
      { id: 1, title: "Completare dashboard", status: "Completato", date: "15/01/2023" },
      { id: 2, title: "Aggiornare profilo", status: "In corso", date: "20/01/2023" },
      { id: 3, title: "Revisione codice", status: "In attesa", date: "25/01/2023" }
    ]
  };

  return (
    <Box>
      <Heading as="h2" size="lg" mb={6} color="purple.500">
        Profilo Utente
      </Heading>
      
      <Box bg={bgColor} p={6} borderRadius="lg" boxShadow="md" mb={8}>
        <Flex alignItems="center" mb={6}>
          <Avatar size="xl" name={userData.name} src="https://bit.ly/tioluwani-kola" mr={6} />
          <Box>
            <Heading size="md">{userData.name}</Heading>
            <Text color="gray.500">{userData.email}</Text>
            <Badge colorScheme="purple" mt={2}>{userData.role}</Badge>
            <Text fontSize="sm" mt={2}>Iscritto dal: {userData.joined}</Text>
          </Box>
        </Flex>
      </Box>
      
      <Heading as="h3" size="md" mb={4} color="purple.500">
        Attività Recenti
      </Heading>
      
      <Table variant="simple" bg={bgColor} borderRadius="lg" overflow="hidden" boxShadow="sm">
        <Thead bg="purple.500">
          <Tr>
            <Th color="white">Titolo</Th>
            <Th color="white">Stato</Th>
            <Th color="white">Data</Th>
          </Tr>
        </Thead>
        <Tbody>
          {userData.tasks.map(task => (
            <Tr key={task.id} borderBottom="1px" borderColor={borderColor}>
              <Td>{task.title}</Td>
              <Td>
                <Badge 
                  colorScheme={
                    task.status === "Completato" ? "green" : 
                    task.status === "In corso" ? "blue" : "yellow"
                  }
                >
                  {task.status}
                </Badge>
              </Td>
              <Td>{task.date}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  )
}
