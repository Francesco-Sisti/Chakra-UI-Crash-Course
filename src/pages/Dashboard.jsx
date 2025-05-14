import { SimpleGrid, Box, Text, Card, CardBody, CardHeader, CardFooter, Flex, Avatar, Button, HStack, Divider, Badge, Heading, useColorModeValue, Spinner, Center, useToast, Icon, Tooltip, VStack } from "@chakra-ui/react"
import { useLoaderData, useNavigation } from "react-router-dom"
import { ViewIcon, EditIcon, DeleteIcon, TimeIcon, StarIcon } from "@chakra-ui/icons"
import { useState } from "react"

export default function Dashboard() {
  const tasks = useLoaderData()
  const navigation = useNavigation()
  const toast = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [deletingTaskId, setDeletingTaskId] = useState(null)
  
  // Miglioramento dei colori
  const cardBg = useColorModeValue("white", "gray.800")
  const cardBorder = useColorModeValue("gray.200", "gray.700")
  const headerBg = useColorModeValue("purple.50", "purple.900")
  const textColor = useColorModeValue("gray.700", "gray.200")
  
  // Funzione per determinare il colore del badge in base alla priorità
  const getPriorityColor = (priority) => {
    switch(priority?.toLowerCase()) {
      case "alta": return "red";
      case "media": return "purple";
      case "bassa": return "green";
      default: return "purple";
    }
  }
  
  const handleDelete = (id) => {
    setDeletingTaskId(id)
    setIsLoading(true)
    // Simulazione di eliminazione
    setTimeout(() => {
      setIsLoading(false)
      setDeletingTaskId(null)
      toast({
        title: "Task eliminato",
        description: "Il task è stato eliminato con successo",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right"
      })
    }, 1000)
  }

  if (navigation.state === "loading") {
    return (
      <Center h="300px">
        <VStack spacing={4}>
          <Spinner size="xl" color="purple.500" thickness="4px" speed="0.8s" />
          <Text color="purple.500" fontWeight="medium">Caricamento task...</Text>
        </VStack>
      </Center>
    )
  }

  return (
    <>
      <Flex justifyContent="space-between" alignItems="center" mb={8}>
        <Heading as="h2" size="lg" color="purple.500">
          I tuoi task
        </Heading>
        <Badge colorScheme="purple" p={2} borderRadius="md" fontSize="md">
          {tasks?.length || 0} Task totali
        </Badge>
      </Flex>
      
      {tasks?.length === 0 ? (
        <Center h="200px" bg={cardBg} borderRadius="lg" boxShadow="md" p={8}>
          <VStack spacing={4}>
            <Icon as={TimeIcon} w={10} h={10} color="purple.400" />
            <Text fontSize="lg" color={textColor}>Nessun task disponibile</Text>
          </VStack>
        </Center>
      ) : (
        <SimpleGrid spacing={6} minChildWidth="320px">
          {tasks.map((task) => (
            <Card 
              key={task.id} 
              boxShadow="lg" 
              borderRadius="lg" 
              bg={cardBg} 
              borderWidth="1px"
              borderColor={cardBorder}
              transition="all 0.3s ease" 
              _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
              overflow="hidden"
            >
              <CardHeader bg={headerBg} py={4}>
                <Flex justifyContent="space-between" alignItems="center">
                  <Flex alignItems="center">
                    <Avatar src={task.img} size="md" name={task.author} mr={3} />
                    <VStack align="start" spacing={0}>
                      <Text fontSize="sm" color="gray.500">Assegnato a</Text>
                      <Text fontWeight="medium">{task.author}</Text>
                    </VStack>
                  </Flex>
                  <Badge 
                    colorScheme={getPriorityColor(task.priority)} 
                    px={3} 
                    py={1} 
                    borderRadius="full"
                    textTransform="capitalize"
                  >
                    {task.priority || "Media"}
                  </Badge>
                </Flex>
              </CardHeader>
              
              <CardBody>
                <Heading size="md" mb={2} color="purple.500">{task.title}</Heading>
                <Text color={textColor} fontSize="md">{task.description}</Text>
                
                <Flex mt={4} alignItems="center" bg="gray.50" p={2} borderRadius="md" _dark={{ bg: "gray.700" }}>
                  <TimeIcon mr={2} color="purple.500" />
                  <Text fontSize="sm" fontWeight="medium" color={textColor}>
                    {task.dueDate || "Nessuna scadenza"}
                  </Text>
                </Flex>
              </CardBody>

              <Divider borderColor={cardBorder} />

              <CardFooter bg={useColorModeValue("gray.50", "gray.900")}>
                <HStack spacing={2} width="100%" justifyContent="space-between">
                  <Tooltip label="Visualizza dettagli" hasArrow>
                    <Button leftIcon={<ViewIcon />} variant="ghost" colorScheme="blue" size="sm">
                      Visualizza
                    </Button>
                  </Tooltip>
                  <Tooltip label="Modifica task" hasArrow>
                    <Button leftIcon={<EditIcon />} variant="ghost" colorScheme="green" size="sm">
                      Modifica
                    </Button>
                  </Tooltip>
                  <Tooltip label="Elimina task" hasArrow>
                    <Button 
                      leftIcon={<DeleteIcon />} 
                      variant="ghost" 
                      colorScheme="red" 
                      size="sm"
                      isLoading={isLoading && deletingTaskId === task.id}
                      onClick={() => handleDelete(task.id)}
                    >
                      Elimina
                    </Button>
                  </Tooltip>
                </HStack>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      )}
    </>
  )
}

export const taskLoader = async () => {
  try {
    const response = await fetch("http://localhost:3000/tasks")
    if (!response.ok) {
      throw new Error("Errore nel caricamento dei task")
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Errore nel caricamento:", error)
    return []
  }
}
