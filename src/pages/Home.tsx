import {
  Text,
  Heading,
  VStack,
  Box,
  Button,
  Link,
  SlideFade,
  Stack,
  IconButton,
  Container,
} from '@chakra-ui/react';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';
import { BsDownload, BsGithub, BsLinkedin } from 'react-icons/bs';
import { IoMdSend } from 'react-icons/io';

const Home = () => {
  return (
    <>
      <Navbar />
      <SlideFade in offsetY="50px">
        <Container
          as="section"
          id="home"
          maxW="120ch"
          minHeight="80vh"
          mb={8}
          pb={8}
        >
          <Stack
            direction="row"
            alignItems="center"
            mt={{ base: '0', md: '12', lg: '32' }}
          >
            <VStack gap="4">
              <Link
                isExternal
                href="https://www.linkedin.com/in/thomas-bergamin/"
              >
                <IconButton
                  aria-label="Linkedin button"
                  cursor="pointer"
                  as="a"
                  icon={<BsLinkedin />}
                  borderRadius="3xl"
                  colorScheme="blue"
                  textColor="whiteAlpha.900"
                  boxShadow="inset 0 2px 0 hsla(212, 100%, 75%, .9),  0 2px 2px hsla(0, 0%, 0%, 0.5)"
                />
              </Link>
              <Link isExternal href="https://github.com/ThomasBergamin">
                <IconButton
                  aria-label="Github button"
                  cursor="pointer"
                  as="a"
                  icon={<BsGithub />}
                  borderRadius="3xl"
                  textColor="gray.100"
                  colorScheme="teal"
                  boxShadow="inset 0 2px 0 hsla(171, 75%, 60%, .9),  0 2px 2px hsla(0, 0%, 0%, 0.5)"
                >
                  GitHub
                </IconButton>
              </Link>
            </VStack>
            <VStack
              flexGrow={1}
              alignItems="center"
              gap={10}
              textAlign="center"
              mt={[12, 24]}
              pl={{ base: 0, md: 8 }}
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
                    textColor="whiteAlpha.900"
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
                    maxW="490px"
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
            </VStack>
          </Stack>
        </Container>
      </SlideFade>
      <Container as="section" id="about" maxW="70ch" px="6">
        <VStack mb={4} gap={{ base: '6', sm: '8' }}>
          <Heading color="whiteAlpha.900">About Me</Heading>
          <VStack alignItems="left" justifyContent="center">
            <Text textColor="whiteAlpha.900" fontSize="lg">
              Discovering code in 2020, I instantly fell in love with the
              capability of building things with a few lines of text. Since
              then, I have been graduated in web development and I worked in a
              startup for 1 year.
            </Text>
            <Text textColor="whiteAlpha.900" fontSize="lg">
              Today, I am mainly working on web applications with React and
              Typescript.
            </Text>
            <Text textColor="whiteAlpha.900" fontWeight="bold" fontSize="lg">
              I am currently looking for new opportunities. Click on my resume
              to download it !
            </Text>
          </VStack>
          <Link isExternal href="/files/resume_thomas_bergamin.pdf">
            <Button
              size="lg"
              cursor="pointer"
              as="a"
              rightIcon={<BsDownload />}
              borderRadius="3xl"
              textColor="whiteAlpha.900"
              colorScheme="green"
              boxShadow="inset 0 2px 0 hsla(140, 70%, 60%, .9),  0 2px 2px hsla(0, 0%, 0%, 0.5)"
            >
              Download my resume
            </Button>
          </Link>
        </VStack>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
