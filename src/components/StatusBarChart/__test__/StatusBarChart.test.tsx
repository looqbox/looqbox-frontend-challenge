import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import StatsLines from '..';

jest.mock('antd', () => {
  const original = jest.requireActual('antd');
  return {
    ...original,
    Progress: ({ percent, strokeColor }: { percent: number; strokeColor: string }) => (
      <div data-testid="progress" data-percent={percent} data-color={strokeColor}></div>
    ),
  };
});

describe('StatsLines', () => {
  const stats = [
    { name: 'hp', value: 100, color: 'red' },
    { name: 'attack', value: 80, color: 'blue' },
  ];

  it('renderiza os nomes e valores das stats', () => {
    render(<StatsLines stats={stats} />);
    expect(screen.getByText(/HP/i)).toBeInTheDocument();
    expect(screen.getByText(/100/i)).toBeInTheDocument();
    expect(screen.getByText(/ATTACK/i)).toBeInTheDocument();
    expect(screen.getByText(/80/i)).toBeInTheDocument();
  });

  it('renderiza os progressos com percentuais corretos', () => {
    render(<StatsLines stats={stats} max={100} />);
    const bars = screen.getAllByTestId('progress');
    expect(bars[0]).toHaveAttribute('data-percent', '100');
    expect(bars[0]).toHaveAttribute('data-color', 'red');
    expect(bars[1]).toHaveAttribute('data-percent', '80');
    expect(bars[1]).toHaveAttribute('data-color', 'blue');
  });
});
