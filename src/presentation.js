import React from "react";

import { Deck } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// import IntroSlides from "./sections/IntroSlides";
import LightningSlides from "./sections/LightningSlides";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

theme.screen.components.codePane.fontSize = "1.5rem";
theme.print.components.codePane.fontSize = "1.5rem";

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transitionDuration={500} theme={theme} contentHeight={1000}>
        {LightningSlides}
      </Deck>
    );
  }
}
