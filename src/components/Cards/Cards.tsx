import {
  Flex,
  Box,
  Image,
  chakra,
  Button,
  ButtonGroup,
  Link,
} from '@chakra-ui/react';
import { FiExternalLink } from 'react-icons/fi';

interface ICard {
  title: string;
  subtitle: string;
  src: string;
  url: string;
  repoUrl?: string;
}

const Card = ({ title, subtitle, src, url, repoUrl }: ICard) => {
  return (
    <Flex w="full" alignItems="center" justifyContent="center">
      <Box maxW="xs" mx="auto" bg="gray.100" borderRadius={3}>
        <Box px={4} py={2}>
          <chakra.h1
            color="gray.800"
            fontWeight="bold"
            fontSize="3xl"
            textTransform="uppercase"
          >
            {title}
          </chakra.h1>
          <chakra.p mt={1} fontSize="sm" color="gray.600">
            {subtitle}
          </chakra.p>
        </Box>

        <Image
          h={48}
          w="full"
          fit="cover"
          mt={2}
          src={src}
          alt="project image"
        />
        <ButtonGroup
          spacing="3"
          alignItems="center"
          px={4}
          py={3}
          bg="gray.900"
          roundedBottom="1"
          w="100%"
        >
          <Link isExternal href={url}>
            <Button
              leftIcon={<FiExternalLink />}
              py={0}
              fontSize="sm"
              cursor="pointer"
              as="a"
              borderRadius="md"
              colorScheme="teal"
              textColor="gray.100"
              boxShadow="inset 0 2px 0 hsla(171, 55%, 40%, .9),  0 2px 2px hsla(0, 0%, 0%, 0.5)"
            >
              Visit
            </Button>
          </Link>
          {repoUrl && (
            <Link isExternal href={repoUrl}>
              <Button
                fontSize="sm"
                cursor="pointer"
                as="a"
                borderRadius={2}
                textColor="gray.100"
                variant="ghost"
                colorScheme="teal"
                _hover={{
                  background: 'white',
                  color: 'teal.500',
                }}
              >
                Source code
              </Button>
            </Link>
          )}
        </ButtonGroup>
      </Box>
    </Flex>
  );
};

export { Card };
