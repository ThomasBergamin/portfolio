import { SlideFade, useMediaQuery } from '@chakra-ui/react';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';

import Main from './sections/Main';
import AboutMe from './sections/AboutMe';
import Skills from './sections/Skills';
import Qualification from './sections/Qualification';
import Portfolio from './sections/Portfolio';
import ScrollUp from '../components/ScrollUp/ScrollUp';
import MobileDrawerContainer from '../components/MobileDrawer/MobileDrawerContainer';

const Home = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  return (
    <>
      {isLargerThan768 ? <Navbar /> : <MobileDrawerContainer />}

      <SlideFade in offsetY="50px">
        <Main />
      </SlideFade>
      <AboutMe />
      <Skills />
      <Qualification />
      <Portfolio />
      <Footer />
      <ScrollUp />
    </>
  );
};

export default Home;
