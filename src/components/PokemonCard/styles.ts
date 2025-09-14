import styled, { keyframes } from 'styled-components';

const fadeDown = keyframes`
  from { opacity: 0; transform: translate3d(0, -32px, 0); }
  to { opacity: 1; transform: none; }
`;

export const Container = styled.div`
  width: 100%;
  margin-top: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.backgroundCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: none;
  border-radius: 22px;
  padding: 120px 150px 24px;
  position: relative;
  animation: ${fadeDown} 0.8s;
  @media (max-width: 768px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const Overlay = styled.div<{ $color: string }>`
  position: absolute;
  inset: 0;
  border-radius: 22px;
  z-index: -1;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: ${({ $color }) => $color};
    opacity: 1;
    filter: blur(120px);
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: -200px;
  @media (max-width: 768px) {
    top: -110px;
    width: 60%;
  }
`;

export const Number = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
`;

export const Name = styled.span`
  font-size: 2rem;
  font-weight: 700;
  text-transform: capitalize;
  text-align: center;
  margin: 4px 8px 12px;
`;

export const Types = styled.div`
  display: flex;
  gap: 12px;
`;

export const Features = styled.div`
  display: flex;
  gap: 32px;
  margin: 16px 0;
`;

export const Spec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-bottom: 26px;
`;

export const Metrics = styled.span`
  font-size: 16px;
  font-weight: 700;
  white-space: nowrap;
`;
