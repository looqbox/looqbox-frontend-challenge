export type RadioValue = string | number

export interface RadioInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onCheck: (value: RadioValue) => void
  label: string
  value: RadioValue
}
