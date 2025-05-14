import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  PinInput,
  PinInputField,
  Radio,
  RadioGroup,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  SimpleGrid,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Switch,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function Forms() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [value, setValue] = useState("1");
  const [sliderValue, setSliderValue] = useState(50);
  const [rangeValues, setRangeValues] = useState([30, 70]);
  const toast = useToast();

  const cardBg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.800", "gray.100");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Form inviato",
      description: "Grazie per aver compilato il form!",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top"
    });
  };

  return (
    <Box>
      <Heading as="h1" mb={8} size="xl">
        Componenti Form di Chakra UI
      </Heading>

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg}>
          <Heading mb={4} size="md">Input Base</Heading>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="flex-start">
              <FormControl isRequired>
                <FormLabel>Nome</FormLabel>
                <Input placeholder="Inserisci il tuo nome" />
                <FormHelperText>Il tuo nome completo.</FormHelperText>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="email@esempio.com" />
              </FormControl>

              <FormControl>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <FormControl>
                <FormLabel>Numero di telefono</FormLabel>
                <InputGroup>
                  <InputLeftAddon>+39</InputLeftAddon>
                  <Input type="tel" placeholder="Telefono" />
                </InputGroup>
              </FormControl>

              <Button mt={4} colorScheme="purple" type="submit">
                Invia
              </Button>
            </VStack>
          </form>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg}>
          <Heading mb={4} size="md">Input Avanzati</Heading>
          <VStack spacing={6} align="flex-start">
            <FormControl>
              <FormLabel>Note</FormLabel>
              <Textarea placeholder="Inserisci le tue note qui..." />
            </FormControl>

            <FormControl>
              <FormLabel>Seleziona un'opzione</FormLabel>
              <Select placeholder="Scegli un'opzione">
                <option value="option1">Opzione 1</option>
                <option value="option2">Opzione 2</option>
                <option value="option3">Opzione 3</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Seleziona con radio buttons</FormLabel>
              <RadioGroup onChange={setValue} value={value}>
                <Stack direction="row">
                  <Radio value="1">Primo</Radio>
                  <Radio value="2">Secondo</Radio>
                  <Radio value="3">Terzo</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            <FormControl>
              <FormLabel>Checkbox</FormLabel>
              <Stack spacing={2}>
                <Checkbox>Opzione A</Checkbox>
                <Checkbox>Opzione B</Checkbox>
                <Checkbox>Opzione C</Checkbox>
              </Stack>
            </FormControl>
          </VStack>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg}>
          <Heading mb={4} size="md">Slider e Input Numerici</Heading>
          <VStack spacing={6} align="flex-start">
            <FormControl>
              <FormLabel>Slider Semplice: {sliderValue}</FormLabel>
              <Slider
                aria-label="slider-example"
                defaultValue={50}
                onChange={(val) => setSliderValue(val)}
                colorScheme="purple"
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </FormControl>

            <FormControl>
              <FormLabel>Range Slider: {rangeValues[0]} - {rangeValues[1]}</FormLabel>
              <RangeSlider
                aria-label={["min", "max"]}
                defaultValue={[30, 70]}
                onChange={(val) => setRangeValues(val)}
                colorScheme="purple"
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
            </FormControl>

            <FormControl>
              <FormLabel>Input Numerico</FormLabel>
              <NumberInput max={100} min={1} defaultValue={15} clampValueOnBlur={false}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </VStack>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg}>
          <Heading mb={4} size="md">Input Speciali</Heading>
          <VStack spacing={6} align="flex-start">
            <FormControl>
              <FormLabel>PIN Input</FormLabel>
              <HStack>
                <PinInput>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </FormControl>

            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="email-alerts" mb="0">
                Attiva notifiche
              </FormLabel>
              <Switch id="email-alerts" colorScheme="purple" />
            </FormControl>
            
            <Divider />
            
            <Text color={textColor}>
              Chakra UI offre molti componenti per form facili da personalizzare.
              Con poche righe di codice, puoi creare form interattivi e accessibili.
            </Text>
          </VStack>
        </Box>
      </SimpleGrid>
    </Box>
  );
} 