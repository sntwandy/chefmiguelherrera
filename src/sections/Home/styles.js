import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
  padding-left: 100px;
  background-image: url("https://res.cloudinary.com/dh9cghj6y/image/upload/v1601530723/chefherrera/Home/mifayvzc7kyzpl8nxqkz.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 980px) {
    padding-left: 30px;
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 10em;
  font-family: "Dancing Script", cursive;
  color: #f0a202;
  @media screen and (max-width: 980px) {
    font-size: 5em;
  }
  @media screen and (max-width: 450px) {
    font-size: 3em;
  }
`;

export const Name = styled.h3`
  font-size: 7em;
  font-family: "Dancing Script", cursive;
  margin-left: 50px;
  color: #f0a202;
  @media screen and (max-width: 980px) {
    font-size: 3em;
  }
  @media screen and (max-width: 450px) {
    font-size: 2em;
  }
`;

export const Paragraph = styled.p`
  font-size: 2em;
  width: 700px;
  margin: 20px 0px;
  font-weight: 300;
  color: #f3fae1;
  @media screen and (max-width: 980px) {
    width: 300px;
    font-size: 1em;
  }
  @media screen and (max-width: 450px) {
    width: 200px;
  }
`;

export const Word = styled.span`
  color: #f0a202;
  font-family: "Dancing Script", cursive;
`;

export const Button = styled.button`
  width: 200px;
  height: 60px;
  background-color: #f0a202;
  border-radius: 50px;
  font-size: 1.2em;
  box-shadow: 0px 2px 13px -4px #000000;
  font-weight: 700;
  @media screen and (max-width: 450px) {
    font-size: 1em;
    width: 200px;
    height: 50px;
  }
`;
