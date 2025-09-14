import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  min-height: 80px;
  width: 100%;
`;
export const CustomImage = styled.img`
  width: 200px;
  height: auto;
`;

export const Header = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  height: 140px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    height: 100px;
  }
`;
export const ContentSearchBar = styled.div`
  width: 30%;
  @media (max-width: 768px) {
    width: 58%;
  }
`;
export const Logo = styled.img`
  width: 280px;
  @media (max-width: 768px) {
    width: 120px;
  }
`;
export const ContentButton = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 20px;
`;
