import React from "react";

// Styles
import { Section, ContentWrap, Title, Name, Paragraph, Button } from "./styles";

export const Home = () => (
  <Section id="Home">
    <ContentWrap>
      <Title>Chef</Title>
      <Name>Miguel Herrera</Name>
      <Paragraph>
        “Chef di alta cucina, passione per la qualità e arte di creare il i
        migliori piatti che il tuo palato possa assaggiare ".
      </Paragraph>
      <a href="#About">
        <Button>Sapere di più su di me</Button>
      </a>
    </ContentWrap>
  </Section>
);
