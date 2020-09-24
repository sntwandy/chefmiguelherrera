import React from "react";

// Components
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Creations } from "./components/Creations";
import { Gallery } from "./components/Gallery";
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
    </>
  );
};
