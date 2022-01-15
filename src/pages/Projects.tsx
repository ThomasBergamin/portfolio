import { Box } from '@chakra-ui/react';
import React from 'react';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';

const Projects = () => {
  return (
    <>
      <Navbar />

      <Box as="section" minHeight="70vh"></Box>
      <Footer />
    </>
  );
};

export default Projects;
