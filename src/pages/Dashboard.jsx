import { SimpleGrid, Box, Text, Card, CardBody, CardHeader, CardFooter, Flex, Avatar, Button, HStack, Divider, Badge, Heading, useColorModeValue, Spinner, Center, useToast } from "@chakra-ui/react"
import { useLoaderData, useNavigation } from "react-router-dom"
import { ViewIcon, EditIcon, DeleteIcon, TimeIcon } from "@chakra-ui/icons"
import { useState, useEffect } from "react"

export default function Dashboard() {
  const tasks = useLoaderData()
  const navigation = useNavigation()
  const toast = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const cardBg = useColorModeValue("white", "gray.800")
  const badgeColorScheme = useColorModeValue("purple", "purple")
  
  const handleDelete = (id) => {
    setIsLoading(true)
    // Simulazione di eliminazione
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Task eliminato",
        description: "Il task è stato eliminato con successo",
        status: "success",
        duration: 3000,
        isClosable: true,
      })
    }, 1000)
  }

  if (navigation.state === "loading") {
    return (
      <Center h="200px">
        <Spinner size="xl" color="purple.500" thickness="4px" />
      </Center>
    )
  }

  return (
    <>
      <Heading as="h2" size="lg" mb={6} color="purple.500">
        I tuoi task
      </Heading>
      
      <SimpleGrid spacing={10} minChildWidth="300px">
        {tasks && tasks.map((task) => (
          <Card key={task.id} boxShadow="md" borderRadius="lg" bg={cardBg} transition="transform 0.3s" _hover={{ transform: "translateY(-5px)" }}>
            <CardHeader>
              <Flex justifyContent="space-between" alignItems="center">
                <Box>
                  <Avatar src={task.img} size="md" />
                </Box>
                <Box textAlign="right">
                  <Text fontWeight="bold" fontSize="lg">{task.title}</Text>
                  <Text fontSize="sm" color="gray.500">di {task.author}</Text>
                  <Badge colorScheme={badgeColorScheme} mt={2}>
                    {task.priority || "Media"}
                  </Badge>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>{task.description}</Text>
              <Flex mt={4} alignItems="center">
                <TimeIcon mr={2} color="gray.500" />
                <Text fontSize="sm" color="gray.500">
                  {task.dueDate || "Nessuna scadenza"}
                </Text>
              </Flex>
            </CardBody>

            <Divider borderColor="gray.400" />

            <CardFooter>
              <HStack spacing={2} width="100%" justifyContent="space-between">
                <Button leftIcon={<ViewIcon />} variant="ghost" colorScheme="blue" size="sm">
                  Visualizza
                </Button>
                <Button leftIcon={<EditIcon />} variant="ghost" colorScheme="green" size="sm">
                  Modifica
                </Button>
                <Button 
                  leftIcon={<DeleteIcon />} 
                  variant="ghost" 
                  colorScheme="red" 
                  size="sm"
                  isLoading={isLoading}
                  onClick={() => handleDelete(task.id)}
                >
                  Elimina
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
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
