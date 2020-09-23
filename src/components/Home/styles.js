import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
  padding-left: 100px;
  background-image: url("https://res.cloudinary.com/dh9cghj6y/image/upload/v1600870110/chefherrera/m3ng2wldowrdvbwmppnr.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
`;

export const Name = styled.h3`
  font-size: 7em;
  font-family: "Dancing Script", cursive;
  margin-left: 50px;
`;

export const Paragraph = styled.p`
  font-size: 2em;
  width: 700px;
  margin: 20px 0px;
  font-weight: 300;
`;

export const Button = styled.button`
  width: 247px;
  height: 60px;
  background-color: #f0a202;
  border-radius: 50px;
  font-size: 1.2em;
`;
