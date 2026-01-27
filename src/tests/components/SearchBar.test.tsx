import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import { SearchBar } from '../../components/SearchBar/SearchBar';

function ControlledSearchBar(props: {
  initialValue?: string;
  placeholder?: string;
  onSearch?: (value: string) => void;
  onClear?: () => void;
}) {
  const [value, setValue] = useState(props.initialValue ?? '');

  return (
    <SearchBar
      value={value}
      placeholder={props.placeholder ?? 'Search...'}
      onChange={setValue}
      onSearch={(v) => props.onSearch?.(v)}
      onClear={props.onClear}
    />
  );
}

describe('SearchBar', () => {
  it('updates value when typing (controlled)', async () => {
    const user = userEvent.setup();

    render(<ControlledSearchBar placeholder="Search..." />);

    const input = screen.getByPlaceholderText('Search...');
    await user.type(input, 'pikachu');

    expect((input as HTMLInputElement).value).toBe('pikachu');
  });

  it('calls onSearch when pressing Enter', async () => {
    const user = userEvent.setup();
    const onSearch = vi.fn();

    render(<ControlledSearchBar placeholder="Search..." onSearch={onSearch} />);

    const input = screen.getByPlaceholderText('Search...');
    await user.type(input, 'raichu{enter}');

    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toHaveBeenCalledWith('raichu');
  });

  it('clears input when clicking the clear (X) button', async () => {
    const user = userEvent.setup();
    const onClear = vi.fn();

    render(<ControlledSearchBar placeholder="Search..." initialValue="abc" onClear={onClear} />);

    const input = screen.getByPlaceholderText('Search...') as HTMLInputElement;
    expect(input.value).toBe('abc');

    const clearBtn = document.querySelector(
      'button.ant-input-clear-icon',
    ) as HTMLButtonElement | null;
    expect(clearBtn).not.toBeNull();

    await user.click(clearBtn!);

    expect(input.value).toBe('');

    expect(onClear).toHaveBeenCalledTimes(1);
  });
});
