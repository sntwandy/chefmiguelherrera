import React from "react";

// Components
import { ExperienceCard } from "../../components/ExperienceCard";

// Styles
import { Section, Title, CardsWrap, CardsContainer, TextWrap } from "./styles";

// Assets
import assets from "../../assets";

export const Experience = () => (
  <Section id="Experience">
    <Title>La mia esperienza</Title>
    <CardsWrap>
      <CardsContainer>
        {assets.experienceResources.map((data) => (
          <ExperienceCard {...data} />
        ))}
      </CardsContainer>
    </CardsWrap>
    <TextWrap>
      <span>"Con più di 20 anni di lavoro nell'alta cucina"</span>
    </TextWrap>
  </Section>
);
