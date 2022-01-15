import {
  Text,
  Heading,
  VStack,
  Box,
  Button,
  ButtonGroup,
  Link,
  SlideFade,
} from '@chakra-ui/react';
import React from 'react';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Home = () => {
  return (
    <>
      <Navbar />

      <SlideFade in offsetY="40px">
        <Box as="section" minHeight="70vh">
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
            <ButtonGroup spacing="6">
              <Link
                isExternal
                href="https://www.linkedin.com/in/thomas-bergamin/"
              >
                <Button
                  cursor="pointer"
                  as="a"
                  leftIcon={<BsLinkedin />}
                  borderRadius="1"
                  colorScheme="blue"
                  textColor="gray.100"
                >
                  LinkedIn
                </Button>
              </Link>
              <Link isExternal href="https://github.com/ThomasBergamin">
                <Button
                  cursor="pointer"
                  as="a"
                  leftIcon={<BsGithub />}
                  borderRadius="1"
                  textColor="gray.100"
                  colorScheme="teal"
                >
                  GitHub
                </Button>
              </Link>
            </ButtonGroup>
          </VStack>
        </Box>
      </SlideFade>
      <Footer />
    </>
  );
};

export default Home;
