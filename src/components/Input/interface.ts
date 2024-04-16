import { InputHTMLAttributes } from "react";

type IInputHTML = Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

export interface IInput extends IInputHTML {
  label?: string;
  icon?: boolean;
  helperText?: string;
  helperTextOnClick?: () => void;
  error?: boolean;

  iconLeft?: boolean;
  iconLeftOnClick?: () => void;
  iconRight?: boolean;
  iconRightOnClick?: () => void;

  onClickDropdownItem?: (itemValue: string, itemLabel?: string) => void;

  onClickDropdown?: () => void;

  dropdown?: {
    value: string;
    label?: string;
  }[];
}
