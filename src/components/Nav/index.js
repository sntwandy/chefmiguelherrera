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
          <ListItem>About</ListItem>
        </a>
        <a href="#Creations">
          <ListItem>Creations</ListItem>
        </a>
        <a href="#Gallery">
          <ListItem>Gallery</ListItem>
        </a>
        <a href="#Experience">
          <ListItem>Experience</ListItem>
        </a>
        <a href="#Contact">
          <ListItem>Contact</ListItem>
        </a>
      </Ul>
    </ListWrap>
  </Navigation>
);
