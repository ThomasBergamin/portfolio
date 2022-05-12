import { SlideFade } from '@chakra-ui/react';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';

import Main from './sections/Main';
import AboutMe from './sections/AboutMe';
import Skills from './sections/Skills';
import Qualification from './sections/Qualification';
import Portfolio from './sections/Portfolio';
import ScrollUp from '../components/ScrollUp/ScrollUp';
import MobileDrawer from '../components/MobileDrawer/MobileDrawer';

const Home = () => {
  return (
    <>
      <Navbar />
      <SlideFade in offsetY="50px">
        <Main />
      </SlideFade>
      <AboutMe />
      <Skills />
      <Qualification />
      <Portfolio />
      <Footer />
      <ScrollUp />
      <MobileDrawer />
    </>
  );
};

export default Home;
