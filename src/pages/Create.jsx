import { 
  Box, 
  Heading, 
  FormControl, 
  FormLabel, 
  Input, 
  Textarea, 
  Button, 
  Select, 
  VStack, 
  useColorModeValue, 
  useToast,
  Flex,
  Icon,
  InputGroup,
  InputLeftElement,
  Divider,
  Text,
  Card,
  CardBody,
  CardHeader,
  Badge
} from "@chakra-ui/react"
import { useState } from "react"
import { CalendarIcon, CheckIcon, StarIcon, TimeIcon } from "@chakra-ui/icons"

export default function Create() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [priority, setPriority] = useState("Media")
  const [dueDate, setDueDate] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  
  const toast = useToast()
  const formBg = useColorModeValue("white", "gray.800")
  const headerBg = useColorModeValue("purple.50", "purple.900")
  const borderColor = useColorModeValue("purple.100", "purple.700")
  
  const getPriorityColor = (priority) => {
    switch(priority.toLowerCase()) {
      case "alta": return "red";
      case "media": return "yellow";
      case "bassa": return "green";
      default: return "yellow";
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulazione invio dati
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Task creato",
        description: "Il nuovo task è stato creato con successo",
        status: "success",
        duration: 3000,
        isClosable: true,
      })
      
      // Reset form
      setTitle("")
      setDescription("")
      setPriority("Media")
      setDueDate("")
    }, 1000)
  }
  
  return (
    <Box>
      <Heading as="h2" size="lg" mb={6} color="purple.500">
        Crea Nuovo Task
      </Heading>
      
      <Flex direction={{ base: "column", lg: "row" }} gap={6}>
        <Box flex="1" bg={formBg} p={6} borderRadius="lg" boxShadow="md" borderWidth="1px" borderColor={borderColor}>
          <Card bg={headerBg} mb={6} variant="outline">
            <CardHeader pb={2}>
              <Heading size="md" color="purple.600">Inserisci i dettagli del task</Heading>
            </CardHeader>
            <CardBody pt={0}>
              <Text fontSize="sm">Compila tutti i campi necessari per creare un nuovo task</Text>
            </CardBody>
          </Card>
          
          <form onSubmit={handleSubmit}>
            <VStack spacing={5} align="flex-start">
              <FormControl isRequired>
                <FormLabel fontWeight="bold">Titolo</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Icon as={CheckIcon} color="purple.500" />
                  </InputLeftElement>
                  <Input 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Inserisci il titolo del task"
                    focusBorderColor="purple.400"
                  />
                </InputGroup>
              </FormControl>
              
              <FormControl>
                <FormLabel fontWeight="bold">Descrizione</FormLabel>
                <Textarea 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Descrivi il task"
                  rows={4}
                  focusBorderColor="purple.400"
                />
              </FormControl>
              
              <FormControl>
                <FormLabel fontWeight="bold">Priorità</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Icon as={StarIcon} color="purple.500" />
                  </InputLeftElement>
                  <Select 
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    focusBorderColor="purple.400"
                    pl="40px"
                  >
                    <option value="Bassa">Bassa</option>
                    <option value="Media">Media</option>
                    <option value="Alta">Alta</option>
                  </Select>
                </InputGroup>
              </FormControl>
              
              <FormControl>
                <FormLabel fontWeight="bold">Data di scadenza</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Icon as={CalendarIcon} color="purple.500" />
                  </InputLeftElement>
                  <Input 
                    type="date" 
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    focusBorderColor="purple.400"
                  />
                </InputGroup>
              </FormControl>
              
              <Divider borderColor={borderColor} my={2} />
              
              <Button 
                type="submit" 
                colorScheme="purple" 
                isLoading={isLoading}
                loadingText="Creazione in corso..."
                width="full"
                mt={4}
                size="lg"
                boxShadow="sm"
                _hover={{ boxShadow: "md" }}
              >
                Crea Task
              </Button>
            </VStack>
          </form>
        </Box>
        
        {/* Anteprima del task */}
        {title && (
          <Box flex="1" maxW={{ base: "100%", lg: "400px" }}>
            <Card boxShadow="md" borderRadius="lg" bg={formBg} overflow="hidden">
              <CardHeader bg={headerBg} pb={3}>
                <Heading size="md" color="purple.600">Anteprima Task</Heading>
              </CardHeader>
              <CardBody>
                <VStack align="stretch" spacing={4}>
                  <Box>
                    <Heading size="md">{title || "Titolo del task"}</Heading>
                    <Badge colorScheme={getPriorityColor(priority)} mt={2}>
                      {priority}
                    </Badge>
                  </Box>
                  
                  <Divider />
                  
                  <Text>{description || "Nessuna descrizione"}</Text>
                  
                  {dueDate && (
                    <Flex align="center">
                      <Icon as={TimeIcon} mr={2} color="purple.500" />
                      <Text fontSize="sm">Scadenza: {dueDate}</Text>
                    </Flex>
                  )}
                </VStack>
              </CardBody>
            </Card>
          </Box>
        )}
      </Flex>
    </Box>
  )
}
