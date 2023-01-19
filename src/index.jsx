import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraBaseProvider, ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraBaseProvider>
  </React.StrictMode>
);
