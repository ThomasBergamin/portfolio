import {
  Container,
  Stack,
  VStack,
  IconButton,
  Heading,
  Button,
  Link,
  Text,
  Box,
} from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons';
import { BsLinkedin, BsGithub, BsMouse } from 'react-icons/bs';
import { IoMdSend } from 'react-icons/io';

const Main = () => {
  return (
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
          <Link isExternal href="https://www.linkedin.com/in/thomas-bergamin/">
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
                {' / '}
                <Text display="inline" color="teal.300">
                  Typescript{' '}
                </Text>
                and{' '}
                <Text display="inline" color="teal.300">
                  Node.js
                </Text>
                {' / '}
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
      <Box mt="28">
        <Button
          display={{ base: 'none', md: 'block' }}
          as="a"
          onClick={() => {
            const about = document.getElementById('about');
            about &&
              about.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          variant="ghost"
          color="whiteAlpha.900"
          leftIcon={<BsMouse />}
          rightIcon={<ArrowDownIcon />}
          _hover={{
            cursor: 'pointer',
            color: 'teal.500',
            transform: 'translateY(0.25rem)',
          }}
          _active={{ backgroundColor: 'gray.900' }}
        >
          Scroll Down
        </Button>
      </Box>
    </Container>
  );
};

export default Main;
