import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Badge,
  Box,
  Code,
  Divider,
  Flex,
  Heading,
  Image,
  Kbd,
  List,
  ListIcon,
  ListItem,
  OrderedList,
  SimpleGrid,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tooltip,
  Tr,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckCircleIcon, InfoIcon, QuestionIcon, WarningIcon } from "@chakra-ui/icons";

export default function DataDisplay() {
  const cardBg = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const accentColor = useColorModeValue("purple.500", "purple.300");
  const codeBg = useColorModeValue("gray.100", "gray.800");

  // Funzione per i commenti esplicativi
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

  return (
    <Box>
      <Heading as="h1" mb={8} size="xl">
        Componenti per Visualizzazione Dati in Chakra UI
      </Heading>

      {/* Sezione Avatar */}
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg} mb={8}>
        <Heading size="md" mb={4} color={accentColor}>
          Avatar
        </Heading>
        <Text mb={4}>
          Gli Avatar rappresentano in modo visivo un utente o un'entità con immagini, iniziali o fallback.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box>
            <Text fontWeight="bold" mb={3}>Avatar base:</Text>
            <Flex gap={4} mb={4}>
              <Avatar name="Mario Rossi" src="https://bit.ly/dan-abramov" />
              <Avatar name="Luigi Bianchi" />
              <Avatar name="Chiara Verdi" bg="purple.500" />
            </Flex>

            <Text fontWeight="bold" mb={3}>Avatar con taglia:</Text>
            <Flex gap={4} mb={4} align="center">
              <Avatar size="xs" name="Paolo Neri" />
              <Avatar size="sm" name="Paolo Neri" />
              <Avatar size="md" name="Paolo Neri" />
              <Avatar size="lg" name="Paolo Neri" />
              <Avatar size="xl" name="Paolo Neri" />
            </Flex>

            <Comment>
              • Avatar genera automaticamente un colore di sfondo in base al nome
              • Se src fallisce, viene mostrato il fallback (iniziali)
              • È possibile personalizzare colore, bordo e dimensione
            </Comment>
          </Box>

          <Box>
            <Text fontWeight="bold" mb={3}>Avatar con badge:</Text>
            <Flex gap={4} mb={4}>
              <Avatar name="Sara Bianchi">
                <AvatarBadge boxSize="1.25em" bg="green.500" />
              </Avatar>
              <Avatar name="Marco Verdi">
                <AvatarBadge boxSize="1.25em" bg="red.500" />
              </Avatar>
            </Flex>

            <Text fontWeight="bold" mb={3}>Gruppo di Avatar:</Text>
            <AvatarGroup size="md" max={3} mb={4}>
              <Avatar name="Mario Rossi" src="https://bit.ly/dan-abramov" />
              <Avatar name="Luigi Bianchi" src="https://bit.ly/kent-c-dodds" />
              <Avatar name="Chiara Verdi" src="https://bit.ly/ryan-florence" />
              <Avatar name="Paola Giallo" src="https://bit.ly/prosper-baba" />
              <Avatar name="Paolo Neri" src="https://bit.ly/code-beast" />
            </AvatarGroup>

            <Comment>
              • AvatarBadge può indicare lo stato dell'utente (online/offline)
              • AvatarGroup mostra un insieme di avatar con sovrapposizione
              • La proprietà max limita il numero di avatar da mostrare
            </Comment>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Sezione Badge e Tag */}
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg} mb={8}>
        <Heading size="md" mb={4} color={accentColor}>
          Badge
        </Heading>
        <Text mb={4}>
          I Badge sono utili per evidenziare lo stato di un elemento o per etichettare contenuti.
        </Text>

        <Flex wrap="wrap" gap={4} mb={6}>
          <Badge>Default</Badge>
          <Badge colorScheme="green">Success</Badge>
          <Badge colorScheme="red">Rimosso</Badge>
          <Badge colorScheme="purple">Nuovo</Badge>
          <Badge colorScheme="yellow">In attesa</Badge>
          <Badge colorScheme="blue" variant="solid">Solido</Badge>
          <Badge colorScheme="cyan" variant="subtle">Sottile</Badge>
          <Badge colorScheme="orange" variant="outline">Outline</Badge>
        </Flex>

        <Text fontWeight="bold" mb={3}>Badge con conteggio:</Text>
        <Flex gap={2} wrap="wrap">
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              Nuovo
            </Badge>
            <Box
              color={useColorModeValue("gray.500", "gray.400")}
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              ml="2"
            >
              4 ITEMS &bull; AGGIUNTI OGGI
            </Box>
          </Box>
        </Flex>

        <Comment>
          • Badge supporta varianti: solid, subtle, outline
          • Perfetti per indicare stati, conteggi o etichette
          • Possono essere combinati con altri elementi per creare componenti informativi
          • Supportano tutti gli schemi di colore di Chakra UI
        </Comment>
      </Box>

      {/* Sezione List */}
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg} mb={8}>
        <Heading size="md" mb={4} color={accentColor}>
          List
        </Heading>
        <Text mb={4}>
          Chakra UI fornisce componenti per elenchi ordinati, non ordinati e personalizzati.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box>
            <Text fontWeight="bold" mb={3}>Lista non ordinata:</Text>
            <UnorderedList spacing={2} mb={4}>
              <ListItem>Lorem ipsum dolor sit amet</ListItem>
              <ListItem>Consectetur adipiscing elit</ListItem>
              <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </UnorderedList>

            <Text fontWeight="bold" mb={3}>Lista ordinata:</Text>
            <OrderedList spacing={2} mb={4}>
              <ListItem>Apri il documento</ListItem>
              <ListItem>Trova la sezione desiderata</ListItem>
              <ListItem>Modifica il contenuto</ListItem>
              <ListItem>Salva le modifiche</ListItem>
            </OrderedList>
          </Box>

          <Box>
            <Text fontWeight="bold" mb={3}>Lista con icone:</Text>
            <List spacing={3} mb={4}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Task completato
              </ListItem>
              <ListItem>
                <ListIcon as={InfoIcon} color="blue.500" />
                Informazione importante
              </ListItem>
              <ListItem>
                <ListIcon as={WarningIcon} color="orange.500" />
                Attenzione: richiesta azione
              </ListItem>
              <ListItem>
                <ListIcon as={QuestionIcon} color="purple.500" />
                Domanda frequente
              </ListItem>
            </List>

            <Comment>
              • UnorderedList e OrderedList hanno stile predefinito con punti o numeri
              • List è più generico e può essere personalizzato con icone
              • ListIcon è un componente dedicato per aggiungere icone alla lista
              • Tutte le liste supportano spaziatura uniforme tra elementi
            </Comment>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Sezione Table */}
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg} mb={8}>
        <Heading size="md" mb={4} color={accentColor}>
          Table
        </Heading>
        <Text mb={4}>
          Le tabelle in Chakra UI sono facili da personalizzare e accessibili per screen reader.
        </Text>

        <TableContainer borderWidth="1px" borderRadius="lg" borderColor={borderColor} mb={4}>
          <Table variant="simple" size="md">
            <TableCaption>Dati dei clienti premium</TableCaption>
            <Thead bg={useColorModeValue("gray.50", "gray.800")}>
              <Tr>
                <Th>Nome</Th>
                <Th>Città</Th>
                <Th isNumeric>Fatturato</Th>
                <Th>Stato</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Mario Rossi</Td>
                <Td>Milano</Td>
                <Td isNumeric>€25,000</Td>
                <Td>
                  <Badge colorScheme="green">Attivo</Badge>
                </Td>
              </Tr>
              <Tr>
                <Td>Giulia Bianchi</Td>
                <Td>Roma</Td>
                <Td isNumeric>€42,000</Td>
                <Td>
                  <Badge colorScheme="green">Attivo</Badge>
                </Td>
              </Tr>
              <Tr>
                <Td>Luca Verdi</Td>
                <Td>Napoli</Td>
                <Td isNumeric>€15,000</Td>
                <Td>
                  <Badge colorScheme="yellow">In attesa</Badge>
                </Td>
              </Tr>
              <Tr>
                <Td>Anna Neri</Td>
                <Td>Torino</Td>
                <Td isNumeric>€18,500</Td>
                <Td>
                  <Badge colorScheme="red">Sospeso</Badge>
                </Td>
              </Tr>
            </Tbody>
            <Tfoot bg={useColorModeValue("gray.50", "gray.800")}>
              <Tr>
                <Th>Totale</Th>
                <Th></Th>
                <Th isNumeric>€100,500</Th>
                <Th></Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>

        <Comment>
          • TableContainer assicura una corretta responsività con scorrimento orizzontale
          • Thead, Tbody e Tfoot permettono di organizzare semanticamente la tabella
          • Varianti disponibili: simple, striped, unstyled
          • Dimensioni disponibili: sm, md, lg
          • Supporta allineamento numerico con la prop isNumeric
        </Comment>
      </Box>

      {/* Sezione Stat */}
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg} mb={8}>
        <Heading size="md" mb={4} color={accentColor}>
          Stat
        </Heading>
        <Text mb={4}>
          Il componente Stat è utile per visualizzare statistiche e metriche in modo chiaro.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} mb={4}>
          <StatGroup>
            <Stat>
              <StatLabel>Visite</StatLabel>
              <StatNumber>345,670</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                23.36%
              </StatHelpText>
            </Stat>
          </StatGroup>

          <StatGroup>
            <Stat>
              <StatLabel>Downloads</StatLabel>
              <StatNumber>45,670</StatNumber>
              <StatHelpText>
                <StatArrow type="decrease" />
                9.05%
              </StatHelpText>
            </Stat>
          </StatGroup>

          <StatGroup>
            <Stat>
              <StatLabel>Utenti attivi</StatLabel>
              <StatNumber>22,852</StatNumber>
              <StatHelpText>Dal 1 Gennaio 2023</StatHelpText>
            </Stat>
          </StatGroup>
        </SimpleGrid>

        <Box py={3} px={5} borderWidth="1px" borderRadius="md" borderColor={borderColor} mb={4}>
          <StatGroup>
            <Stat>
              <StatLabel>Vendite</StatLabel>
              <StatNumber>€89,400</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                13.2% rispetto al mese scorso
              </StatHelpText>
            </Stat>

            <Stat>
              <StatLabel>Costi</StatLabel>
              <StatNumber>€12,658</StatNumber>
              <StatHelpText>
                <StatArrow type="decrease" />
                5.1% rispetto al mese scorso
              </StatHelpText>
            </Stat>

            <Stat>
              <StatLabel>Profitto</StatLabel>
              <StatNumber>€76,742</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                15.3% rispetto al mese scorso
              </StatHelpText>
            </Stat>
          </StatGroup>
        </Box>

        <Comment>
          • Stat è composto da diversi componenti: StatLabel, StatNumber, StatHelpText, StatArrow
          • StatGroup permette di visualizzare più statistiche affiancate
          • StatArrow fornisce un indicatore visivo della direzione del trend
          • Ideale per dashboard, report e visualizzazioni dei dati
        </Comment>
      </Box>

      {/* Sezione Tooltip, Code, Kbd */}
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg} mb={8}>
        <Heading size="md" mb={4} color={accentColor}>
          Tooltip, Code, Kbd
        </Heading>
        <Text mb={4}>
          Chakra UI offre vari componenti per aumentare l'usabilità e visualizzare informazioni tecniche.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box>
            <Text fontWeight="bold" mb={3}>Tooltip:</Text>
            <Flex gap={4} mb={4}>
              <Tooltip hasArrow label="Tooltip di esempio" bg="gray.300" color="black">
                <InfoIcon cursor="pointer" />
              </Tooltip>
              <Tooltip hasArrow label="Posizione superiore" placement="top">
                <Badge colorScheme="purple" cursor="pointer">Top</Badge>
              </Tooltip>
              <Tooltip hasArrow label="Posizione a destra" placement="right">
                <Badge colorScheme="blue" cursor="pointer">Right</Badge>
              </Tooltip>
              <Tooltip hasArrow label="Posizione inferiore" placement="bottom">
                <Badge colorScheme="green" cursor="pointer">Bottom</Badge>
              </Tooltip>
              <Tooltip hasArrow label="Posizione a sinistra" placement="left">
                <Badge colorScheme="red" cursor="pointer">Left</Badge>
              </Tooltip>
            </Flex>

            <Comment>
              • Tooltip può essere applicato a qualsiasi elemento per mostrare informazioni aggiuntive
              • Supporta diverse posizioni e personalizzazioni
              • Aumenta l'usabilità mostrando suggerimenti al passaggio del mouse
            </Comment>
          </Box>

          <Box>
            <Text fontWeight="bold" mb={3}>Code e Kbd:</Text>
            <Box mb={4}>
              <Text>Per installare Chakra UI, esegui <Code>npm i @chakra-ui/react</Code> nel tuo terminale.</Text>
              <Divider my={2} />
              <Text>Premi <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd> per copiare il testo selezionato.</Text>
              <Divider my={2} />
              <Text>Usa <Kbd bg="orange.200">Esc</Kbd> per chiudere la finestra di dialogo.</Text>
            </Box>

            <Comment>
              • Code è utile per mostrare snippet di codice inline
              • Kbd rappresenta tasti della tastiera per le scorciatoie
              • Entrambi aiutano a migliorare la documentazione e le istruzioni
            </Comment>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Sezione Image */}
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg}>
        <Heading size="md" mb={4} color={accentColor}>
          Image
        </Heading>
        <Text mb={4}>
          Il componente Image in Chakra UI offre funzionalità avanzate rispetto al tag HTML img standard.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box>
            <Text fontWeight="bold" mb={3}>Immagine base:</Text>
            <Image
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb"
              alt="Esempio di immagine"
              borderRadius="lg"
              mb={4}
            />

            <Text fontWeight="bold" mb={3}>Immagine con fallback:</Text>
            <Image
              src="https://invalid-url-that-will-fail.jpg"
              fallbackSrc="https://via.placeholder.com/400x300?text=Immagine+non+disponibile"
              alt="Esempio con fallback"
              borderRadius="lg"
              mb={4}
            />

            <Comment>
              • Image supporta tutte le proprietà dell'elemento img HTML
              • fallbackSrc mostra un'immagine alternativa in caso di errore
              • borderRadius e altre proprietà di stile possono essere applicate direttamente
            </Comment>
          </Box>

          <Box>
            <Text fontWeight="bold" mb={3}>Immagine con fit e align:</Text>
            <Box height="200px" width="100%" bg="gray.200" mb={4} borderRadius="lg" overflow="hidden">
              <Image
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5"
                alt="Fit example"
                objectFit="cover"
                w="100%"
                h="100%"
              />
            </Box>

            <Text fontWeight="bold" mb={3}>Immagine con loading="lazy":</Text>
            <Image
              src="https://images.unsplash.com/photo-1606787366850-de6330128bfc"
              alt="Lazy loading example"
              loading="lazy"
              borderRadius="lg"
              mb={4}
            />

            <Comment>
              • objectFit e objectPosition permettono di controllare come l'immagine si adatta al suo contenitore
              • loading="lazy" migliora le prestazioni caricando le immagini solo quando sono vicine al viewport
              • Supporta altre proprietà di ottimizzazione come sizes e srcSet per una migliore responsività
            </Comment>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
} 