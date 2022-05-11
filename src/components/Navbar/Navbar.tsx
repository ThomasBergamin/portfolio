import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Flex,
  Spacer,
} from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      backgroundColor="gray.700"
      zIndex="1"
    >
      <Box h="5px" bg="teal.500" />
      <Container maxW="120ch" pt="3">
        <Flex>
          <Button
            borderRadius="3xl"
            as="a"
            onClick={() => {
              window.scroll({ top: 0, left: 0, behavior: 'smooth' });
            }}
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

          <Spacer />
          <ButtonGroup spacing="2">
            <Button
              borderRadius="3xl"
              as="a"
              onClick={() => {
                const about = document.getElementById('about');
                about &&
                  about.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
              }}
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
            <Button
              borderRadius="3xl"
              as="a"
              onClick={() => {
                const skills = document.getElementById('skills');
                skills &&
                  skills.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
              }}
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
              My Skills
            </Button>
          </ButtonGroup>
        </Flex>
        <Divider mt={2} w="100%" mx="auto" />
      </Container>
    </Box>
  );
};

export { Navbar };
