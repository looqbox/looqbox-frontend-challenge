import '@testing-library/jest-dom';
import { act, cleanup, render, screen } from '@testing-library/react';
import StatsRoseChart from '..';

jest.mock('@ant-design/plots', () => ({
  Rose: (props: any) => {
    const domain = props?.scale?.y?.domain ?? [];
    const fontSize = props?.label?.style?.fontSize ?? '';
    const dataLen = Array.isArray(props?.data) ? props.data.length : 0;

    return (
      <div
        data-testid="rose"
        data-domain={domain.join(',')}
        data-fontsize={String(fontSize)}
        data-datalen={String(dataLen)}
      />
    );
  },
}));

const sampleStats = [
  { name: 'hp', value: 80, color: '#aaa' },
  { name: 'attack', value: 95, color: '#bbb' },
  { name: 'defense', value: 70, color: '#ccc' },
];

describe('StatsRoseChart', () => {
  afterEach(() => {
    cleanup();
  });

  it('usa domínio [0,150] e fontSize 12 em telas desktop', () => {
    (window as any).innerWidth = 1024;

    render(<StatsRoseChart stats={sampleStats} />);
    const node = screen.getByTestId('rose');

    expect(node).toHaveAttribute('data-domain', '0,150');
    expect(node).toHaveAttribute('data-fontsize', '12');
    expect(node).toHaveAttribute('data-datalen', String(sampleStats.length));
  });

  it('muda para domínio [0,300] e fontSize 9 quando a tela é mobile (<=768)', () => {
    (window as any).innerWidth = 1024;
    render(<StatsRoseChart stats={sampleStats} />);

    act(() => {
      (window as any).innerWidth = 480;
      window.dispatchEvent(new Event('resize'));
    });

    const node = screen.getByTestId('rose');
    expect(node).toHaveAttribute('data-domain', '0,300');
    expect(node).toHaveAttribute('data-fontsize', '9');
  });
});
