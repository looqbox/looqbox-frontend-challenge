import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  maxSize?: string;
  width?: string;
}
