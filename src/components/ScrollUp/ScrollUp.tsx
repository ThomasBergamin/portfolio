import { ArrowUpIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const ScrollUp = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  console.log(offset);
  return (
    <Button
      position="fixed"
      size="lg"
      right="2rem"
      bottom={offset < 450 ? '-20%' : '5rem'}
      colorScheme="green"
      borderRadius="full"
      padding="0 .3rem"
      zIndex={2}
      onClick={() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      }}
      transition=".4s"
    >
      <ArrowUpIcon fontSize="2xl" />
    </Button>
  );
};

export default ScrollUp;
