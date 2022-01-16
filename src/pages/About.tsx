import {
  Avatar,
  Box,
  Container,
  HStack,
  Text,
  VStack,
  SlideFade,
  Image,
  Wrap,
} from '@chakra-ui/react';
import React from 'react';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';

const About = () => {
  return (
    <>
      <Navbar />

      <SlideFade in offsetY="30px">
        <Box as="section" p={4}>
          <Container centerContent maxW="80ch">
            <HStack textAlign="center" spacing={8}>
              <Avatar
                size="2xl"
                src="/img/thomas.jpg"
                borderWidth={2}
                borderColor="teal.500"
              />
              <VStack>
                <Text
                  as="h2"
                  fontWeight="bold"
                  textColor="gray.100"
                  fontSize="3xl"
                >
                  Thomas Bergamin
                </Text>
                <Text as="h3" textColor="gray.200" fontSize="xl">
                  Full Stack Web Developer
                </Text>
              </VStack>
            </HStack>
            <VStack spacing={5} mt={10}>
              <Text as="p" textColor="gray.200" fontWeight="bold" fontSize="l">
                Discovering code in late 2020, I instantly fell in love with the
                capability of building things with a few lines of text. I liked
                it so much that I decided to drop my former diploma in
                communication / marketing and become a developer. In April 2020,
                I had the opportunity to join a startup as an apprentice.
              </Text>
              <Text as="p" textColor="gray.200" fontSize="l">
                There, I have been working on a Progressive Web App (PWA) made
                with React + TypeScript and hosted on Firebase. My tasks were
                various, and I have been both working on front and back end
                issues.
              </Text>
              <Text as="p" textColor="gray.200" fontSize="l">
                In the meanwhile, I was studying with OpenClassrooms to get
                their Web Developer diploma. You can discover the projects I
                made during my studies in the section My Projects
              </Text>
              <Text as="p" textColor="gray.200" fontSize="l">
                I am currently looking for opportunities abroad as a junior
                Developer. You can find my resume on the front page and my
                contact details on the contact page.
              </Text>

              <Text
                as="h2"
                fontWeight="bold"
                textColor="gray.100"
                fontSize="3xl"
                py={6}
              >
                My current stack
              </Text>
              <Wrap
                spacing={{ base: 10, sm: 12 }}
                pb={6}
                maxW="60ch"
                justify="center"
              >
                <Image
                  borderRadius="full"
                  boxSize="100px"
                  src="https://fr.reactjs.org/logo-og.png"
                  fit="cover"
                  alt="React Logo"
                />
                <Image
                  borderRadius="full"
                  boxSize="100px"
                  src="https://cdn.worldvectorlogo.com/logos/typescript-2.svg"
                  fit="cover"
                  alt="Typescript logo"
                />
                <Image
                  borderRadius="full"
                  boxSize="100px"
                  src="https://ih1.redbubble.net/image.489553250.2202/pp,840x830-pad,1000x1000,f8f8f8.u1.jpg"
                  fit="cover"
                  alt="Firebase logo"
                />
                <Image
                  borderRadius="full"
                  boxSize="100px"
                  src="https://chakra-ui.com/og-image.png"
                  fit="cover"
                  alt="Chakra UI Logo"
                />
                <Image
                  borderRadius="full"
                  boxSize="100px"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNeGDBXAWQ6sQtJ2fwrwL4FABSJBv9bZb6txFu9BhlCiPAPFNbv8prxBgioD0LNZKdW0o&usqp=CAU"
                  fit="cover"
                  alt="Node Js Logo"
                />
                <Image
                  borderRadius="full"
                  boxSize="100px"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
                  fit="cover"
                  alt="Python logo"
                />
              </Wrap>
            </VStack>
          </Container>
        </Box>
      </SlideFade>
      <Footer />
    </>
  );
};

export default About;
