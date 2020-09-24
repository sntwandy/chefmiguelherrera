import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  max-height: 90%;
  padding: 0px 50px;
`;

export const Title = styled.h2`
  font-family: "Dancing Script", cursive;
  font-size: 3em;
  margin-bottom: 30px;
  margin-top: 30px;
  @media screen and (max-width: 400px) {
    margin-left: 30px;
  }
`;

export const ImageWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: center;
  & > img {
    width: 90%;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
  }
`;
