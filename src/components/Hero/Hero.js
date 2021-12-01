import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Khutso Kenneth Baloyi's<br />
        Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a highly motivated Software developer with a passion for IT security, back-end engineering, and Game development.
      </SectionText>
      <Button onClick={() => window.location = 'https://khutso-baloyi.github.io'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;