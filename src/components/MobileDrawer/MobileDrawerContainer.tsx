import { Flex, useBoolean, IconButton, Spacer, Text } from '@chakra-ui/react';
import MobileDrawer from './MobileDrawer';
import { AiOutlineMenu } from 'react-icons/ai';

const MobileDrawerContainer = () => {
  const [isOpen, setIsOpen] = useBoolean(false);
  return (
    <>
      <Flex
        position="fixed"
        w="100%"
        bottom="0"
        left="0"
        backgroundColor="gray.500"
        zIndex="3"
        px="2rem"
        py={2}
        alignItems="center"
      >
        <Text fontWeight="bold" fontSize="xl" color="white">
          Thomas
        </Text>
        <Spacer />
        <IconButton
          color="white"
          variant="ghost"
          aria-label="Open Drawer Menu"
          icon={<AiOutlineMenu size={24} />}
          onClick={setIsOpen.on}
        ></IconButton>
      </Flex>
      <MobileDrawer isOpen={isOpen} onClose={setIsOpen.off} />
    </>
  );
};

export default MobileDrawerContainer;
