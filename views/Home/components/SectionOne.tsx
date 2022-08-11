import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { GridMain } from "@/components/layout/GridMain";

export const SectionOne = () => {
  return (
    <GridMain>
      <GridItem gridColumn={{ base: "2/-2", md: "3/7" }} alignSelf="center">
        <CopyDetails />
      </GridItem>
      <GridItem
        gridColumn={{ base: "2/-2", md: "8/15" }}
        mt={{ base: 4, md: "0" }}
      >
        <Images />
      </GridItem>
    </GridMain>
  );
};

const CopyDetails = () => {
  return (
    <Box>
      <Text textStyle="sectionTitle">The ability to create</Text>
      <Text textStyle="sectionBody" mt={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare nisl
        ipsum, sit nascetur proin mauris eget feugiat. Ultricies urna, lectus
        turpis accumsan enim, sed ut felis lacus. Ipsum tellus a a amet. Tempor
        turpis aliquam ultrices volutpat enim, ut cursus orci rhoncus.
      </Text>
    </Box>
  );
};
const Images = () => {
  const images = [
    "https://images.unsplash.com/photo-1650209931913-a2b55f3e197e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2235&q=80",
    "https://images.unsplash.com/photo-1651592466579-29df67fca385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2187&q=80",
    "https://images.unsplash.com/photo-1545863013-6f3f77ba65c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2240&q=80",
  ];

  return (
    <Grid
      maxH="80vh"
      gridTemplateColumns="repeat(14, 1fr)"
      gridTemplateRows="repeat(11, 1fr)"
    >
      <GridItem gridColumn="3/-1" gridRow="4/-3">
        <Image src={images[2]} h="full" objectFit="cover" />
      </GridItem>
      <GridItem gridColumn="1/7" gridRow="5/-1">
        <Image src={images[0]} h="full" objectFit="cover" />
      </GridItem>
      <GridItem gridColumn="6/13" gridRow="1/8">
        <Image src={images[1]} h="full" objectFit="cover" />
      </GridItem>
    </Grid>
  );
};
