import React from "react";

// Styles
import { Navigation, LogoWrap, ListWrap, Ul, ListItem } from "./styles";

export const Nav = () => (
  <Navigation>
    <div>
      <a href="#Home">
        <LogoWrap>
          <img
            src="https://res.cloudinary.com/dh9cghj6y/image/upload/v1600870064/chefherrera/ob8lqoacqqqoyjvkueou.png"
            alt="Logo"
          />
        </LogoWrap>
      </a>
    </div>
    <ListWrap>
      <Ul>
        <a href="#About">
          <ListItem>Conoscici</ListItem>
        </a>
        <a href="#Creations">
          <ListItem>Creazioni</ListItem>
        </a>
        <a href="#Gallery">
          <ListItem>Galleria</ListItem>
        </a>
        <a href="#Experience">
          <ListItem>Esperienza</ListItem>
        </a>
        <a href="#Contact">
          <ListItem>Contatto</ListItem>
        </a>
      </Ul>
    </ListWrap>
  </Navigation>
);
