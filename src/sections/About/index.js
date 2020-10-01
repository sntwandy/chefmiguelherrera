import React from "react";

// Components
import { ExperienceCard } from "../../components/ExperienceCard";

// Styles
import {
  Section,
  Title,
  Paragraph,
  OffertaText,
  ContentWrap,
  SlidesWrap,
  CardsContainer,
  CardsWrap,
} from "./styles";

// Assets
import assets from "../../assets";

export const About = () => (
  <Section id="About">
    <ContentWrap>
      <Title>Informazioni sui nostri servizi</Title>
      <Paragraph>
        Grazie alla collaborazione DEL NOSTRO TEAM in outsourcing con partner
        specializzati, PERFETIONIST è capace di offrire un pacchetto di servizi
        integrati dedicati alla RICETTIVITÀ e produttività turistica,
        residenziale e professionale. Il modo più sicuro per garantire un
        servizio perfetto e la massima soddisfazione dei propri clienti.
      </Paragraph>
    </ContentWrap>
    <OffertaText>LA NOSTRA OFFERTA:</OffertaText>
    <SlidesWrap>
      <CardsWrap>
        <CardsContainer>
          {assets.servicesResources.map((element) => (
            <ExperienceCard {...element} />
          ))}
        </CardsContainer>
      </CardsWrap>
    </SlidesWrap>
  </Section>
);
