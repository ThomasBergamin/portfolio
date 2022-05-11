import {
  Container,
  VStack,
  Heading,
  Button,
  Link,
  Text,
} from '@chakra-ui/react';
import { BsDownload } from 'react-icons/bs';

const AboutMe = () => {
  return (
    <Container as="section" id="about" maxW="70ch" px="6">
      <VStack mb={4} gap={{ base: '6', sm: '8' }}>
        <Heading color="whiteAlpha.900">About Me</Heading>
        <VStack alignItems="left" justifyContent="center">
          <Text textColor="whiteAlpha.900" fontSize="lg">
            Discovering code in 2020, I instantly fell in love with the
            capability of building things with a few lines of text. Since then,
            I have been graduated in web development and I worked in a startup
            for 1 year.
          </Text>
          <Text textColor="whiteAlpha.900" fontSize="lg">
            Today, I am mainly working on web applications with React and
            Typescript.
          </Text>
          <Text textColor="whiteAlpha.900" fontWeight="bold" fontSize="lg">
            I am currently looking for new opportunities. Click on my resume to
            download it !
          </Text>
        </VStack>
        <Link isExternal href="/files/resume_thomas_bergamin.pdf">
          <Button
            size="lg"
            cursor="pointer"
            as="a"
            rightIcon={<BsDownload />}
            borderRadius="3xl"
            textColor="whiteAlpha.900"
            colorScheme="green"
            boxShadow="inset 0 2px 0 hsla(140, 70%, 60%, .9),  0 2px 2px hsla(0, 0%, 0%, 0.5)"
          >
            Download my resume
          </Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default AboutMe;
