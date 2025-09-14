import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Loading } from '..';

const testTheme = {
  colors: {
    border: '#24293F',
    white: '#FFFFFF',
  },
} as any;

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider theme={testTheme}>{ui}</ThemeProvider>);
}
describe('Loading', () => {
  it('renderiza o spinner corretamente', () => {
    const { container } = renderWithTheme(<Loading />);
    const spinner = container.querySelector('.lds-roller');
    expect(spinner).toBeInTheDocument();
  });
});
