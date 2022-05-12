import { Box, useMediaQuery } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface ITimelineContainer {
  children: ReactNode;
}

const TimelineContainer = ({ children }: ITimelineContainer) => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  return (
    <Box
      id="timeline"
      position="relative"
      maxW="1200px"
      margin="0 auto"
      _after={{
        content: `''`,
        position: 'absolute',
        width: '6px',
        backgroundColor: 'white',
        top: 0,
        bottom: 0,
        left: isLargerThan768 ? '50%' : '31px',
        marginLeft: '-3px',
      }}
    >
      {children}
    </Box>
  );
};

export default TimelineContainer;
