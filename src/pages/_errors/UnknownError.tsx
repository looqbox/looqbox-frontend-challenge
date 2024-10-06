import { Link } from "react-router-dom";
import { PageContainer } from "./styles";
import logo from "@/assets/pokeball.svg";

export function UnknownError() {
  return (
    <PageContainer>
      <img src={logo} />
      <h1>An unknown error has occurred</h1>
      <Link to="/">Back to home</Link>
    </PageContainer>
  );
}
