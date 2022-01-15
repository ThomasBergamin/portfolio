import { Text, Heading, VStack, Box } from '@chakra-ui/react';
import React from 'react';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';

const App = () => {
  return (
    <>
      <Navbar />

      <Box as="section" minHeight="71vh">
        <VStack
          alignItems="center"
          gap={10}
          textAlign="center"
          mt={[24, 48]}
          mx={4}
        >
          <Heading as="h1" textColor="gray.100" size="3xl">
            Hi ! I&#39;m Thomas
          </Heading>
          <Text as="h2" textColor="gray.500" fontSize="2xl" px={10}>
            A web{' '}
            <Text display="inline" color="teal.300">
              Developer
            </Text>{' '}
            specialized in{' '}
            <Text display="inline" color="teal.300">
              React
            </Text>
          </Text>
        </VStack>
      </Box>
      <Footer />
    </>
  );
};

export default App;
