import { Outlet } from "react-router-dom";
import { ContentContainer, HeaderContainer, LayoutContainer } from "./styles";
import logo from "@/assets/pokeball.svg";

export function MainLayout() {
  return (
    <LayoutContainer>
      <HeaderContainer>
        <img src={logo} />
        <h1>Pokédex</h1>
      </HeaderContainer>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </LayoutContainer>
  );
}
