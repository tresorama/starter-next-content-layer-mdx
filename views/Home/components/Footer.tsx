import { GridItem, Stack, Text } from "@chakra-ui/react";
import { GridMain } from "@/components/layout/GridMain";

export const Footer = () => {
  return (
    <GridMain minH="96px">
      <GridItem gridColumn={{ base: "3/-3", md: "2/-2" }} alignSelf="center">
        <Stack
          w="full"
          direction={{ base: "column", md: "row" }}
          justify="space-between"
        >
          <Text textStyle="navItem"># 2022 Lucio Marrone</Text>
          <Text textStyle="navItem">luciomarrone@gmail.com</Text>
        </Stack>
      </GridItem>
    </GridMain>
  );
};
