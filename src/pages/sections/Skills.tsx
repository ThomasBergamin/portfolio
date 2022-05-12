import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Stack,
} from '@chakra-ui/react';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

const Skills = () => {
  return (
    <Container as="section" id="skills" maxW="70ch" pt={24} px="6">
      <VStack mb={4} gap={{ base: '6', sm: '8' }}>
        <Heading color="whiteAlpha.900">My skills</Heading>
        <Accordion
          width="100%"
          color="whiteAlpha.900"
          defaultIndex={[0, 1]}
          allowMultiple
        >
          <Stack
            direction={{ base: 'column', md: 'row' }}
            alignItems={{ md: 'baseline' }}
            justifyContent="center"
            gap={8}
          >
            <AccordionItem
              borderWidth="0px"
              minWidth={{ md: '300px ', lg: '400px' }}
            >
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text fontWeight="bold" fontSize="xl">
                      Front End skills
                    </Text>
                  </Box>
                  <AccordionIcon fontSize={'4xl'} color="teal.500" />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Stack gap={4} mt={8}>
                  <ProgressBar text="HTML" value={90} />
                  <ProgressBar text="Javascript" value={90} />
                  <ProgressBar text="React" value={80} />
                  <ProgressBar text="CSS" value={80} />
                  <ProgressBar text="Typescript" value={50} />
                </Stack>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              minWidth={{ md: '300px ', lg: '400px' }}
              borderWidth="0px"
              borderBottomWidth="0px !important"
            >
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text fontWeight="bold" fontSize="xl">
                      Back End skills
                    </Text>
                  </Box>
                  <AccordionIcon fontSize={'4xl'} color="teal.500" />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Stack gap={4} mt={8}>
                  <ProgressBar text="Node.js" value={70} />
                  <ProgressBar text="Express" value={70} />
                  <ProgressBar text="Firebase" value={60} />
                  <ProgressBar text="Mongo.db" value={50} />
                  <ProgressBar text="PostgreSQL" value={50} />
                </Stack>
              </AccordionPanel>
            </AccordionItem>
          </Stack>
        </Accordion>
      </VStack>
    </Container>
  );
};

export default Skills;
