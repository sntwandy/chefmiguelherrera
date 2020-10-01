import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100vh;
`;

export const Title = styled.h2`
  font-size: 3.5em;
  font-family: "Dancing Script", cursive;
  margin-left: 20px;
  @media screen and (max-width: 650px) {
    font-size: 2em;
  }
`;

export const Paragraph = styled.p`
  width: 90%;
  text-align: end;
  font-size: 1.2em;
  font-weight: 300;
  @media screen and (max-width: 650px) {
    font-size: 1em;
  }
`;

export const OffertaText = styled.span`
  margin: 10px;
  font-size: 2em;
  @media screen and (max-width: 450px) {
    font-size: 1.7em;
  }
`;

export const ContentWrap = styled.div`
  width: 100%;
  height: 30%;
`;

export const SlidesWrap = styled.div`
  width: 100%;
  height: 70%;
  background-image: url("https://res.cloudinary.com/dh9cghj6y/image/upload/v1601523783/chefherrera/About/mqff3tkxvsv2l2jdegws.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const CardsContainer = styled.div`
  display: flex;
  white-space: nowrap;
  padding-top: 70px;
  padding-bottom: 10px;
`;

export const CardsWrap = styled.div`
  overflow: scroll;
  padding-left: 30px;
  width: 100%;
  position: relative;
  ::-webkit-scrollbar {
    width: 5px; /* Tamaño del scroll en vertical */
    height: 5px; /* Tamaño del scroll en horizontal */
    /* display: none; Ocultar scroll */
  }
  ::-webkit-scrollbar-thumb {
    background: #f0a202;
    border-radius: 5px;
  }
`;
