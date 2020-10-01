import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  padding: 20px 20px;
  background-image: url("https://res.cloudinary.com/dh9cghj6y/image/upload/v1601531101/chefherrera/Creations/nimxnyqosng67xrqbnmp.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 1240px) {
    height: auto;
  }
`;

export const Title = styled.h2`
  font-size: 3em;
  font-family: "Dancing Script", cursive;
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
`;
