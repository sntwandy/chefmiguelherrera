import React from "react";

// Components
import { Home } from "./sections/Home";
import { About } from "./sections/About";
import { Creations } from "./sections/Creations";
import { Gallery } from "./sections/Gallery";
import { Experience } from "./sections/Experience";
import { Contact } from "./sections/Contact";
import { Nav } from "./components/Nav";

// Global Styles
import GlobalStyles from "./styles/GlobalStyles";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Home />
      <About />
      <Creations />
      <Gallery />
      <Experience />
      <Contact />
    </>
  );
};
