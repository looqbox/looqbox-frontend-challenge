import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { Container, Title, LabelContent, BarContent, Bar } from "./styles";
import { useInformationPageContext } from "../../../../context/informationPageContext";
const Stats: React.FC = () => {
  function isEmpty(obj: any) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return JSON.stringify(obj) === JSON.stringify({});
  }
  const { pokemonInformation } = useInformationPageContext();
  return (
    <Container>
      <Title>Stats</Title>
      {isEmpty(pokemonInformation) ? (
        <Spinner
          animation="border"
          role="status"
          style={{ margin: "50px auto", width: "100px", height: "100px" }}
        />
      ) : (
        <Row>
          {pokemonInformation.stats.map((data: any, index: number) => (
            <Col md={6} key={index}>
              <LabelContent>
                <span>{data.stat.name}</span>
                <span
                  style={{
                    color: `var(--tag_${pokemonInformation.types[0].type.name})`,
                  }}
                >
                  {data.base_stat}
                </span>
              </LabelContent>
              <BarContent
                style={{
                  backgroundColor: `var(--background_${pokemonInformation.types[0].type.name})`,
                }}
              >
                <Bar
                  style={{
                    width: `${(data.base_stat * 100) / 200}%`,
                    backgroundColor: `var(--tag_${pokemonInformation.types[0].type.name})`,
                  }}
                />
              </BarContent>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Stats;
