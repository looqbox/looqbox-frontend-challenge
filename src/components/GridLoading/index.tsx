import { GridContainer, SkeletonItem } from "./styles";

export function GridLoading() {
  return (
    <GridContainer>
      {Array.from({ length: 20 }).map((_, index) => (
        <SkeletonItem active key={index} />
      ))}
    </GridContainer>
  );
}
