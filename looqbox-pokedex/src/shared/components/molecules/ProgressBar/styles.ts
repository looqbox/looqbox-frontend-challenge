import styled from 'styled-components';

interface ProgressProps {
  percentage: number;
}

export const Container = styled.div`
  height: 15px;
  width: 100%;
  overflow: hidden;
  max-width: 315px;
  background: #c4c4c4;
  border-radius: 8px;
`;

export const Progress = styled.div<ProgressProps>`
  width: ${props => `${props.percentage}%`};
  height: 15px;
  background: green;
  border-radius: 8px;
`;
