import { useState, useRef } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  Tooltip,
  useColorModeValue,
  useDisclosure,
  VStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Progress,
  CircularProgress,
  CircularProgressLabel,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import { 
  AddIcon, 
  CheckIcon, 
  InfoIcon, 
  StarIcon, 
  WarningIcon, 
  InfoOutlineIcon 
} from "@chakra-ui/icons";

export default function Showcase() {
  const cardBg = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  
  // Modal state
  const { 
    isOpen: isModalOpen, 
    onOpen: onModalOpen, 
    onClose: onModalClose 
  } = useDisclosure();
  
  // Drawer state
  const { 
    isOpen: isDrawerOpen, 
    onOpen: onDrawerOpen, 
    onClose: onDrawerClose 
  } = useDisclosure();
  const drawerBtnRef = useRef();
  
  // Alert Dialog state
  const { 
    isOpen: isAlertOpen, 
    onOpen: onAlertOpen, 
    onClose: onAlertClose 
  } = useDisclosure();
  const cancelRef = useRef();
  
  // Progress Demo
  const [progress, setProgress] = useState(60);
  
  return (
    <Box>
      <Heading mb={8} size="xl">
        Componenti Avanzati di Chakra UI
      </Heading>
      
      <Tabs colorScheme="purple" variant="enclosed" mb={8}>
        <TabList>
          <Tab>Dialog</Tab>
          <Tab>Feedback</Tab>
          <Tab>Disclosure</Tab>
          <Tab>Altri Componenti</Tab>
        </TabList>
        
        <TabPanels>
          <TabPanel>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
              <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg}>
                <Heading size="md" mb={4}>Modal</Heading>
                <Text mb={4}>
                  I modali sono utili per richiedere decisioni o mostrare informazioni critiche.
                </Text>
                <Button colorScheme="purple" onClick={onModalOpen}>
                  Apri Modal
                </Button>
                
                <Modal isOpen={isModalOpen} onClose={onModalClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Titolo del Modal</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Text>
                        Questo è un esempio di modal in Chakra UI.
                        È facile da personalizzare e accessibile.
                      </Text>
                    </ModalBody>
                    <ModalFooter>
                      <Button colorScheme="purple" mr={3} onClick={onModalClose}>
                        Chiudi
                      </Button>
                      <Button variant="ghost">Azione Secondaria</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Box>
              
              <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg}>
                <Heading size="md" mb={4}>Alert Dialog</Heading>
                <Text mb={4}>
                  Gli alert dialog sono utili per confermare azioni distruttive.
                </Text>
                <Button colorScheme="red" onClick={onAlertOpen}>
                  Elimina Qualcosa
                </Button>
                
                <AlertDialog
                  isOpen={isAlertOpen}
                  leastDestructiveRef={cancelRef}
                  onClose={onAlertClose}
                >
                  <AlertDialogOverlay>
                    <AlertDialogContent>
                      <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        Conferma Eliminazione
                      </AlertDialogHeader>
                      <AlertDialogBody>
                        Sei sicuro? Non potrai annullare questa azione.
                      </AlertDialogBody>
                      <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onAlertClose}>
                          Annulla
                        </Button>
                        <Button colorScheme="red" onClick={onAlertClose} ml={3}>
                          Elimina
                        </Button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialogOverlay>
                </AlertDialog>
              </Box>
              
              <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg}>
                <Heading size="md" mb={4}>Drawer</Heading>
                <Text mb={4}>
                  I drawer sono pannelli che scivolano da un lato dello schermo.
                </Text>
                <Button 
                  ref={drawerBtnRef} 
                  colorScheme="teal" 
                  onClick={onDrawerOpen}
                >
                  Apri Drawer
                </Button>
                
                <Drawer
                  isOpen={isDrawerOpen}
                  placement="right"
                  onClose={onDrawerClose}
                  finalFocusRef={drawerBtnRef}
                >
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Crea il tuo account</DrawerHeader>
                    <DrawerBody>
                      <Text>
                        I drawer sono utili per nascondere contenuti secondari
                        o form che non devono essere sempre visibili.
                      </Text>
                    </DrawerBody>
                    <DrawerFooter>
                      <Button variant="outline" mr={3} onClick={onDrawerClose}>
                        Annulla
                      </Button>
                      <Button colorScheme="blue">Salva</Button>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </Box>
              
              <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg}>
                <Heading size="md" mb={4}>Popover</Heading>
                <Text mb={4}>
                  I popover mostrano informazioni aggiuntive al passaggio del mouse.
                </Text>
                <Flex justifyContent="space-around">
                  <Popover>
                    <PopoverTrigger>
                      <Button>Esempio Popover</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Titolo Popover</PopoverHeader>
                      <PopoverBody>
                        I popover possono contenere qualsiasi tipo di contenuto.
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  
                  <Tooltip hasArrow label="Tooltip di esempio" bg="gray.300" color="black">
                    <Button>Tooltip</Button>
                  </Tooltip>
                </Flex>
              </Box>
            </SimpleGrid>
          </TabPanel>
          
          <TabPanel>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
              <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg}>
                <Heading size="md" mb={4}>Statistiche e Progresso</Heading>
                <StatGroup mb={4}>
                  <Stat>
                    <StatLabel>Visite</StatLabel>
                    <StatNumber>345,670</StatNumber>
                    <StatHelpText>
                      <StatArrow type="increase" />
                      23.36%
                    </StatHelpText>
                  </Stat>
                  <Stat>
                    <StatLabel>Click</StatLabel>
                    <StatNumber>45,670</StatNumber>
                    <StatHelpText>
                      <StatArrow type="decrease" />
                      9.05%
                    </StatHelpText>
                  </Stat>
                </StatGroup>
                
                <Text fontWeight="bold" mb={2}>Progresso Lineare</Text>
                <Progress value={progress} colorScheme="purple" mb={4} />
                
                <Flex justifyContent="space-around">
                  <CircularProgress value={progress} color="green.400">
                    <CircularProgressLabel>{progress}%</CircularProgressLabel>
                  </CircularProgress>
                  
                  <ButtonGroup size="sm">
                    <Button 
                      onClick={() => setProgress(Math.max(0, progress - 10))}
                      isDisabled={progress <= 0}
                    >
                      -
                    </Button>
                    <Button 
                      onClick={() => setProgress(Math.min(100, progress + 10))}
                      isDisabled={progress >= 100}
                    >
                      +
                    </Button>
                  </ButtonGroup>
                </Flex>
              </Box>
              
              <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg}>
                <Heading size="md" mb={4}>Skeleton Loading</Heading>
                <Text mb={4}>
                  Le skeleton sono utili per mostrare un'anteprima del contenuto durante il caricamento.
                </Text>
                <Box mb={5}>
                  <Skeleton height="20px" mb={2} />
                  <Skeleton height="20px" mb={2} />
                  <Skeleton height="20px" mb={2} />
                </Box>
                
                <Flex mb={5}>
                  <SkeletonCircle size="10" mr={4} />
                  <SkeletonText mt="2" noOfLines={2} spacing="2" flex="1" />
                </Flex>
                
                <Box p={5} borderWidth="1px" borderRadius="md">
                  <Heading size="sm" mb={2}>Contenuto Caricato</Heading>
                  <Text>Questo è il contenuto reale, già caricato.</Text>
                </Box>
              </Box>
              
              <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg}>
                <Heading size="md" mb={4}>Badge e Tag</Heading>
                <VStack align="flex-start" spacing={4}>
                  <Flex wrap="wrap" gap={2}>
                    <Badge>Default</Badge>
                    <Badge colorScheme="green">Successo</Badge>
                    <Badge colorScheme="red">Errore</Badge>
                    <Badge colorScheme="purple">Speciale</Badge>
                    <Badge colorScheme="yellow">Avviso</Badge>
                  </Flex>
                  
                  <Flex wrap="wrap" gap={2}>
                    <Tag size="sm" colorScheme="cyan">
                      <TagLeftIcon as={InfoIcon} />
                      <TagLabel>Informazione</TagLabel>
                    </Tag>
                    
                    <Tag size="md" variant="solid" colorScheme="green">
                      <TagLeftIcon as={CheckIcon} />
                      <TagLabel>Successo</TagLabel>
                    </Tag>
                    
                    <Tag size="lg" variant="subtle" colorScheme="red">
                      <TagLeftIcon as={WarningIcon} />
                      <TagLabel>Avviso</TagLabel>
                    </Tag>
                  </Flex>
                </VStack>
              </Box>
            </SimpleGrid>
          </TabPanel>
          
          <TabPanel>
            <SimpleGrid columns={{ base: 1, lg: 1 }} spacing={6}>
              <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg}>
                <Heading size="md" mb={4}>Accordion</Heading>
                <Accordion allowToggle>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Sezione 1
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Gli accordion sono utili per nascondere contenuti che non devono essere
                      sempre visibili. Sono perfetti per le FAQ e altri contenuti strutturati.
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Sezione 2
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Puoi utilizzare l'accordion per nascondere e mostrare sezioni di contenuto.
                      È un modo efficace per risparmiare spazio e migliorare l'usabilità.
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Sezione 3
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Chakra UI rende semplice l'implementazione di componenti
                      accessibili come l'accordion. Supportano perfettamente
                      la navigazione da tastiera e gli screen reader.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            </SimpleGrid>
          </TabPanel>
          
          <TabPanel>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
              <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg}>
                <Heading size="md" mb={4}>Stelle di Valutazione</Heading>
                <Flex>
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < 3 ? "yellow.400" : "gray.300"}
                        boxSize={8}
                        mr={1}
                      />
                    ))}
                </Flex>
                <Text mt={2}>
                  Puoi creare componenti di valutazione a stelle utilizzando StarIcon.
                </Text>
              </Box>
              
              <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg}>
                <Heading size="md" mb={4}>Componenti Informativi</Heading>
                <Flex 
                  p={2} 
                  bg="blue.50" 
                  color="blue.800" 
                  borderRadius="md" 
                  borderLeft="4px" 
                  borderColor="blue.500"
                  mb={4}
                  alignItems="center"
                >
                  <InfoOutlineIcon mr={2} />
                  <Text>
                    Puoi creare facilmente componenti informativi personalizzati.
                  </Text>
                </Flex>
                
                <Box
                  bg="orange.50"
                  color="orange.800"
                  p={4}
                  borderRadius="md"
                  borderLeft="4px"
                  borderColor="orange.500"
                >
                  <Heading size="sm">Nota Importante</Heading>
                  <Text mt={1}>
                    Questa è una nota importante che il lettore dovrebbe vedere.
                  </Text>
                </Box>
              </Box>
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
      
      <Box
        p={4}
        bg={useColorModeValue("purple.50", "purple.900")}
        color={useColorModeValue("purple.800", "purple.100")}
        borderRadius="md"
        borderWidth="1px"
        borderColor={borderColor}
      >
        <Flex alignItems="center">
          <InfoIcon mr={2} />
          <Text fontWeight="medium">
            Chakra UI offre molti componenti avanzati che rendono lo sviluppo di interfacce utente 
            facile e veloce. Questo showcase mostra solo alcuni degli elementi disponibili.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
} 