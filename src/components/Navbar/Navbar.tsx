import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import React from 'react';

const Navbar = () => {
  return (
    <Box as="header">
      <Box h="5px" bg="teal.500" />
      <Container maxW="120ch" py="3" px={4}>
        <Flex>
          <Button
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
          <Spacer />
          <ButtonGroup spacing="2">
            <Button
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
            <Button
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
              About me
            </Button>
          </ButtonGroup>
        </Flex>
        <Divider mt={2} w="100%" mx="auto" />
      </Container>
    </Box>
  );
};

export { Navbar };
