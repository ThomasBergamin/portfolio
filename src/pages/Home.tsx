import {
  Text,
  Heading,
  VStack,
  Box,
  Button,
  ButtonGroup,
  Link,
  SlideFade,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';
import { BsDownload, BsGithub, BsLinkedin } from 'react-icons/bs';
import { IoMdSend } from 'react-icons/io';

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
            mt={[12, 24]}
            px={8}
          >
            <Stack
              direction={{ base: 'column-reverse', md: 'row' }}
              alignItems="center"
              gap="12"
            >
              <Stack direction="column" maxWidth="600px" alignItems="center">
                <Heading as="h1" textColor="whiteAlpha.900" size="3xl">
                  Hi ! I&#39;m Thomas.
                </Heading>

                <Text
                  as="h2"
                  textColor="gray.200"
                  fontSize="2xl"
                  pb={8}
                  px={10}
                >
                  Full stack web{' '}
                  <Text display="inline" color="teal.300">
                    Developer
                  </Text>{' '}
                </Text>
                <Text
                  as="p"
                  textColor="whiteAlpha.900"
                  fontSize="xl"
                  pb={8}
                  px={10}
                >
                  I am specialized in{' '}
                  <Text display="inline" color="teal.300">
                    React
                  </Text>
                  {' & '}
                  <Text display="inline" color="teal.300">
                    Typescript{' '}
                  </Text>
                  and{' '}
                  <Text display="inline" color="teal.300">
                    Node.js
                  </Text>
                  {' & '}
                  <Text display="inline" color="teal.300">
                    Express
                  </Text>
                  .
                </Text>
                <Button
                  width="fit-content"
                  as="a"
                  href="mailto:bergamin.tom@gmail.com"
                  cursor="pointer"
                  size="lg"
                  rightIcon={<IoMdSend />}
                  borderRadius="3xl"
                  colorScheme="teal"
                  textColor="whiteAlpha.900"
                  boxShadow="inset 0 2px 0 hsla(171, 75%, 70%, .9),  0 3px 3px hsla(0, 0%, 0%, 0.5)"
                >
                  Contact me
                </Button>
              </Stack>

              <img src="../../img/Group-2.svg" alt="SVG as an image" />
            </Stack>
            <ButtonGroup spacing="6">
              <Link
                isExternal
                href="https://www.linkedin.com/in/thomas-bergamin/"
              >
                <Button
                  cursor="pointer"
                  as="a"
                  rightIcon={<BsLinkedin />}
                  borderRadius="md"
                  colorScheme="blue"
                  textColor="whiteAlpha.900"
                  boxShadow="inset 0 2px 0 hsla(212, 100%, 62%, .9),  0 2px 2px hsla(0, 0%, 0%, 0.5)"
                >
                  LinkedIn
                </Button>
              </Link>
              <Link isExternal href="https://github.com/ThomasBergamin">
                <Button
                  cursor="pointer"
                  as="a"
                  rightIcon={<BsGithub />}
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
                rightIcon={<BsDownload />}
                borderRadius="md"
                textColor="whiteAlpha.900"
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
