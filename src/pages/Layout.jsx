import {
  AspectRatio,
  Box,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Spacer,
  Stack,
  StackDivider,
  Text,
  Wrap,
  WrapItem,
  useColorModeValue,
  Code,
} from "@chakra-ui/react";

export default function Layout() {
  const cardBg = useColorModeValue("white", "gray.700");
  const codeBg = useColorModeValue("gray.100", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const accentColor = useColorModeValue("purple.500", "purple.300");

  // Funzione di supporto per creare box colorati per gli esempi
  const DemoBox = ({ children, bg, ...props }) => (
    <Box 
      p={4} 
      bg={bg || "purple.500"} 
      color="white" 
      borderRadius="md" 
      textAlign="center"
      fontWeight="bold"
      {...props}
    >
      {children}
    </Box>
  );

  // Funzione per mostrare commenti esplicativi
  const Comment = ({ children }) => (
    <Text 
      fontSize="sm" 
      fontStyle="italic" 
      mt={2} 
      color={useColorModeValue("gray.600", "gray.400")}
    >
      {children}
    </Text>
  );

  // Funzione per mostrare codice
  const CodeExample = ({ children }) => (
    <Code 
      p={2} 
      mt={1} 
      mb={3} 
      display="block" 
      whiteSpace="pre" 
      bg={codeBg} 
      borderRadius="md"
      fontSize="sm"
    >
      {children}
    </Code>
  );

  return (
    <Box>
      <Heading as="h1" mb={8} size="xl">
        Componenti di Layout in Chakra UI
      </Heading>

      {/* Sezione Container */}
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg} mb={8}>
        <Heading size="md" mb={4} color={accentColor}>Container</Heading>
        <Text mb={4}>
          Il componente Container è utilizzato per centrare il contenuto orizzontalmente e
          applicare una larghezza massima per il layout.
        </Text>
        
        <CodeExample>
{`<Container maxW="container.xl" centerContent>
  <Box padding="4" bg="blue.400" color="white" maxW="md">
    Contenuto centrato
  </Box>
</Container>`}
        </CodeExample>

        <Container 
          maxW="container.xl" 
          p={5} 
          borderWidth="1px" 
          borderRadius="md" 
          borderColor={borderColor} 
          centerContent
          mb={4}
        >
          <Box padding="4" bg="blue.400" color="white" maxW="md" borderRadius="md">
            Contenuto centrato
          </Box>
        </Container>
        
        <Comment>
          • Il Container può avere dimensioni predefinite (xs, sm, md, lg, xl, 2xl) o personalizzate
          • L'opzione centerContent allinea tutto al centro sia orizzontalmente che verticalmente
          • È ideale per pagine dove il contenuto deve essere limitato in larghezza e centrato
        </Comment>
      </Box>

      {/* Sezione Flex */}
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg} mb={8}>
        <Heading size="md" mb={4} color={accentColor}>Flex</Heading>
        <Text mb={4}>
          Flex è un componente versatile basato sul modello CSS Flexbox, che offre un layout unidimensionale.
        </Text>
        
        <CodeExample>
{`<Flex>
  <Box flex="1" bg="green.400">Box 1</Box>
  <Box flex="1" bg="blue.400">Box 2</Box>
  <Box flex="1" bg="red.400">Box 3</Box>
</Flex>`}
        </CodeExample>

        <Flex mb={6} gap={4}>
          <DemoBox bg="green.400" flex="1">Box 1</DemoBox>
          <DemoBox bg="blue.400" flex="1">Box 2</DemoBox>
          <DemoBox bg="red.400" flex="1">Box 3</DemoBox>
        </Flex>

        <Text fontWeight="bold" mb={2}>Flex con allineamento:</Text>
        <CodeExample>
{`<Flex alignItems="center" justifyContent="space-between">
  <Box>Inizio</Box>
  <Spacer />
  <Box>Fine</Box>
</Flex>`}
        </CodeExample>

        <Flex 
          alignItems="center" 
          justifyContent="space-between" 
          p={4} 
          borderWidth="1px" 
          borderRadius="md" 
          borderColor={borderColor}
          mb={4}
        >
          <DemoBox bg="teal.400" size="80px">Inizio</DemoBox>
          <Spacer />
          <DemoBox bg="orange.400" size="80px">Fine</DemoBox>
        </Flex>

        <Comment>
          • Flex è perfetto per layout in una singola direzione (orizzontale o verticale)
          • Proprietà come justify, align, wrap, direction controllano il posizionamento
          • Spacer è un componente che crea spazio flessibile tra gli elementi
          • Gap controlla lo spazio tra gli elementi figlio
        </Comment>
      </Box>

      {/* Sezione Grid */}
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg} mb={8}>
        <Heading size="md" mb={4} color={accentColor}>Grid</Heading>
        <Text mb={4}>
          Grid è un componente potente che offre un layout bidimensionale basato su righe e colonne.
        </Text>

        <CodeExample>
{`<Grid templateColumns="repeat(3, 1fr)" gap={6}>
  <GridItem colSpan={1}>Box 1</GridItem>
  <GridItem colSpan={2}>Box 2</GridItem>
  <GridItem colSpan={3}>Box 3</GridItem>
</Grid>`}
        </CodeExample>
        
        <Grid templateColumns="repeat(3, 1fr)" gap={6} mb={6}>
          <GridItem colSpan={1}>
            <DemoBox bg="pink.400">Box 1</DemoBox>
          </GridItem>
          <GridItem colSpan={2}>
            <DemoBox bg="cyan.400">Box 2</DemoBox>
          </GridItem>
          <GridItem colSpan={3}>
            <DemoBox bg="yellow.400">Box 3</DemoBox>
          </GridItem>
        </Grid>

        <Text fontWeight="bold" mb={2}>Grid responsive:</Text>
        <CodeExample>
{`<Grid
  templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
  gap={4}
>
  {/* Elementi grid */}
</Grid>`}
        </CodeExample>
        
        <Grid 
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} 
          gap={4}
          mb={4}
        >
          {[1, 2, 3, 4].map(i => (
            <DemoBox key={i} bg={`purple.${i * 100 + 200}`}>Item {i}</DemoBox>
          ))}
        </Grid>

        <Comment>
          • Grid è ideale per layout complessi bidimensionali
          • templateColumns/templateRows definiscono la struttura del grid
          • colSpan/rowSpan controllano quante celle occupa un elemento
          • È possibile definire aree nominate con templateAreas
          • Grid supporta layout responsive modificando le impostazioni in base ai breakpoint
        </Comment>
      </Box>

      {/* Sezione SimpleGrid */}
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg} mb={8}>
        <Heading size="md" mb={4} color={accentColor}>SimpleGrid</Heading>
        <Text mb={4}>
          SimpleGrid è una versione semplificata del Grid, perfetta quando si desidera creare
          una griglia di elementi con dimensioni uguali.
        </Text>

        <CodeExample>
{`<SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
  <Box height="80px" bg="tomato" />
  <Box height="80px" bg="tomato" />
  <Box height="80px" bg="tomato" />
  <Box height="80px" bg="tomato" />
</SimpleGrid>`}
        </CodeExample>
        
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} mb={6}>
          <DemoBox height="80px" bg="red.400">1</DemoBox>
          <DemoBox height="80px" bg="green.400">2</DemoBox>
          <DemoBox height="80px" bg="blue.400">3</DemoBox>
          <DemoBox height="80px" bg="orange.400">4</DemoBox>
        </SimpleGrid>

        <Text fontWeight="bold" mb={2}>SimpleGrid con minChildWidth:</Text>
        <CodeExample>
{`<SimpleGrid minChildWidth="200px" spacing={4}>
  {/* Gli elementi saranno disposti in base allo spazio disponibile */}
</SimpleGrid>`}
        </CodeExample>
        
        <SimpleGrid minChildWidth="150px" spacing={4} mb={4}>
          {[1, 2, 3, 4, 5, 6].map(i => (
            <DemoBox key={i} height="80px" bg={`teal.${i * 100}`}>{i}</DemoBox>
          ))}
        </SimpleGrid>

        <Comment>
          • SimpleGrid è perfetto quando tutti gli elementi devono avere la stessa dimensione
          • minChildWidth fa in modo che gli elementi abbiano una larghezza minima specificata
          • Gli elementi si ridispongono automaticamente in base allo spazio disponibile
          • Molto utile per gallerie di foto, card o griglie di prodotti
        </Comment>
      </Box>

      {/* Sezione Stack */}
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg} mb={8}>
        <Heading size="md" mb={4} color={accentColor}>Stack</Heading>
        <Text mb={4}>
          Stack è utilizzato per impilare elementi con spaziatura uniforme sia in verticale (VStack) 
          che in orizzontale (HStack).
        </Text>

        <Text fontWeight="bold" mb={2}>VStack:</Text>
        <CodeExample>
{`<VStack spacing={4} align="stretch">
  <Box bg="yellow.400" h="40px" />
  <Box bg="tomato" h="40px" />
  <Box bg="pink.400" h="40px" />
</VStack>`}
        </CodeExample>
        
        <Stack direction="column" spacing={4} mb={6}>
          <DemoBox bg="yellow.400" h="40px" />
          <DemoBox bg="tomato" h="40px" />
          <DemoBox bg="pink.400" h="40px" />
        </Stack>

        <Text fontWeight="bold" mb={2}>HStack:</Text>
        <CodeExample>
{`<HStack spacing={4}>
  <Box bg="green.400" w="100px" h="40px" />
  <Box bg="blue.400" w="100px" h="40px" />
  <Box bg="purple.400" w="100px" h="40px" />
</HStack>`}
        </CodeExample>
        
        <Stack direction="row" spacing={4} mb={6}>
          <DemoBox bg="green.400" w="100px" h="40px" />
          <DemoBox bg="blue.400" w="100px" h="40px" />
          <DemoBox bg="purple.400" w="100px" h="40px" />
        </Stack>

        <Text fontWeight="bold" mb={2}>Stack con divisori:</Text>
        <CodeExample>
{`<VStack
  divider={<StackDivider borderColor="gray.200" />}
  spacing={4}
  align="stretch"
>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
</VStack>`}
        </CodeExample>
        
        <Stack 
          direction="column" 
          divider={<StackDivider borderColor={borderColor} />} 
          spacing={4} 
          p={4} 
          borderWidth="1px" 
          borderRadius="md" 
          borderColor={borderColor}
          mb={4}
        >
          <DemoBox bg="blue.400">Item 1</DemoBox>
          <DemoBox bg="blue.400">Item 2</DemoBox>
          <DemoBox bg="blue.400">Item 3</DemoBox>
        </Stack>

        <Comment>
          • Stack risolve il problema della spaziatura uniforme tra gli elementi
          • VStack impila verticalmente, HStack orizzontalmente
          • Supporta divisori tra elementi con StackDivider
          • Puoi cambiare la direzione in modo responsive (vertical su mobile, horizontal su desktop)
          • Molto utile per form, menu, liste o qualsiasi gruppo di elementi
        </Comment>
      </Box>

      {/* Sezione Center e AspectRatio */}
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg} mb={8}>
        <Heading size="md" mb={4} color={accentColor}>Center e AspectRatio</Heading>
        <Text mb={4}>
          Center è un componente semplice ma utile per centrare il contenuto, mentre AspectRatio
          mantiene un rapporto d'aspetto costante.
        </Text>

        <Text fontWeight="bold" mb={2}>Center:</Text>
        <CodeExample>
{`<Center h="100px" color="white" bg="blue.500">
  Questo contenuto è perfettamente centrato
</Center>`}
        </CodeExample>
        
        <Center h="100px" color="white" bg="blue.500" borderRadius="md" mb={6}>
          Questo contenuto è perfettamente centrato
        </Center>

        <Text fontWeight="bold" mb={2}>AspectRatio:</Text>
        <CodeExample>
{`<AspectRatio ratio={16 / 9}>
  <iframe
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    title="YouTube video"
  />
</AspectRatio>`}
        </CodeExample>
        
        <AspectRatio ratio={16 / 9} mb={4}>
          <Box bg="gray.500" borderRadius="md" display="flex" alignItems="center" justifyContent="center">
            <Text color="white" fontWeight="bold">Video placeholder (16:9)</Text>
          </Box>
        </AspectRatio>

        <Comment>
          • Center posiziona il contenuto al centro sia orizzontalmente che verticalmente
          • È molto più semplice di usare Flex con justify e align center
          • AspectRatio mantiene un rapporto costante indipendentemente dalla larghezza
          • Ottimo per contenuti multimediali come video, mappe e immagini
          • Evita il "layout shift" quando il contenuto viene caricato
        </Comment>
      </Box>

      {/* Sezione Wrap */}
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg}>
        <Heading size="md" mb={4} color={accentColor}>Wrap</Heading>
        <Text mb={4}>
          Wrap è utile quando si desidera che gli elementi vadano a capo quando lo spazio è insufficiente.
        </Text>

        <CodeExample>
{`<Wrap spacing="30px">
  <WrapItem><Center w="180px" h="80px" bg="red.200">Box 1</Center></WrapItem>
  <WrapItem><Center w="180px" h="80px" bg="green.200">Box 2</Center></WrapItem>
  <WrapItem><Center w="180px" h="80px" bg="tomato">Box 3</Center></WrapItem>
  <WrapItem><Center w="180px" h="80px" bg="blue.200">Box 4</Center></WrapItem>
</Wrap>`}
        </CodeExample>
        
        <Wrap spacing="30px" mb={4}>
          <WrapItem>
            <Center w="180px" h="80px" bg="red.400" color="white" borderRadius="md">Box 1</Center>
          </WrapItem>
          <WrapItem>
            <Center w="180px" h="80px" bg="green.400" color="white" borderRadius="md">Box 2</Center>
          </WrapItem>
          <WrapItem>
            <Center w="180px" h="80px" bg="tomato" color="white" borderRadius="md">Box 3</Center>
          </WrapItem>
          <WrapItem>
            <Center w="180px" h="80px" bg="blue.400" color="white" borderRadius="md">Box 4</Center>
          </WrapItem>
          <WrapItem>
            <Center w="180px" h="80px" bg="purple.400" color="white" borderRadius="md">Box 5</Center>
          </WrapItem>
        </Wrap>

        <Comment>
          • Wrap è simile a Flex con wrap, ma con una API più intuitiva
          • Gli elementi vanno a capo automaticamente quando non c'è spazio sufficiente
          • Ottimo per tag, badge, filtri o qualsiasi gruppo di elementi che deve adattarsi a diverse dimensioni dello schermo
          • Supporta spacing uniforme in tutte le direzioni
          • Ogni elemento deve essere avvolto in un WrapItem per una corretta spaziatura
        </Comment>
      </Box>
    </Box>
  );
} 