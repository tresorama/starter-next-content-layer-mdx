import type { ThemeOverride, ThemeConfig } from "@chakra-ui/react";
import { theme as baseTheme, extendTheme } from "@chakra-ui/react";

// TIP:
// When theme grows is size, a single theme.ts file is hard to manage.
// See here a battle tested structure to manage a big theme:
// https://chakra-ui.com/docs/styled-system/customize-theme#scaling-out-your-project

//
// 1. Declare "parts" of the custom theme to include custom colors, fonts, etc
//

const semanticTokens = {
  colors: {
    mainBg: { _light: "#FDFFF9", _dark: "#121212" },
    text: { _light: "#121212", _dark: "whiteAlpha.900" },
    textFaded: { _light: "#616161" },
    headers: { _light: "#000000", _dark: "#ffffff" },
    // hero
    heroBg: "mainBg",
    heroText: "text",
    heroMainTitle: { _light: "mainBg", _dark: "white" },
  },
};

const textStyles = {
  // HEADER
  logo: {
    fontFamily: "Futura",
    fontSize: "md", // 16px in figma
    fontWeight: "bold",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
  },
  navItem: {
    fontFamily: "Futura",
    fontSize: "sm", // 14px in figma
    fontWeight: "medium",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
  },
  // SECTION
  sectionTitle: {
    fontFamily: "Futura",
    fontSize: "3xl", // 32px in figma
    fontWeight: "bold",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    lineHeight: "1.1",
  },
  sectionBody: {
    fontFamily: "Futura",
    fontSize: "md", // 18px in figma
    fontWeight: "normal",
    letterSpacing: "0.1em",
  },
};

const globalStyles = {
  body: {
    bg: "mainBg",
    color: "text",
  },
};

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

//
// 2. Compose the "parts" of the custom theme
//
const themeOverrides = {
  semanticTokens,
  textStyles,
  styles: {
    global: globalStyles,
  },
  config,
} as ThemeOverride;

// 3. Extend "baseTheme" with "customTheme" overrides and export it.
//
// Export theme both as "named export" and "default export"
// This double export ensure that "@chakra-ui/cli" can import the theme
//
// "The theme entrypoint file should export the theme object either
// as default export or as named theme export.""
// Read more on How to generate TS typings for autocomplete:
// https://chakra-ui.com/docs/styled-system/advanced-theming#theme-typings
export const theme = extendTheme(themeOverrides);
export default theme;
