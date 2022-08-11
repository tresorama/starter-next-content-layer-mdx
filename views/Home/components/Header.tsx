import { Box, Flex, GridItem, Stack, Text } from "@chakra-ui/react";
import { GridMain } from "@/components/layout/GridMain";

export const Header = () => {
  return (
    <>
      <Box bg="mainBg">
        <GridMain>
          <GridItem gridColumn="2/-2">
            <Flex align="center" py="2rem">
              <Text textStyle="logo">LM</Text>
              <Stack
                ml="auto"
                direction="row"
                spacing={{ base: 4, md: 12 }}
                alignItems="center"
              >
                <Text textStyle="navItem">Works</Text>
                <Text textStyle="navItem">About</Text>
                <Text textStyle="navItem">Contact</Text>
              </Stack>
            </Flex>
          </GridItem>
        </GridMain>
      </Box>
    </>
  );
};
