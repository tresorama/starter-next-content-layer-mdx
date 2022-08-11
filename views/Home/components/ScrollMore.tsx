import { GridItem, Text } from "@chakra-ui/react";
import { GridMain } from "@/components/layout/GridMain";

export const ScrollMore = () => {
  return (
    <>
      <GridMain>
        <GridItem gridColumn="2/-1">
          <Text textStyle="logo">Scroll More</Text>
        </GridItem>
      </GridMain>
    </>
  );
};
