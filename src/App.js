import React from "react";
import { ChakraProvider, extendTheme, Button } from "@chakra-ui/react";
import { AllRoutes } from "./routes";
import { Provider } from "react-redux";
import store from './store'
// Define your custom theme
const theme = extendTheme({
  colors: {
    // Set default colors
    primary: "black",
    secondary: "#00ff00",
    // Add more colors as needed
  },
  // Set default theme properties
  components: {
    Button: {
      // Example of setting default styles for a Button component
      baseStyle: {
        fontWeight: "bold",
        borderRadius: "md",
      },
      // Example of variant styles for different button types
      variants: {
        primary: {
          bg: "primary",
          color: "white",
          _hover: {
            bg: "secondary",
          },
        },
        secondary: {
          bg: "secondary",
          color: "white",
          _hover: {
            bg: "primary",
          },
        },
      },
    },
    // Add more component styles as needed
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      

      <AllRoutes/>
      
    </ChakraProvider>
  );
}

export default App;
