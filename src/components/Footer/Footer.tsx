import {
  Box,
  Container,
  Divider,
  Flex,
  Link,
  Spacer,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Box as="footer" mt="auto">
      <Container maxW="120ch" py="3" px={4}>
        <Divider mb={3} w="100%" mx="auto" />
        <Flex mb={1}>
          <Text fontSize="sm" textColor="gray.100">
            Copyright © 2022 Thomas Bergamin
          </Text>
          <Spacer />
          <Link
            fontSize="sm"
            isExternal
            textColor="gray.100"
            href="https://github.com/ThomasBergamin/portfolio"
          >
            Source Code
          </Link>
        </Flex>
      </Container>
      <Box h="5px" bg="teal.500" />
    </Box>
  );
};

export { Footer };
