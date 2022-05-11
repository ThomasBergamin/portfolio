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
      <Container maxW="120ch" py="3">
        <Flex>
          <Link as={RouterLink} to="/">
            <Button
              borderRadius="md"
              as="a"
              _hover={{
                cursor: 'pointer',
                background: 'white',
                color: 'teal.500',
              }}
              textColor="gray.100"
              variant="ghost"
              backgroundColor={'gray.800'}
              boxShadow={
                '0 1px 0 hsla(0, 0%, 100%, .1), inset 0 1px 1px hsla(0, 0%, 0%, 0.5)'
              }
            >
              Home
            </Button>
          </Link>
          <Spacer />
          <ButtonGroup spacing="2">
            <Link as={RouterLink} to="/projects">
              <Button
                borderRadius="md"
                as="a"
                _hover={{
                  cursor: 'pointer',
                  background: 'white',
                  color: 'teal.500',
                }}
                textColor="gray.100"
                variant="ghost"
                backgroundColor={'gray.800'}
                boxShadow={
                  '0 1px 0 hsla(0, 0%, 100%, .1), inset 0 1px 1px hsla(0, 0%, 0%, 0.5)'
                }
              >
                My projects
              </Button>
            </Link>
            <Link as={RouterLink} to="/about">
              <Button
                borderRadius="md"
                as="a"
                _hover={{
                  cursor: 'pointer',
                  background: 'white',
                  color: 'teal.500',
                }}
                textColor="gray.100"
                variant="ghost"
                backgroundColor={'gray.800'}
                boxShadow={
                  '0 1px 0 hsla(0, 0%, 100%, .1), inset 0 1px 1px hsla(0, 0%, 0%, 0.5)'
                }
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
