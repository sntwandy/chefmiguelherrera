import React from "react";

// Styles
import { ImgWrap } from "./styles";

export const CreationCard = ({ source }) => (
  <ImgWrap>
    <img src={source} alt="Creation food" />
  </ImgWrap>
);
