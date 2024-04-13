import Lottie from "lottie-react";
import { LoadingDots, StyledContainer } from "./styles";
import PokeballLoading from "../../lib/lottie/PokeballLoading.json";

export default function Loading() {
  return (
    <StyledContainer>
      <Lottie
        animationData={PokeballLoading}
        loop={true}
        style={{
          width: 60,
          height: 60,
        }}
      />

      <LoadingDots>
        <span className="text">Carregando</span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </LoadingDots>
    </StyledContainer>
  );
}
