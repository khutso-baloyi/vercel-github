import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];

const intersests = [
  {name: 'Info Sec', text: 'A high passion for tinkering with software systems'},
  {name: 'Game Dev', text: 'I like bringing imagined worlds to life'}
]

const Acomplishments = () => (
  <Section>
    <SectionTitle>Other Interests</SectionTitle>
    <Boxes>
      {intersests.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.name}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
