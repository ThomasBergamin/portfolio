import { Stack, HStack, Text, Spacer, Progress } from '@chakra-ui/react';

interface IProgress {
  value: number;
  text: string;
}

const ProgressBar = ({ value, text }: IProgress) => {
  return (
    <Stack>
      <HStack>
        <Text fontWeight="semibold">{text}</Text>
        <Spacer />
        <Text>{value}%</Text>
      </HStack>

      <Progress
        size="sm"
        borderRadius="full"
        colorScheme="teal"
        value={value}
      />
    </Stack>
  );
};

export default ProgressBar;
