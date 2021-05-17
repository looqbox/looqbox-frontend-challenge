import React from 'react';

import { Container, Progress } from './styles';

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar = ({ percentage }: ProgressBarProps) => {
  return (
    <Container>
      <Progress percentage={percentage} />
    </Container>
  );
};

export default ProgressBar;
