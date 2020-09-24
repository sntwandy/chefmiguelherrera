import React from "react";
import Swiper from "react-id-swiper";

// Styles
import { ImageWrap } from "./styles";

export const SwiperImg = ({ assets }) => {
  const params = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  return (
    <Swiper {...params}>
      {assets.map(({ id, src }) => (
        <ImageWrap key={id}>
          <img src={src} />
        </ImageWrap>
      ))}
    </Swiper>
  );
};
