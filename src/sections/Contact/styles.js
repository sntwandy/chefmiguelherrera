import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const ImgWrap = styled.div`
  width: 50%;
  height: 100vh;
  background-image: url("https://res.cloudinary.com/dh9cghj6y/image/upload/v1601297790/chefherrera/Contact/houg7xovcubmk1nlrez8.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 550px) {
    width: 30%;
  }
`;

export const ContentWrap = styled.div`
  width: 50%;
  @media screen and (max-width: 550px) {
    width: 70%;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  font-family: "Dancing Script", cursive;
  height: 30%;
  margin-left: 50px;
  @media screen and (max-width: 550px) {
    margin-left: 10px;
  }
`;

export const H2 = styled.h2`
  font-size: 5em;
  @media screen and (max-width: 550px) {
    font-size: 3em;
  }
`;

export const H3 = styled.h3`
  font-size: 3.5em;
  @media screen and (max-width: 550px) {
    font-size: 2em;
  }
`;

export const H4 = styled.h4`
  font-size: 2em;
  font-weight: 300;
  text-align: center;
  margin: 30px 0px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  & > input {
    width: 80%;
    max-width: 400px;
    border: 3px solid #000;
    border-radius: 5px;
    height: 50px;
    font-size: 25px;
    padding: 0px 10px;
    background-color: #f3fae1;
    margin: 20px 0px;
    @media screen and (max-width: 550px) {
      font-size: 20px;
    }
  }
  & textarea {
    width: 80%;
    max-width: 400px;
    border: 3px solid #000;
    border-radius: 5px;
    height: 200px;
    font-size: 25px;
    padding: 10px 10px;
    background-color: #f3fae1;
    margin: 20px 0px;
    @media screen and (max-width: 550px) {
      font-size: 20px;
    }
  }
`;

export const Button = styled.button`
  width: 247px;
  height: 60px;
  background-color: #f0a202;
  border-radius: 50px;
  font-size: 1.2em;
  box-shadow: 0px 2px 13px -4px #000000;
  @media screen and (max-width: 550px) {
    font-size: 1em;
    width: 180px;
    height: 40px;
  }
`;
