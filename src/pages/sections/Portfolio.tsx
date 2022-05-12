import { Container, Center, Heading, Box, chakra } from '@chakra-ui/react';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import { Card } from '../../components/Cards/Cards';

const ChakraSwiper = chakra(Swiper);

const Portfolio = () => {
  return (
    <Container as="section" id="portfolio" maxW="70ch" px="6" pt={24}>
      <Center mb={4}>
        <Heading color="whiteAlpha.900">My Portfolio</Heading>
      </Center>
      <Box mt={10}>
        <ChakraSwiper
          pb={14}
          px={{ base: 14, md: 0 }}
          spaceBetween={80}
          id="swiper"
          modules={[Navigation, Pagination, A11y]}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <Card
              title="Reservia"
              src="/img/reservia.jpg"
              url="https://reservia.thomasbergamin.com"
              subtitle="Project #1 : Integration of a model using HTML and CSS"
              repoUrl="https://github.com/ThomasBergamin/ThomasBergamin_2_16042021"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="Oh My Food"
              url="https://ohmyfood.thomasbergamin.com"
              src="/img/ohmyfood.jpg"
              subtitle="Project #2 : Integration of a model in HTML and Sass"
              repoUrl="https://github.com/ThomasBergamin/ThomasBergamin_3_24052021"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="Orinoco"
              src="/img/orinoco.jpg"
              url="https://orinoco.thomasbergamin.com"
              subtitle="Project #3, usage of JavaScript to make async calls to an API"
              repoUrl="https://github.com/ThomasBergamin/ThomasBergamin_5_10072021"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="Groupomania"
              src="/img/groupomania.png"
              url="https://groupomania.thomasbergamin.com"
              subtitle="Final project, React + Tailwind & Node + Express"
              repoUrl="https://github.com/ThomasBergamin/grouporama"
            />
          </SwiperSlide>
        </ChakraSwiper>
      </Box>
    </Container>
  );
};

export default Portfolio;
