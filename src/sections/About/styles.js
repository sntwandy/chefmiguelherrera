import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
`;

export const ContentWrap = styled.div`
  width: 50%;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const ImgWrap = styled.div`
  width: 50%;
  height: 100vh;
  background-image: url("https://res.cloudinary.com/dh9cghj6y/image/upload/v1600870170/chefherrera/kmisv8efr2eupnr7lsbm.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Title = styled.h2`
  font-size: 3.5em;
  font-family: "Dancing Script", cursive;
  margin-left: 20px;
`;

export const Paragraph = styled.p`
  width: fit-content;
  margin-left: 20px;
  margin-right: 10px;
  font-size: 1.6em;
  font-weight: 300;
  max-width: 800px;
  @media screen and (max-width: 1365px) {
    font-size: 20px;
  }
  @media screen and (max-width: 850px) {
    font-size: 15px;
  }
`;
