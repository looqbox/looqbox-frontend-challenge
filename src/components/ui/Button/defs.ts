import React from 'react'

export type ButtonVariant = 'primary' | 'secondary'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  variant?: ButtonVariant
}
