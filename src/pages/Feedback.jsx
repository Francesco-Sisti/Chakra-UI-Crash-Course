import { 
  Alert, 
  AlertDescription, 
  AlertIcon, 
  AlertTitle, 
  Box, 
  Button, 
  CircularProgress, 
  CircularProgressLabel, 
  CloseButton, 
  Flex, 
  Heading, 
  Progress, 
  SimpleGrid, 
  Skeleton, 
  SkeletonCircle, 
  SkeletonText, 
  Spinner, 
  Stack, 
  Text, 
  useColorModeValue, 
  useToast 
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Feedback() {
  const cardBg = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const accentColor = useColorModeValue("purple.500", "purple.300");
  
  // Per Demo Progress
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();
  
  // Simuliamo un caricamento per il progress
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 5;
      });
    }, 500);
    
    // Per la Demo Skeleton
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    
    return () => {
      clearInterval(timer);
      clearTimeout(loadingTimer);
    };
  }, []);
  
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
        Componenti di Feedback in Chakra UI
      </Heading>
      
      {/* Sezione Alert */}
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg} mb={8}>
        <Heading size="md" mb={4} color={accentColor}>
          Alert
        </Heading>
        <Text mb={4}>
          Gli Alert sono usati per comunicare lo stato di un sistema, un'azione o un feedback informativo.
        </Text>
        
        <Stack spacing={4}>
          <Alert status="info">
            <AlertIcon />
            Chakra UI fornisce componenti accessibili e facili da usare.
          </Alert>
          
          <Alert status="success">
            <AlertIcon />
            Il tuo profilo è stato aggiornato con successo!
          </Alert>
          
          <Alert status="warning">
            <AlertIcon />
            Attenzione: questa azione non può essere annullata.
          </Alert>
          
          <Alert status="error">
            <AlertIcon />
            Si è verificato un errore durante il salvataggio.
          </Alert>
          
          <Alert status="info" variant="subtle">
            <AlertIcon />
            <Box flex="1">
              <AlertTitle>Informazione</AlertTitle>
              <AlertDescription>
                Questo è un alert con titolo e descrizione.
                Può contenere informazioni più dettagliate.
              </AlertDescription>
            </Box>
            <CloseButton position="absolute" right="8px" top="8px" />
          </Alert>
        </Stack>
        
        <Comment>
          • Gli Alert hanno 4 stati principali: info, success, warning, error
          • Possono avere varianti: subtle, solid, left-accent, top-accent
          • Supportano titolo, descrizione e pulsanti di chiusura
          • Ogni stato ha un colore e un'icona appropriati
        </Comment>
      </Box>
      
      {/* Sezione Progress e Spinner */}
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg} mb={8}>
        <Heading size="md" mb={4} color={accentColor}>
          Progress e Spinner
        </Heading>
        <Text mb={4}>
          I componenti di progresso mostrano visivamente lo stato di un'operazione in corso.
        </Text>
        
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box>
            <Text fontWeight="bold" mb={2}>Progress Bar</Text>
            <Stack spacing={5}>
              <Progress hasStripe value={progress} />
              <Progress hasStripe colorScheme="green" value={progress} />
              <Progress hasStripe isAnimated colorScheme="purple" value={progress} />
              <Progress hasStripe isIndeterminate colorScheme="blue" />
            </Stack>
            
            <Comment>
              • Le barre di progresso mostrano l'avanzamento con un valore percentuale
              • Supportano diverse varianti: strisce, animazioni, indeterminato
              • Possono avere diversi schemi di colore
            </Comment>
          </Box>
          
          <Box>
            <Text fontWeight="bold" mb={2}>Spinner e Circular Progress</Text>
            <Flex gap={6} mb={4} wrap="wrap">
              <Spinner color="blue.500" />
              <Spinner color="red.500" size="xl" />
              <Spinner color="green.500" thickness="4px" speed="0.65s" />
              <Spinner color="purple.500" emptyColor="gray.200" size="lg" />
            </Flex>
            
            <Flex gap={6} wrap="wrap">
              <CircularProgress value={progress} color="green.400">
                <CircularProgressLabel>{progress}%</CircularProgressLabel>
              </CircularProgress>
              
              <CircularProgress value={progress} color="blue.400" thickness="12px" />
              
              <CircularProgress value={progress} color="orange.400" size="120px">
                <CircularProgressLabel>{progress}%</CircularProgressLabel>
              </CircularProgress>
            </Flex>
            
            <Comment>
              • Gli Spinner mostrano un caricamento indeterminato
              • CircularProgress visualizza un progresso circolare con un valore percentuale
              • Entrambi sono personalizzabili in dimensione, colore e velocità
            </Comment>
          </Box>
        </SimpleGrid>
      </Box>
      
      {/* Sezione Skeleton */}
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg} mb={8}>
        <Heading size="md" mb={4} color={accentColor}>
          Skeleton
        </Heading>
        <Text mb={4}>
          Gli Skeleton sono usati per mostrare uno "scheletro" di caricamento mentre il contenuto viene caricato.
        </Text>
        
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
          <Text fontWeight="bold" mb={2}>Demo di caricamento:</Text>
          {isLoading ? (
            <Stack>
              <Skeleton height="40px" mb={2} />
              <Flex gap={4}>
                <SkeletonCircle size="12" />
                <SkeletonText mt="2" noOfLines={2} spacing="2" flex="1" />
              </Flex>
              <Skeleton height="20px" mt={4} />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
            </Stack>
          ) : (
            <Stack>
              <Heading size="md">Contenuto Caricato</Heading>
              <Flex gap={4}>
                <Box borderRadius="full" bg="blue.500" size="12" width="48px" height="48px" />
                <Box flex="1">
                  <Text fontWeight="bold">Mario Rossi</Text>
                  <Text fontSize="sm">Product Manager</Text>
                </Box>
              </Flex>
              <Text mt={4}>
                Questo è il contenuto che viene mostrato dopo il caricamento. Gli skeleton
                aiutano a migliorare l'esperienza utente mostrando un'anteprima della struttura
                della pagina.
              </Text>
            </Stack>
          )}
        </Box>
        
        <Button 
          mt={4} 
          onClick={() => setIsLoading(!isLoading)} 
          colorScheme="purple"
        >
          {isLoading ? "Mostra Contenuto" : "Mostra Skeleton"}
        </Button>
        
        <Comment>
          • Gli Skeleton riducono la percezione di attesa durante il caricamento
          • Imitano la forma del contenuto finale
          • Ci sono diverse varianti: Skeleton, SkeletonCircle, SkeletonText
          • Possono essere combinati per creare layout complessi durante il caricamento
        </Comment>
      </Box>
      
      {/* Sezione Toast */}
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg}>
        <Heading size="md" mb={4} color={accentColor}>
          Toast
        </Heading>
        <Text mb={4}>
          I Toast sono notifiche temporanee che compaiono in sovrapposizione al contenuto.
        </Text>
        
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={4}>
          <Button 
            onClick={() => 
              toast({
                title: "Account creato.",
                description: "Abbiamo creato il tuo account con successo.",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom-right"
              })
            }
            colorScheme="green"
          >
            Toast Successo
          </Button>
          
          <Button 
            onClick={() => 
              toast({
                title: "Errore!",
                description: "Non è stato possibile creare il tuo account.",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top"
              })
            }
            colorScheme="red"
          >
            Toast Errore
          </Button>
          
          <Button 
            onClick={() => 
              toast({
                title: "Avviso",
                description: "Questa è un'azione che richiede attenzione.",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "top-left"
              })
            }
            colorScheme="yellow"
          >
            Toast Avviso
          </Button>
          
          <Button 
            onClick={() => 
              toast({
                title: "Informazione",
                description: "Nuove funzionalità disponibili.",
                status: "info",
                duration: 5000,
                isClosable: true,
                position: "bottom"
              })
            }
            colorScheme="blue"
          >
            Toast Info
          </Button>
        </SimpleGrid>
        
        <Comment>
          • I Toast sono perfetti per feedback rapidi che non bloccano l'UI
          • Possono apparire in diverse posizioni dello schermo
          • Supportano vari stati: success, error, warning, info
          • È possibile personalizzare durata, comportamento di chiusura e altro ancora
          • A differenza degli Alert, i Toast scompaiono automaticamente dopo un certo tempo
        </Comment>
      </Box>
    </Box>
  );
} 