import styled from "styled-components";

export const ImgWrap = styled.div`
  width: 400px;
  height: 216.5px;
  margin: 20px 0px;
  & > img {
    width: 100%;
    height: -webkit-fill-available;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
    border-radius: 5px;
  }
`;
