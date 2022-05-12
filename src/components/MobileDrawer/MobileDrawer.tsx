import {
  Drawer,
  Box,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  VStack,
  Text,
  Grid,
} from '@chakra-ui/react';
import { BiDirections, BiHome } from 'react-icons/bi';
import { BsImageFill, BsPerson } from 'react-icons/bs';
import { MdOutgoingMail, MdOutlineComputer } from 'react-icons/md';

const MobileDrawer = () => {
  return (
    <Drawer
      placement="bottom"
      isOpen={false}
      onClose={() => console.log('closed')}
    >
      <DrawerOverlay />
      <DrawerContent
        color="whiteAlpha.900"
        backgroundColor="gray.600"
        borderTopRadius="3xl"
      >
        <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
        <DrawerBody>
          <Grid
            templateColumns={'repeat(3, 1fr)'}
            templateRows={'repeat(2, 1fr)'}
          >
            <VStack>
              <Icon fontSize={24}>
                <BiHome />
              </Icon>
              <Text>Home</Text>
            </VStack>
            <VStack>
              <Icon fontSize={24}>
                <BsPerson />
              </Icon>
              <Text>About Me</Text>
            </VStack>
            <VStack>
              <Icon fontSize={24}>
                <MdOutlineComputer />
              </Icon>
              <Text>My skills</Text>
            </VStack>
            <VStack>
              <Icon fontSize={24}>
                <BiDirections />
              </Icon>
              <Text>My journey</Text>
            </VStack>
            <VStack>
              <Icon fontSize={22}>
                <BsImageFill />
              </Icon>
              <Text>My portfolio</Text>
            </VStack>
            <VStack>
              <Icon fontSize={24}>
                <MdOutgoingMail />
              </Icon>
              <Text>Contact me</Text>
            </VStack>
          </Grid>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
export default MobileDrawer;
