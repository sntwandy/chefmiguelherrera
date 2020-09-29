import React from "react";

// Styles
import {
  Section,
  ImgWrap,
  ContentWrap,
  TitleWrap,
  H2,
  H3,
  H4,
  Form,
  Button,
} from "./styles";

export const Contact = () => (
  <Section id="Contact">
    <ImgWrap />
    <ContentWrap>
      <TitleWrap>
        <H2>Chef</H2>
        <H3>Miguel Herrera</H3>
      </TitleWrap>
      <H4>Let's talk!</H4>
      <div>
        <Form action="" method="post">
          <input type="text" placeholder="Alessandro Caruso" />
          <input type="number" placeholder="+39 879 098 9087" />
          <textarea cols="30" rows="10" placeholder="Tell me about it" />
          <Button type="submit">Send</Button>
        </Form>
      </div>
    </ContentWrap>
  </Section>
);
