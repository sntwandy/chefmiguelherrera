import React from "react";

// Components
import { ExperienceCard } from "../ExperienceCard";

// Styles
import { Section, Title, CardsWrap, CardsContainer, TextWrap } from "./styles";

// Assets
import assets from "../../assets";

export const Experience = () => (
  <Section>
    <Title>My Experience</Title>
    <CardsWrap>
      <CardsContainer>
        {assets.experienceResources.map((data) => (
          <ExperienceCard {...data} />
        ))}
      </CardsContainer>
    </CardsWrap>
    <TextWrap>
      <span>"With more than 20 years working in Haute Cuisine"</span>
    </TextWrap>
  </Section>
);
