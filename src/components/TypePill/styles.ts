import styled from 'styled-components';

export const Container = styled.div<{ $color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: ${({ $color }) => $color};
  border-radius: 8px;
  padding: 6px 20px;
  max-width: 100px;
`;

export const Text = styled.span`
  text-transform: capitalize;
  font-size: 14px;
`;
