import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url("https://res.cloudinary.com/dh9cghj6y/image/upload/v1601187424/chefherrera/Experience/ndmvon2d6khhbv4mggey.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Title = styled.h2`
  font-family: "Dancing Script", cursive;
  font-size: 3em;
  padding-top: 30px;
  padding-left: 20px;
  color: #f0a202;
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

export const CardsContainer = styled.div`
  display: flex;
  white-space: nowrap;
  margin: 70px 0px;
  padding-bottom: 10px;
`;

export const TextWrap = styled.div`
  width: 100%;
  color: #f0a202;
  text-align: center;
  margin-top: 100px;
  & > span {
    font-size: 2em;
    font-family: "Dancing Script", cursive;
  }
`;
