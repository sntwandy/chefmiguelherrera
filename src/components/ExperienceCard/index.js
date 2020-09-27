import React from "react";

// Styles
import {
  CardWrap,
  Figure,
  InfoWrap,
  Place,
  Line,
  Position,
  DateWrap,
} from "./styles";

export const ExperienceCard = ({
  place,
  position,
  startDate,
  endDate,
  placeImage,
}) => (
  <CardWrap>
    <Figure>
      <img src={placeImage} alt={place} />
    </Figure>
    <InfoWrap>
      <Place>{place}</Place>
      <Line />
      <Position>{position}</Position>
      <DateWrap>
        <span>{startDate}</span>
        <span>{endDate}</span>
      </DateWrap>
    </InfoWrap>
  </CardWrap>
);
