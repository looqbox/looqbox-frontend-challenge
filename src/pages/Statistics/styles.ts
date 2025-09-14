import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Content = styled.div<{ $color?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 48px;
  height: 100vh;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 30%;
    height: 50%;
    top: 20%;
    left: 72%;
    transform: translateX(-50%);
    background: ${({ $color }) => $color || ''};
    opacity: 1;
    filter: blur(1820px);
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0px;
    height: auto;
    padding: 20px 0;
    &::after {
      width: 50%;
      top: 10%;
    }
  }
`;

export const ContantLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 120px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-top: 84px;
  position: relative;

  @media (max-width: 768px) {
    gap: 60px;
    margin-top: -20px;
    width: 100%;
    padding: 20px 0;
  }
`;
export const ContantRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 40px;
    width: 100%;
  }
`;

export const Statistic = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const Name = styled.p<{ $color?: string }>`
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 10px;
  color: ${({ $color }) => $color || '#fff'};
`;

export const Information = styled.p`
  font-size: 20px;
  font-weight: 400;
  display: flex;
  gap: 10px;
  align-items: right;
  text-align: right;
`;

export const Image = styled.img`
  width: 60%;
`;
export const Types = styled.div`
  display: flex;
  align-items: left;
  gap: 12px;
  margin-top: 10px;
`;

export const ResumePokemon = styled.p<{ $color?: string }>`
  font-size: 36px;
  width: 70%;
  color: ${({ $color }) => $color || '#fff'};
  @media (max-width: 768px) {
    font-size: 26px;
    text-align: center;
  }
`;

export const ImagePokeball = styled.img`
  position: absolute;
  top: 58%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 520px;
  opacity: 0.08;

  pointer-events: none;
`;

export const Icon = styled.img`
  width: 20px;
`;

export const IconHome = styled.img``;
export const ButtonGraphic = styled.div`
  display: flex;
  position: absolute;
  bottom: -40px;
  gap: 20px;
  z-index: 2;
`;
export const GraphicChart = styled.div`
  width: 90%;
  height: 20%;
  margin-top: -178px;
  margin-bottom: -70px;
  padding: 10px;
  @media (max-width: 768px) {
    margin-top: -178px;
    margin-bottom: -160px;
    padding: 0;
  }
`;
export const GraphicBAr = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: -40px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    margin-top: -14px;
    margin-bottom: 10px;
  }
`;

export const NavBar = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 40px 0;
  @media (max-width: 768px) {
    margin: 0;
  }
`;
