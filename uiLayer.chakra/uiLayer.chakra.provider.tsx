import React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./uiLayer.chakra.customTheme";

interface IChakraUIProviderProps {
  children: React.ReactNode;
}
export default function ChakraUIProvider(props: IChakraUIProviderProps) {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>{props.children}</ChakraProvider>
    </>
  );
}
