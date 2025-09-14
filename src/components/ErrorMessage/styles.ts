import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 50vh;
`;

const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: initial;
    transform: initial;
  }
`;
export const ErrorMessage = styled.div`
  max-width: 336px;
  height: 56px;
  background: ${({ theme }) => theme.colors.gradient};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  margin: 0 auto;
  animation: ${zoomIn} 0.8s;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Icon = styled.img`
  width: 32px;
  height: 32px;
`;

export const Message = styled.p`
  font-size: 16px;
  line-height: 150%;
  font-weight: 700;
`;
