import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 16px;
  background-color: #c4c4c4;
  transition: transform 0.3s ease;
  :hover {
    transform: scale(1.1);
  }
  @media (max-width: 767px) {
    flex-direction: row-reverse;
    align-items: center;
  }
`;
export const NumberId = styled.div`
  text-align: left;
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  color: #7b7979;
`;
export const Image = styled.img`
  width: 130px;
  text-align: center;
  margin: 10px auto;
  @media (max-width: 767px) {
    width: 90px;
  }
`;
export const PokemonName = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  color: #676464;
  text-align: center;
  margin-bottom: 15px;
`;
export const TagContent = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  align-items: center;
`;
export const Tag = styled.div`
  padding: 2px 16px;
  border-radius: 2.15px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: #000;
  margin: 2px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
