import React from "react";
import Swiper from "react-id-swiper";

// Styles
import { Section, Title, ImageWrap } from "./styles";

export const Gallery = () => {
  const params = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
  return (
    <Section>
      <Title>Look my gallery</Title>
      <Swiper {...params}>
        <ImageWrap>
          <img
            src="https://res.cloudinary.com/dh9cghj6y/image/upload/v1600954693/chefherrera/knfefbt7paknfgturcec.png"
            alt=""
          />
        </ImageWrap>
        <ImageWrap>
          <img
            src="https://res.cloudinary.com/dh9cghj6y/image/upload/v1600954693/chefherrera/knfefbt7paknfgturcec.png"
            alt=""
          />
        </ImageWrap>
        <ImageWrap>
          <img
            src="https://res.cloudinary.com/dh9cghj6y/image/upload/v1600954693/chefherrera/knfefbt7paknfgturcec.png"
            alt=""
          />
        </ImageWrap>
        <ImageWrap>
          <img
            src="https://res.cloudinary.com/dh9cghj6y/image/upload/v1600954693/chefherrera/knfefbt7paknfgturcec.png"
            alt=""
          />
        </ImageWrap>
      </Swiper>
    </Section>
  );
};
