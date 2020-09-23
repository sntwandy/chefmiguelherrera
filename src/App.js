import React from "react";

// Components
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";

// Global Styles
import GlobalStyles from "./styles/GlobalStyles";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Home />
    </>
  );
};
