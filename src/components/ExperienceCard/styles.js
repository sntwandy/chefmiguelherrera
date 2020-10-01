import styled from "styled-components";

export const CardWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;
  min-width: 500px;
  height: 300px;
  position: relative;
  margin: 10px 30px;
  background-color: #0a0908;
  border-radius: 5px;
`;

export const Figure = styled.figure`
  width: 60%;
  height: 300px;
  margin: 0px;
  & > img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 190px;
  margin-right: 10px;
  color: #f0a202;
`;

export const Place = styled.span`
  font-size: 1em;
  font-weight: 800;
  text-align: center;
  white-space: break-spaces;
`;

export const Line = styled.div`
  width: 150px;
  height: 2px;
  background-color: #f0a202;
  margin: 15px 0px;
`;

export const Position = styled.div`
  font-size: 1em;
  font-weight: 400;
`;

export const DateWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  font-weight: 300;
`;
