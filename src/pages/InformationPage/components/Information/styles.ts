import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 1441px) {
    max-width: 1440px;
    margin: 24px auto 0px;
  }
  @media (max-width: 768px) {
    padding: 16px;
  }
  padding: 0px 60px;
  margin-top: 24px;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Number = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  color: #7b7979;
  margin-bottom: 8px;
`;
export const PokemonName = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 125%;
  color: #2f2e2e;
  margin-bottom: 24px;
`;
export const TagContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
  > div:nth-child(1) {
    margin-left: 0;
  }
`;
export const Tag = styled.div`
  border-radius: 5.7px;
  margin-left: 10px;
  padding: 8px 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  color: #000;
`;
export const Text = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 150%;
  color: #000000;
  max-width: 40%;
  @media (max-width: 1300px) {
    max-width: 70%;
  }
`;
export const SpecsContent = styled.div`
  margin: 50px auto;
  display: flex;
  @media (max-width: 750px) {
    flex-direction: column;
  }
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
export const SpecTextContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 40%;
  height: 100%;
  padding: 24px;
  background: rgba(48, 167, 215, 0.2);
  border-radius: 12px;
  min-height: 380px;
  @media (max-width: 750px) {
    width: 100%;
    margin-bottom: 24px;
  }
`;
export const SpecImage = styled.img`
  height: 380px;
  @media (max-width: 768px) {
    height: 280px;
  }
`;
export const TitleCol = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
  line-height: 125%;
  color: #000000;
`;
export const SubtitleCol = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
  line-height: 125%;
  color: #000000;
`;
export const SubtitleAbilities = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 125%;
  color: #000000;
`;
