import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TypePill from '..';

describe('TypePill', () => {
  it('renderiza o label corretamente', () => {
    render(<TypePill color="#123456" label="grass" />);
    expect(screen.getByText(/grass/i)).toBeInTheDocument();
  });

  it('mostra o ícone quando informado', () => {
    render(<TypePill color="#123456" label="fire" icon="/fire.png" />);
    expect(screen.getByAltText('fire')).toBeInTheDocument();
  });

  it('não renderiza img se o ícone não for passado', () => {
    render(<TypePill color="#123456" label="water" />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});
