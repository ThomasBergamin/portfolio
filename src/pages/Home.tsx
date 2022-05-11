import { SlideFade } from '@chakra-ui/react';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';

import Main from './sections/Main';
import AboutMe from './sections/AboutMe';
import Skills from './sections/Skills';

const Home = () => {
  return (
    <>
      <Navbar />
      <SlideFade in offsetY="50px">
        <Main />
      </SlideFade>
      <AboutMe />
      <Skills />
      <Footer />
    </>
  );
};

export default Home;
