import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Grid,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { BiDirections, BiHome } from 'react-icons/bi';
import { BsImageFill, BsPerson } from 'react-icons/bs';
import { MdOutgoingMail, MdOutlineComputer } from 'react-icons/md';
import MobileDrawerItem from './MobileDrawerItem';

interface IMobileDrawer {
  isOpen: boolean;
  onClose: () => void;
}

const MobileDrawer = ({ isOpen, onClose }: IMobileDrawer) => {
  return (
    <Drawer placement="bottom" isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent
        color="whiteAlpha.900"
        backgroundColor="gray.600"
        borderTopRadius="3xl"
        pt={6}
        pb={10}
      >
        <DrawerBody>
          <Grid
            templateColumns={'repeat(3, 1fr)'}
            templateRows={'repeat(2, 1fr)'}
            gap="8"
            mt={6}
          >
            <MobileDrawerItem
              onClose={onClose}
              path="home"
              text="Home"
              icon={<BiHome />}
            />
            <MobileDrawerItem
              onClose={onClose}
              path="about"
              text="About"
              icon={<BsPerson />}
            />
            <MobileDrawerItem
              onClose={onClose}
              path="skills"
              text="Skills"
              icon={<MdOutlineComputer />}
            />
            <MobileDrawerItem
              onClose={onClose}
              path="qualification"
              text="Journey"
              icon={<BiDirections />}
            />
            <MobileDrawerItem
              onClose={onClose}
              path="portfolio"
              text="Portfolio"
              icon={<BsImageFill />}
            />
            <MobileDrawerItem
              onClose={onClose}
              path="contact"
              text="Contact"
              icon={<MdOutgoingMail />}
            />
          </Grid>
          <DrawerCloseButton />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
export default MobileDrawer;
