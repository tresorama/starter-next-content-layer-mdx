import { Box } from "@chakra-ui/react";
import { ColorModeToggler } from "./components/ColorModeToggler";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ScrollMore } from "./components/ScrollMore";
import { SectionOne } from "./components/SectionOne";
import { SectionTwo } from "./components/SectionTwo";
import { Testimonials } from "./components/Testimonials";
import { TheHero } from "./components/TheHero";
import { SIDE_MARGIN } from "@/components/layout/GridMain";

export const Home = () => {
  return (
    <>
      <Header />
      <TheHero />
      <Box mt={12}>
        <ScrollMore />
      </Box>
      <Box mt={32}>
        <SectionOne />
      </Box>
      <Box mt={56}>
        <SectionTwo />
      </Box>
      <Testimonials />
      <Footer />
      <Box
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          w: SIDE_MARGIN,
          display: "flex",
          justifyContent: "center",
          mt: 8,
        }}
      >
        <ColorModeToggler />
      </Box>
    </>
  );
};
