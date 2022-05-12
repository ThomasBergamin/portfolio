import { VStack, Icon, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';

interface IMobileDrawerItem {
  text: string;
  icon: ReactElement;
  path: string;
  onClose: () => void;
}

const MobileDrawerItem = ({ text, icon, path, onClose }: IMobileDrawerItem) => {
  const handleClick = () => {
    if (path === 'home') {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(path);
      element &&
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
    }

    let scrollTimeout: NodeJS.Timeout;
    addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(function () {
        onClose();
      }, 100);
    });
  };
  return (
    <VStack
      as="button"
      onClick={handleClick}
      alignItems="center"
      justifyContent="center"
    >
      <Icon fontSize={24}>{icon}</Icon>
      <Text>{text}</Text>
    </VStack>
  );
};

export default MobileDrawerItem;
