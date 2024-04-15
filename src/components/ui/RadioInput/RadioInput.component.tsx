import React from 'react'

import { RadioInputProps } from './defs'

import * as S from './RadioInput.styles'

export function RadioInput({
  label,
  id,
  onCheck,
  value,
  ...restProps
}: RadioInputProps) {
  const handleChange = () => {
    !!onCheck && onCheck(value)
  }
  return (
    <S.Wrapper>
      <S.Input
        id={id}
        type="radio"
        value={value}
        onChange={handleChange}
        {...restProps}
      />
      {!!label && <S.Label htmlFor={id}>{label}</S.Label>}
    </S.Wrapper>
  )
}
