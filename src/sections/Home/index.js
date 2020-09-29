import React from "react";

// Styles
import { Section, ContentWrap, Title, Name, Paragraph, Button } from "./styles";

export const Home = () => (
  <Section id="Home">
    <ContentWrap>
      <Title>Chef</Title>
      <Name>Miguel Herrera</Name>
      <Paragraph>
        “Haute cuisine Chef, passion for quality and the art of creating the
        best dishes that your palate can taste”.
      </Paragraph>
      <Button>Know more about me</Button>
    </ContentWrap>
  </Section>
);
