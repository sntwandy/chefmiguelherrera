import React from "react";

// Styles
import {
  Section,
  ContentWrap,
  Title,
  Name,
  Paragraph,
  Word,
  Button,
} from "./styles";

export const Home = () => (
  <Section id="Home">
    <ContentWrap>
      <Title>Chef</Title>
      <Name>Miguel Herrera</Name>
      <Paragraph>
        Se quello che cerchi è la perfezione e professionalità per il tuo
        locale, hotel, alberghi o ristoranti, ecco la soluzione per te.
        <br /> <Word>PERFECTIONIST</Word>. <br /> E una azienda guidata da Chef
        professionisti è si occupa di gestione cucina e risorse umane con veri e
        propri perfezionisti del mestiere. La nostra azienda prepara e forma il
        nostro team nelle migliore scuole dei veri professionisti, per garantire
        la qualità dei nostri servizi.
      </Paragraph>

      <Button>
        <a href="#About">Conoscici</a>
      </Button>
    </ContentWrap>
  </Section>
);
