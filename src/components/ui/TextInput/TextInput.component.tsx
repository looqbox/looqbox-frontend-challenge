import React from 'react'
import { TextInputProps } from './defs'

import * as S from './TextInput.styles'

export function TextInput({
  name,
  label,
  onChangeValue,
  ...restProps
}: TextInputProps) {
  function onChangeInput({
    target: { value }
  }: React.ChangeEvent<HTMLInputElement>) {
    onChangeValue(value)
  }

  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputElement
        type="text"
        name={name}
        onChange={onChangeInput}
        {...(label ? { id: name } : {})}
        {...restProps}
      />
    </S.Wrapper>
  )
}
