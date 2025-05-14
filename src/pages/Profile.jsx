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
  useColorModeValue,
  VStack,
  HStack,
  Icon,
  Divider,
  Card,
  CardHeader,
  CardBody,
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  SimpleGrid
} from "@chakra-ui/react"
import { CalendarIcon, CheckCircleIcon, TimeIcon } from "@chakra-ui/icons"

export default function Profile() {
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const headerBg = useColorModeValue("purple.50", "purple.900");
  const statBg = useColorModeValue("purple.50", "purple.900");
  
  const userData = {
    name: "John Doe",
    email: "mail@mail.com",
    role: "Amministratore",
    joined: "10/01/2023",
    stats: {
      completed: 12,
      inProgress: 5,
      pending: 3
    },
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
      
      <Card bg={bgColor} borderRadius="lg" boxShadow="md" mb={8} overflow="hidden">
        <CardHeader bg={headerBg} py={4}>
          <Heading size="md" color="purple.500">Informazioni Personali</Heading>
        </CardHeader>
        <CardBody>
          <Flex 
            direction={{ base: "column", md: "row" }} 
            alignItems={{ base: "center", md: "flex-start" }}
            gap={6}
          >
            <Avatar 
              size="2xl" 
              name={userData.name} 
              src="https://bit.ly/tioluwani-kola" 
              border="3px solid" 
              borderColor="purple.400"
            />
            <VStack align="flex-start" spacing={3} flex={1}>
              <Heading size="lg">{userData.name}</Heading>
              <HStack>
                <Icon as={CalendarIcon} color="purple.500" />
                <Text color="gray.500">Iscritto dal: {userData.joined}</Text>
              </HStack>
              <HStack>
                <Badge colorScheme="purple" px={3} py={1} borderRadius="full">{userData.role}</Badge>
                <Text color="gray.500">{userData.email}</Text>
              </HStack>
              
              <Divider my={3} />
              
              <StatGroup 
                w="100%" 
                bg={statBg} 
                p={4} 
                borderRadius="md" 
                spacing={8}
              >
                <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={4} w="100%">
                  <Stat>
                    <StatLabel>Completati</StatLabel>
                    <StatNumber color="green.500">{userData.stats.completed}</StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel>In Corso</StatLabel>
                    <StatNumber color="blue.500">{userData.stats.inProgress}</StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel>In Attesa</StatLabel>
                    <StatNumber color="yellow.500">{userData.stats.pending}</StatNumber>
                  </Stat>
                </SimpleGrid>
              </StatGroup>
            </VStack>
          </Flex>
        </CardBody>
      </Card>
      
      <Card bg={bgColor} borderRadius="lg" boxShadow="md">
        <CardHeader bg={headerBg} py={4}>
          <Heading as="h3" size="md" color="purple.500">
            Attività Recenti
          </Heading>
        </CardHeader>
        <CardBody p={0}>
          <Table variant="simple" w="100%">
            <Thead bg="purple.500">
              <Tr>
                <Th color="white">Titolo</Th>
                <Th color="white">Stato</Th>
                <Th color="white">Data</Th>
              </Tr>
            </Thead>
            <Tbody>
              {userData.tasks.map(task => (
                <Tr key={task.id} borderBottom="1px" borderColor={borderColor} _hover={{ bg: "gray.50" }}>
                  <Td fontWeight="medium">{task.title}</Td>
                  <Td>
                    <Badge 
                      colorScheme={
                        task.status === "Completato" ? "green" : 
                        task.status === "In corso" ? "blue" : "yellow"
                      }
                      borderRadius="full"
                      px={2}
                      py={1}
                    >
                      <HStack spacing={1}>
                        <Icon as={task.status === "Completato" ? CheckCircleIcon : TimeIcon} />
                        <Text>{task.status}</Text>
                      </HStack>
                    </Badge>
                  </Td>
                  <Td>{task.date}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Box>
  )
}
