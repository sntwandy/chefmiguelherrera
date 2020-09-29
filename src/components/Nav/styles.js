import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background-color: rgba(243, 250, 225, 0.5);
  position: fixed;
  z-index: 2;
  @media screen and (max-width: 460px) {
    flex-direction: column;
    height: 110px;
  }
`;

export const LogoWrap = styled.figure`
  margin: 0;
  width: 40px;
  margin-left: 10px;
  & > img {
    width: 100%;
  }
`;
export const ListWrap = styled.div`
  height: 60px;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 60px;
  margin: 0px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  height: 60px;
  margin: 0px 10px;
  @media screen and (max-width: 460px) {
    margin: 0px 5px;
  }
`;
