import {
  Box,
  Center,
  GridItem,
  Image as ChakraImage,
  Text,
  type ImageProps
} from "@chakra-ui/react";
import { GridMain } from "@/components/layout/GridMain";

const Image = (props: ImageProps) => (
  <ChakraImage w="100%" h="100%" objectFit="cover" {...props} />
);
export const TheHero = () => {
  const textStyles = {
    main: {
      fontFamily: "Futura",
      fontSize: "7vw",
      textTransform: "uppercase",
      fontWeight: "medium",
      letterSpacing: "0.18em",
    },
    addon: {
      fontFamily: "Futura",
      fontSize: "1vw",
      textTransform: "uppercase",
      fontWeight: "semibold",
      letterSpacing: "0.1em",
      whiteSpace: "nowrap",
    },
  } as const;

  return (
    <Box bg="heroBg" color="heroText">
      <GridMain gridTemplateRows="1fr 1fr" sx={{ "& > *": { minH: "0px" } }}>
        <GridItem gridColumn="3/5" gridRow="1/2">
          <Image alt="image1" src="https://images.unsplash.com/photo-1490331331212-f7d35817aa7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2193&q=80" />
        </GridItem>
        <GridItem gridColumn="6/10" gridRow="1/-1">
          <Image alt="image2" src="https://images.unsplash.com/photo-1651323120960-a7efc89a801c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80" />
        </GridItem>
        <GridItem gridColumn="11/13" gridRow="2/3">
          <Image alt="image3" src="https://images.unsplash.com/photo-1544213745-42dbd893d3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80" />
        </GridItem>
        <GridItem
          gridColumn="5/6"
          gridRow="2/3"
          justifySelf="end"
          alignSelf="end"
        >
          +
        </GridItem>
        <GridItem
          gridColumn="-2/-1"
          gridRow="1/-1"
          justifySelf="center"
          alignSelf="center"
          maxWidth="100%"
        >
          <Center transform="rotate(-90deg)">
            <Text {...textStyles.addon}>Visual Artist And Photographer</Text>
          </Center>
        </GridItem>
        <GridItem gridColumn="1/-1" gridRow="1/-1">
          <Center h="100%" w="100%">
            <Text
              {...textStyles.main}
              mixBlendMode="difference"
              color="heroMainTitle"
            >
              Lucio Marrone
            </Text>
          </Center>
        </GridItem>
      </GridMain>
    </Box>
  );
};
