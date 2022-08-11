import { Grid } from "@chakra-ui/react";

// Il design su Figma è stato fatto su una viewport
// 1920x1080
// La Griglia aveva:
// - 12 colonne
// - 20px di gutter tra le colonne
// - 140px di margin orizzontale per lintera griglia
const FIGMA_COLUMN_GUTTER = 20; //px
const FIGMA_SIDE_MARGIN = 140; //px

const COLUMN_GUTTER = `${(FIGMA_COLUMN_GUTTER / 1920) * 100}vw`;
export const SIDE_MARGIN = `${
  ((FIGMA_SIDE_MARGIN - FIGMA_COLUMN_GUTTER) / 1920) * 100
}vw`;

export const GridMain = (props) => (
  <Grid
    gridTemplateColumns={`${SIDE_MARGIN} repeat(12, 1fr) ${SIDE_MARGIN}`}
    gap={COLUMN_GUTTER}
    {...props}
  />
);
