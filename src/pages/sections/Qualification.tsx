import { Container, Center, Heading } from '@chakra-ui/react';
import TimelineContainer from '../../components/Timeline/TimelineContainer';
import TimelineObject from '../../components/Timeline/TimelineObject';

const Qualification = () => {
  return (
    <Container as="section" id="qualification" maxW="70ch" pt={24} px="6">
      <Center mb={12}>
        <Heading color="whiteAlpha.900">My journey</Heading>
      </Center>

      <TimelineContainer>
        <TimelineObject
          title="Apprentice Web developer"
          subtitle="Rennes - Placemeet"
          date="04/2021 - 04/2022"
          position="right"
        />
        <TimelineObject
          title="Web developer diploma"
          subtitle="Rennes - OpenClassrooms"
          date="04/2021 - 04/2022"
          position="left"
        />
        <TimelineObject
          title="Volunteer Workaway"
          subtitle="Italy"
          date="07/2020 - 12/2020"
          position="right"
        />
        <TimelineObject
          title="Communication Bachelor"
          subtitle="Finland - University of Vaasa"
          date="09/2019 - 06/2020"
          position="left"
        />
        <TimelineObject
          title="Communication Degree"
          subtitle="France - IUT Nancy"
          date="09/2017 - 06/2019"
          position="right"
        />
      </TimelineContainer>
    </Container>
  );
};

export default Qualification;
