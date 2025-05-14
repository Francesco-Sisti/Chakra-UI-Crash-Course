import { 
  Box, 
  Button, 
  Heading, 
  SimpleGrid, 
  Text, 
  VStack, 
  HStack, 
  Flex, 
  useColorModeValue, 
  Badge, 
  Divider, 
  Select,
  Switch,
  FormControl,
  FormLabel,
  useColorMode
} from "@chakra-ui/react";
import { useState } from "react";

export default function Theme() {
  const [size, setSize] = useState("md");
  const [variant, setVariant] = useState("solid");
  const [colorScheme, setColorScheme] = useState("purple");
  const { colorMode, toggleColorMode } = useColorMode();
  
  const cardBg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  
  // Diverse varianti di colore disponibili in Chakra UI
  const colorSchemes = [
    "purple", "blue", "green", "red", "orange", 
    "yellow", "teal", "cyan", "pink"
  ];
  
  // Dimensioni disponibili
  const sizes = ["xs", "sm", "md", "lg"];
  
  // Varianti di pulsanti
  const variants = ["solid", "outline", "ghost", "link"];
  
  return (
    <Box>
      <Heading as="h1" mb={8} size="xl">
        Temi e Personalizzazione
      </Heading>
      
      <Box mb={8} p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg}>
        <Heading size="md" mb={4}>Modalità Chiara/Scura</Heading>
        <Text mb={4}>
          Chakra UI supporta nativamente la modalità chiara e scura con il hook useColorMode.
        </Text>
        
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="colorMode" mb="0">
            {colorMode === "dark" ? "Modalità Scura" : "Modalità Chiara"}
          </FormLabel>
          <Switch 
            id="colorMode" 
            colorScheme="purple" 
            isChecked={colorMode === "dark"}
            onChange={toggleColorMode}
          />
        </FormControl>
      </Box>
      
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mb={8}>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg}>
          <Heading size="md" mb={4}>Personalizzazione Pulsanti</Heading>
          <VStack spacing={4} align="stretch">
            <FormControl>
              <FormLabel>Schema Colori</FormLabel>
              <Select 
                value={colorScheme} 
                onChange={(e) => setColorScheme(e.target.value)}
              >
                {colorSchemes.map(scheme => (
                  <option key={scheme} value={scheme}>{scheme}</option>
                ))}
              </Select>
            </FormControl>
            
            <FormControl>
              <FormLabel>Dimensione</FormLabel>
              <Select 
                value={size} 
                onChange={(e) => setSize(e.target.value)}
              >
                {sizes.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </Select>
            </FormControl>
            
            <FormControl>
              <FormLabel>Variante</FormLabel>
              <Select 
                value={variant} 
                onChange={(e) => setVariant(e.target.value)}
              >
                {variants.map(v => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </Select>
            </FormControl>
            
            <Box p={4} borderWidth="1px" borderRadius="md" borderColor={borderColor}>
              <Text fontWeight="bold" mb={3}>Anteprima:</Text>
              <Button 
                colorScheme={colorScheme} 
                size={size} 
                variant={variant}
              >
                Pulsante di Esempio
              </Button>
            </Box>
          </VStack>
        </Box>
        
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg}>
          <Heading size="md" mb={4}>Schema Colori</Heading>
          <Text mb={4}>
            Chakra UI include diversi schemi di colori predefiniti che 
            seguono le linee guida di accessibilità WAI-ARIA.
          </Text>
          
          <SimpleGrid columns={3} spacing={4}>
            {colorSchemes.map(scheme => (
              <Box 
                key={scheme} 
                bg={`${scheme}.500`} 
                color="white"
                p={2} 
                borderRadius="md"
                textAlign="center"
                fontWeight="bold"
              >
                {scheme}
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </SimpleGrid>
      
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg} mb={8}>
        <Heading size="md" mb={4}>Variazioni di Colore</Heading>
        <Text mb={4}>
          Ogni schema di colori include 10 tonalità, da 50 a 900.
        </Text>
        
        <VStack spacing={4} align="stretch">
          {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(shade => (
            <Flex key={shade} align="center">
              <Box 
                w="100px" 
                bg={`${colorScheme}.${shade}`} 
                h="30px" 
                borderRadius="md" 
                mr={4}
              />
              <Text fontWeight="medium">{`${colorScheme}.${shade}`}</Text>
            </Flex>
          ))}
        </VStack>
      </Box>
      
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg}>
        <Heading size="md" mb={4}>Gestione Responsive</Heading>
        <Text mb={4}>
          Chakra UI supporta nativamente la progettazione responsive attraverso array e oggetti.
        </Text>
        
        <VStack spacing={4} align="stretch">
          <Box>
            <Text fontWeight="bold" mb={2}>Esempio responsive con array:</Text>
            <Button 
              width={["100%", "auto", "250px"]}
              colorScheme="blue"
              mb={4}
            >
              Ridimensiona la finestra
            </Button>
            <Text fontSize="sm" color="gray.500">
              Width: 100% (mobile), auto (tablet), 250px (desktop)
            </Text>
          </Box>
          
          <Divider />
          
          <Box>
            <Text fontWeight="bold" mb={2}>Esempio responsive con oggetti:</Text>
            <Flex 
              direction={{ base: "column", md: "row" }}
              gap={3}
            >
              <Button colorScheme="teal">Primo</Button>
              <Button colorScheme="pink">Secondo</Button>
              <Button colorScheme="orange">Terzo</Button>
            </Flex>
            <Text fontSize="sm" color="gray.500" mt={2}>
              Column (mobile), Row (tablet e desktop)
            </Text>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
} 