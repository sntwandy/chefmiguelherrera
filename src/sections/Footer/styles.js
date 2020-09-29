import styled from "styled-components";

export const FooterWrap = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  background-color: #0a0908;
  @media screen and (max-width: 670px) {
    flex-direction: column;
    height: auto;
  }
`;

export const NameWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  & > span {
    color: #f0a202;
    font-family: "Dancing Script", cursive;
  }
  @media screen and (max-width: 670px) {
    margin: 10px 0px;
  }
`;

export const Name1 = styled.span`
  font-size: 1.8em;
`;

export const Name2 = styled.span`
  font-size: 1.2em;
  margin-left: 10px;
`;

export const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 10px;
`;

export const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Rights = styled.span`
  font-weight: 300;
  color: #f0a202;
  @media screen and (max-width: 670px) {
    margin: 10px 0px;
  }
`;

export const Develop = styled.span`
  color: #f0a202;
  font-weight: 300;
  margin-right: 10px;
  @media screen and (max-width: 670px) {
    margin: 10px 0px;
  }
`;

export const Domain = styled.span`
  font-weight: 800;
`;

export const Social = styled.figure`
  margin: 0px 10px;
  width: 30px;
  & > img {
    width: 100%
  }
}
`;
