import styled from "styled-components";

export const ImageWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: center;
  height: 80vh;
  @media screen and (max-width: 1000px) {
    height: 50vh;
  }
  @media screen and (max-width: 700px) {
    height: 30vh;
  }
  @media screen and (max-width: 450px) {
    height: 20vh;
  }
  & > img {
    width: 90%;
    height: -webkit-fill-available;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
  }
`;
