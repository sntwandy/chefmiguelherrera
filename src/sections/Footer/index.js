import React from "react";

// Styles
import {
  FooterWrap,
  ContentWrap,
  NameWrap,
  ImgWrap,
  Name1,
  Name2,
  Rights,
  Develop,
  Domain,
  Social,
} from "./styles";

export const Footer = () => (
  <FooterWrap>
    <ContentWrap>
      <NameWrap>
        <Name1>Chef</Name1>
        <Name2>Miguel Herrea</Name2>
      </NameWrap>
      <ImgWrap>
        <a
          href="https://www.facebook.com/profile.php?id=100016932693425"
          target="_blank"
        >
          <Social>
            <img
              src="https://res.cloudinary.com/dh9cghj6y/image/upload/v1601390102/chefherrera/Contact/f3sdxyxvlvxvui6vecsq.png"
              alt="Facebook"
            />
          </Social>
        </a>
        <a href="https://www.instagram.com/chefmherrera/" target="_blank">
          <Social>
            <img
              src="https://res.cloudinary.com/dh9cghj6y/image/upload/v1601390107/chefherrera/Contact/utw8cc7tpjwcczkxhbcq.png"
              alt="Instagram"
            />
          </Social>
        </a>
        <a href="https://wa.me/+393476378108" target="_blank">
          <Social>
            <img
              src="https://res.cloudinary.com/dh9cghj6y/image/upload/v1601390111/chefherrera/Contact/vrtvcs8f77amgnk5yqzj.png"
              alt="WhatsApp"
            />
          </Social>
        </a>
      </ImgWrap>
    </ContentWrap>
    <Rights>Tutti i Diritti Riservati 2020</Rights>
    <a href="https://twitter.com/@sntwandy" target="_blank">
      <Develop>
        Sviluppato da: <Domain>sntwandy.dev</Domain>
      </Develop>
    </a>
  </FooterWrap>
);
