import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import StatCard from '../components/StatCard';

describe('StatCard', () => {
  it('renders label and value correctly', () => {
    render(<StatCard label="Altura" value="1.5 m" />);

    expect(screen.getByText('Altura')).toBeInTheDocument();
    expect(screen.getByText('1.5 m')).toBeInTheDocument();
  });

  it('applies custom className to the container', () => {
    const { container } = render(
      <StatCard label="Peso" value="60 kg" className="custom-class" />
    );

    const cardDiv = container.firstChild as HTMLElement;
    expect(cardDiv).toHaveClass('custom-class');
    expect(cardDiv).toHaveClass('flex', 'flex-col', 'rounded-lg', 'p-2');
  });
});
