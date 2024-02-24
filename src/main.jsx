import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider,} from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react'
import {mode} from "@chakra-ui/theme-tools";



const styles = {
  global: (props) => ({
    body:{
      bg:mode("grey.100",'#000')(props),
      color:mode("grey.800","whiteAlpha.900")(props),
    }
  })

}

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config,styles })


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
