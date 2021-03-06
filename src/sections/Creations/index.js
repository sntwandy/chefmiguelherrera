import React from "react";

// Assets
import assets from "../../assets";

// Components
import { CreationCard } from "../../components/CreationCard";

// Styles
import { Section, Title, ImgContainer } from "./styles";

export const Creations = () => (
  <Section id="Creations">
    <Title>Semplicità in ogni creazione</Title>
    <ImgContainer>
      {assets.creationsImages.map(({ id, src }) => (
        <CreationCard key={id} source={src} />
      ))}
    </ImgContainer>
  </Section>
);
