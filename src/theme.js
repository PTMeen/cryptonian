import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  fonts: {
    body: "Open Sans, sans-serif",
    heading: "Oswald, sans-serif",
  },
  config,
});

export default theme;
