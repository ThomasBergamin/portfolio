import { CalendarIcon } from '@chakra-ui/icons';
import { Box, HStack, useMediaQuery, Text } from '@chakra-ui/react';

interface ITimelineObject {
  title: string;
  subtitle: string;
  date: string;
  position: 'left' | 'right';
}

const TimelineObject = ({
  title,
  subtitle,
  date,
  position,
}: ITimelineObject) => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  return (
    <>
      <Box
        id="container left"
        position="relative"
        padding="10px 40px"
        width={isLargerThan768 ? '50%' : '100%'}
        pl={isLargerThan768 ? '30px' : '70px'}
        pr={isLargerThan768 ? '30px' : '25px'}
        left={isLargerThan768 ? (position === 'left' ? 0 : '50%') : '0'}
        /* left={isLargerThan768 ? (position === 'left' ? '171px' : '0px') : ' 0'} */

        _after={{
          content: `''`,
          position: 'absolute',
          width: '25px',
          height: '25px',
          right: '-13px',
          left: isLargerThan768
            ? position === 'left'
              ? 'none'
              : '-13px'
            : '19px',
          backgroundColor: 'teal.500',
          top: '58px',
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
            {title}
          </Text>
          <Text as="h3">{subtitle}</Text>
          <HStack mt={2}>
            <CalendarIcon color="gray.600" />

            <Text color="gray.600" fontSize="sm">
              {date}
            </Text>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default TimelineObject;
