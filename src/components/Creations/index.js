import React from "react";

// Assets
import assets from "../../assets";

// Components
import { CreationCard } from "../CreationCard";

// Styles
import { Section, Title, ImgWrap, ImgContainer } from "./styles";

export const Creations = () => (
  <Section>
    <Title>Simplicity in each creation</Title>
    <ImgContainer>
      {assets.creationsImages.map(({ id, src }) => (
        <CreationCard key={id} source={src} />
      ))}
    </ImgContainer>
  </Section>
);
