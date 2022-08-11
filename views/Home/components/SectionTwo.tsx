import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { GridMain } from "@/components/layout/GridMain";

export const SectionTwo = () => {
  return (
    <>
      <GridMain mb={36}>
        <GridItem gridColumn={{ base: "2/-2", md: "3/-3" }} alignSelf="center">
          <TheVideo />
        </GridItem>
        <GridItem gridColumn={{ base: "1/-1" }}>
          <Box mt={8}>
            <CopyDetails />
          </Box>
        </GridItem>
      </GridMain>
    </>
  );
};

const CopyDetails = () => {
  return (
    <GridMain>
      <GridItem gridColumn={{ base: "2/-2", md: "3/7" }}>
        <Text textStyle="sectionTitle">Let’s talk about it now</Text>
      </GridItem>
      <GridItem gridColumn={{ base: "2/-2", md: "8/-3" }}>
        <Text textStyle="sectionBody" mt={{ base: 4, md: 0 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare nisl
          ipsum, sit nascetur proin mauris eget feugiat. Ultricies urna, lectus
          turpis accumsan enim, sed ut felis lacus. Ipsum tellus a a amet.
          Tempor turpis aliquam ultrices volutpat enim, ut cursus orci rhoncus.
        </Text>
      </GridItem>
    </GridMain>
  );
};
const TheVideo = () => {
  const image =
    "https://images.unsplash.com/photo-1545863013-6f3f77ba65c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2240&q=80";

  return (
    <Grid gridTemplateRows="55vmin">
      <GridItem gridColumn="1/-1" gridRow="1/-1">
        <Image src={image} w="full" h="full" objectFit="cover" />
      </GridItem>
      <GridItem
        gridColumn="1/-1"
        gridRow="1/-1"
        alignSelf="center"
        justifySelf="center"
      >
        <Box sx={{ "& svg": { w: "50px" } }}>
          <PlayButton />
        </Box>
      </GridItem>
    </Grid>
  );
};

const PlayButton = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="202"
    height="202"
    fill="none"
    viewBox="0 0 202 202"
  >
    <circle cx="101" cy="101" r="100.5" fill="#D9D9D9" stroke="#000" />
    <path
      fill="#D9D9D9"
      stroke="#000"
      d="m128.222 101-42.333 24.441V76.559L128.222 101Z"
    />
  </svg>
);
