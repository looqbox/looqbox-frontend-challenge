import LateralBar from "@/components/LateralBar";
import PokemonList from "@/components/PokemonList";
import { Col, Row } from "antd";

export default function HomePage() {
  return (
    <Row>
      <Col sm={24} md={8} lg={6}>
        <LateralBar />
      </Col>
      <Col sm={24} md={16} lg={18}>
        <PokemonList />
      </Col>
    </Row>
  );
}
