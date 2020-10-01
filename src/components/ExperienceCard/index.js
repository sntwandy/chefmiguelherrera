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
  serviceImage,
  description,
}) => (
  <CardWrap>
    <Figure>
      <img
        src={placeImage ? placeImage : serviceImage}
        alt={place ? place : "Services"}
      />
    </Figure>
    <InfoWrap>
      <Place>{place ? place : description}</Place>
      <Line />
      {position && <Position>{position}</Position>}
      {startDate && (
        <DateWrap>
          <span>{startDate}</span>
          <span>{endDate}</span>
        </DateWrap>
      )}
    </InfoWrap>
  </CardWrap>
);
