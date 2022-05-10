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
import { BsDownload, BsGithub, BsLinkedin } from 'react-icons/bs';

const Home = () => {
  return (
    <>
      <Navbar />

      <SlideFade in offsetY="50px">
        <Box as="section" minHeight="70vh">
          <VStack
            alignItems="center"
            gap={10}
            textAlign="center"
            mt={[24, 48]}
            mx={4}
          >
            <Heading as="h1" textColor="gray.100" size="3xl">
              Hi ! I&#39;m Thomas.
            </Heading>

            <Text as="h2" textColor="gray.200" fontSize="2xl" pb={8} px={10}>
              A full stack web{' '}
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
                  borderRadius="md"
                  colorScheme="blue"
                  textColor="gray.100"
                  boxShadow="inset 0 2px 0 hsla(212, 100%, 62%, .9),  0 2px 2px hsla(0, 0%, 0%, 0.5)"
                >
                  LinkedIn
                </Button>
              </Link>
              <Link isExternal href="https://github.com/ThomasBergamin">
                <Button
                  cursor="pointer"
                  as="a"
                  leftIcon={<BsGithub />}
                  borderRadius="md"
                  textColor="gray.100"
                  colorScheme="teal"
                  boxShadow="inset 0 2px 0 hsla(171, 75%, 40%, .9),  0 2px 2px hsla(0, 0%, 0%, 0.5)"
                >
                  GitHub
                </Button>
              </Link>
            </ButtonGroup>
            <Link isExternal href="/files/resume_thomas_bergamin.pdf">
              <Button
                cursor="pointer"
                as="a"
                leftIcon={<BsDownload />}
                borderRadius="md"
                textColor="gray.100"
                colorScheme="green"
                boxShadow="inset 0 2px 0 hsla(140, 70%, 42%, .9),  0 2px 2px hsla(0, 0%, 0%, 0.5)"
              >
                Download my resume
              </Button>
            </Link>
          </VStack>
        </Box>
      </SlideFade>
      <Footer />
    </>
  );
};

export default Home;
