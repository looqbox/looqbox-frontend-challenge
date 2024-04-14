import { useState } from "react";
import { Container, Skeleton } from "./styles";

interface SkeletonLoadingProps {
  src: string;
  alt: string;
}

export default function ImgCardSkeleton({ src, alt }: SkeletonLoadingProps) {
  const [skeleton, setSkeleton] = useState(true);

  return (
    <Container skeleton={skeleton}>
      {skeleton && <Skeleton />}
      <img
        onLoad={() => setSkeleton(false)}
        src={src}
        width="256"
        height="256"
        alt={alt}
      />
    </Container>
  );
}
