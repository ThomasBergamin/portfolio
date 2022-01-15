import { Avatar, Box, Container, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';

const About = () => {
  return (
    <>
      <Navbar />

      <Box as="section" minHeight="70vh">
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
            <Text as="p" textColor="gray.200" fontSize="l">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              consequatur in aliquid voluptatum veritatis enim obcaecati ipsam
              nihil fugiat repudiandae vitae similique iste nulla quis rerum,
              maiores velit quaerat eius!
            </Text>
            <Text as="p" textColor="gray.200" fontSize="l">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              consequatur in aliquid voluptatum veritatis enim obcaecati ipsam
              nihil fugiat repudiandae vitae similique iste nulla quis rerum,
              maiores velit quaerat eius!
            </Text>
            <Text as="p" textColor="gray.200" fontSize="l">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              consequatur in aliquid voluptatum veritatis enim obcaecati ipsam
              nihil fugiat repudiandae vitae similique iste nulla quis rerum,
              maiores velit quaerat eius!
            </Text>
          </VStack>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default About;
