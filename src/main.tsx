import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import { theme } from "@chakra-ui/theme";

const { Button } = theme.components;

const theme1 = extendBaseTheme({
  components: {
    Button,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme1}>
      <App />
    </ChakraBaseProvider>
  </React.StrictMode>
);
