import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;
export const Grid = styled.ul`
  list-style: none;
  padding: 0;
  margin: 24px auto 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 80px;
  padding: 16px 20px;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;
export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 16px;
`;

export const Header = styled.header`
  border-bottom: 1px solid #3f3e3eff;
  height: 120px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    height: 100px;
  }
`;
export const Logo = styled.img`
  width: 280px;
  @media (max-width: 768px) {
    width: 120px;
  }
`;
