import { Box, SlideFade, Grid, Center } from '@chakra-ui/react';
import React from 'react';
import { Card } from '../components/Cards/Cards';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';

const Projects = () => {
  return (
    <>
      <Navbar />
      <SlideFade in offsetY="30px">
        <Box as="section" p="4">
          <Center>
            <Grid
              templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2, 1fr)' }}
              gap={{ base: '8', md: '10' }}
            >
              <Card
                title="Reservia"
                src="/img/reservia.jpg"
                url="https://reservia.thomasbergamin.com"
                subtitle="First OpenClassrooms project, integration of a model using HTML and CSS"
                repoUrl="https://github.com/ThomasBergamin/ThomasBergamin_2_16042021"
              />
              <Card
                title="Oh My Food"
                url="https://ohmyfood.thomasbergamin.com"
                src="/img/ohmyfood.jpg"
                subtitle="Second OpenClassrooms project, discovery of Sass"
                repoUrl="https://github.com/ThomasBergamin/ThomasBergamin_3_24052021"
              />
              <Card
                title="Orinoco"
                src="/img/orinoco.jpg"
                url="https://orinoco.thomasbergamin.com"
                subtitle="Third OpenClassrooms project, usage of JavaScript to make async calls to an API"
                repoUrl="https://github.com/ThomasBergamin/ThomasBergamin_5_10072021"
              />
              <Card
                title="Groupomania"
                src="/img/groupomania.png"
                url="https://groupomania.thomasbergamin.com"
                subtitle="Final OpenClassrooms project, React + Tailwind / Node + Express"
                repoUrl="https://github.com/ThomasBergamin/grouporama"
              />
            </Grid>
          </Center>
        </Box>
      </SlideFade>
      <Footer />
    </>
  );
};

export default Projects;
