import { Box, Container, Divider, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Box as="footer" mt="auto">
      <Container maxW="120ch" py="3" px={4}>
        <Divider mb={2} w="100%" mx="auto" />
        <Flex>
          <Text fontSize="sm" textColor="gray.100">
            Copyright © 2022 - Thomas Bergamin
          </Text>
        </Flex>
      </Container>
      <Box h="5px" bg="teal.500" />
    </Box>
  );
};

export { Footer };
