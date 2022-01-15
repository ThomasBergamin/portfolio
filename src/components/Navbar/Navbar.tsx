import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Flex,
  Spacer,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box as="header">
      <Box h="5px" bg="teal.500" />
      <Container maxW="120ch" py="3" px={4}>
        <Flex>
          <Link as={RouterLink} to="/">
            <Button
              borderRadius="1"
              as="a"
              _hover={{
                cursor: 'pointer',
                background: 'white',
                color: 'teal.500',
              }}
              textColor="gray.100"
              variant="ghost"
              colorScheme="blue"
            >
              Home
            </Button>
          </Link>
          <Spacer />
          <ButtonGroup spacing="2">
            <Link as={RouterLink} to="/projects">
              <Button
                borderRadius="1"
                as="a"
                _hover={{
                  cursor: 'pointer',
                  background: 'white',
                  color: 'teal.500',
                }}
                textColor="gray.100"
                variant="ghost"
                colorScheme="blue"
              >
                My projects
              </Button>
            </Link>
            <Link as={RouterLink} to="/about">
              <Button
                borderRadius="1"
                as="a"
                _hover={{
                  cursor: 'pointer',
                  background: 'white',
                  color: 'teal.500',
                }}
                textColor="gray.100"
                variant="ghost"
                colorScheme="grey"
              >
                About me
              </Button>
            </Link>
          </ButtonGroup>
        </Flex>
        <Divider mt={2} w="100%" mx="auto" />
      </Container>
    </Box>
  );
};

export { Navbar };
