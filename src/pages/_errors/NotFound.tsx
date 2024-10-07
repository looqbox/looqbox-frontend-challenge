import { Link } from "react-router-dom";
import { PageContainer } from "./styles";
import logo from "@/assets/pokeball.svg";

export function NotFound() {
  return (
    <PageContainer>
      <img src={logo} />
      <h1>The page you are looking for does not exist</h1>
      <Link to="/">Back to home</Link>
    </PageContainer>
  );
}
