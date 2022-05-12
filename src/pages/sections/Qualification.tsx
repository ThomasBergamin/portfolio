import { CalendarIcon } from '@chakra-ui/icons';
import {
  Container,
  Box,
  Text,
  HStack,
  Center,
  Heading,
} from '@chakra-ui/react';

const Qualification = () => {
  return (
    <Container as="section" id="qualification" maxW="70ch" pt={24} px="6">
      <Center mb={12}>
        <Heading color="whiteAlpha.900">My journey</Heading>
      </Center>

      <Box
        id="timeline"
        position="relative"
        maxW="1200px"
        margin="0 auto"
        _after={{
          content: `''`,
          position: 'absolute',
          width: '4px',
          backgroundColor: 'white',
          top: 0,
          bottom: 0,
          left: '50%',
        }}
      >
        <Container
          padding="10px 30px"
          position="relative"
          w="50%"
          left="171px"
          _after={{
            content: `''`,
            position: 'absolute',
            width: '25px',
            height: '25px',
            right: '-17px',
            left: '-16px',
            backgroundColor: 'teal.500',
            top: '15px',
            border: '4px solid white',
            borderRadius: '50%',
            zIndex: 1,
          }}
        >
          <Box
            id="content"
            padding="20px 30px"
            backgroundColor="white"
            position="relative"
            borderRadius="6px"
          >
            <Text fontWeight="semibold" as="h2">
              Apprentice Web developer
            </Text>
            <Text as="h3">Rennes - Placemeet</Text>
            <HStack mt={2}>
              <CalendarIcon color="gray.600" />

              <Text color="gray.600">04/2021 - 04/2022</Text>
            </HStack>
          </Box>
        </Container>
        <Container
          padding="10px 30px"
          position="relative"
          w="50%"
          right="167px"
          _after={{
            content: `''`,
            position: 'absolute',
            width: '25px',
            height: '25px',
            right: '-17px',
            backgroundColor: 'teal.500',
            top: '15px',
            border: '4px solid white',
            borderRadius: '50%',
            zIndex: 1,
          }}
        >
          <Box
            id="content"
            padding="20px 30px"
            backgroundColor="white"
            position="relative"
            borderRadius="6px"
          >
            <Text as="h2" fontWeight="semibold">
              Web developer diploma
            </Text>
            <Text as="h3">Rennes - OpenClassrooms</Text>

            <HStack mt={2}>
              <CalendarIcon color="gray.600" />

              <Text color="gray.600">04/2021 - 04/2022</Text>
            </HStack>
          </Box>
        </Container>
        <Container
          padding="10px 30px"
          position="relative"
          w="50%"
          left="171px"
          _after={{
            content: `''`,
            position: 'absolute',
            width: '25px',
            height: '25px',
            right: '-17px',
            left: '-16px',
            backgroundColor: 'teal.500',
            top: '15px',
            border: '4px solid white',
            borderRadius: '50%',
            zIndex: 1,
          }}
        >
          <Box
            id="content"
            padding="20px 30px"
            backgroundColor="white"
            position="relative"
            borderRadius="6px"
          >
            <Text fontWeight="semibold" as="h2">
              Volunteer Workaway
            </Text>
            <Text as="h3">Italy</Text>
            <HStack mt={2}>
              <CalendarIcon color="gray.600" />

              <Text color="gray.600">07/2020 - 12/2020</Text>
            </HStack>
          </Box>
        </Container>
        <Container
          padding="10px 30px"
          position="relative"
          w="50%"
          right="167px"
          _after={{
            content: `''`,
            position: 'absolute',
            width: '25px',
            height: '25px',
            right: '-17px',
            backgroundColor: 'teal.500',
            top: '15px',
            border: '4px solid white',
            borderRadius: '50%',
            zIndex: 1,
          }}
        >
          <Box
            id="content"
            padding="20px 30px"
            backgroundColor="white"
            position="relative"
            borderRadius="6px"
          >
            <Text as="h2" fontWeight="semibold">
              Communication Bachelor
            </Text>
            <Text as="h3">Finland - University of Vaasa</Text>

            <HStack mt={2}>
              <CalendarIcon color="gray.600" />

              <Text color="gray.600">09/2019 - 06/2020</Text>
            </HStack>
          </Box>
        </Container>{' '}
        <Container
          padding="10px 30px"
          position="relative"
          w="50%"
          left="171px"
          _after={{
            content: `''`,
            position: 'absolute',
            width: '25px',
            height: '25px',
            right: '-17px',
            left: '-16px',
            backgroundColor: 'teal.500',
            top: '15px',
            border: '4px solid white',
            borderRadius: '50%',
            zIndex: 1,
          }}
        >
          <Box
            id="content"
            padding="20px 30px"
            backgroundColor="white"
            position="relative"
            borderRadius="6px"
          >
            <Text fontWeight="semibold" as="h2">
              Communication degree
            </Text>
            <Text as="h3">France - IUT Nancy</Text>
            <HStack mt={2}>
              <CalendarIcon color="gray.600" />

              <Text color="gray.600">09/2017 - 06/2019</Text>
            </HStack>
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export default Qualification;
