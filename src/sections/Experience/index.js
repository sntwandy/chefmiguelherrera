import React from "react";

// Components
import { ExperienceCard } from "../../components/ExperienceCard";

// Styles
import { Section, Title, CardsWrap, CardsContainer, TextWrap } from "./styles";

// Assets
import assets from "../../assets";

export const Experience = () => (
  <Section id="Experience">
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
