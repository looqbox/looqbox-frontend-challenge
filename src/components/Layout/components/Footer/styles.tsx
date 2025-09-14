import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0px 40px;
  margin-top: 120px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const Copy = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    font-size: 12px;
    width: 90%;
  }
`;

export const SocialMidia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  @media (max-width: 768px) {
    gap: 20px;
  }
`;
export const Icon = styled.img``;
