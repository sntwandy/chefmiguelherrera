import React from "react";

// Assets
import assets from "../../assets";

// Components
import { SwiperImg } from "../../components/SwiperImg";

// Styles
import { Section, Title } from "./styles";

export const Gallery = () => (
  <Section>
    <Title>Look my gallery</Title>
    <SwiperImg assets={assets.galleryImages} />
  </Section>
);