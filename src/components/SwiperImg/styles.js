import styled from "styled-components";

export const ImageWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: center;
  height: 80vh;
  @media screen and (max-width: 1000px) {
    height: 70vh;
  }
  @media screen and (max-width: 700px) {
    height: 60vh;
  }
  @media screen and (max-width: 450px) {
    height: 50vh;
  }
  & > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
  }
`;
