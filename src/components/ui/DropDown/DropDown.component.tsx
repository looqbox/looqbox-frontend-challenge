import React, { useState } from 'react'

import { DropdownProps } from './defs'

import * as S from './DropDown.styles'

export function Dropdown({ title, children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenDropdown = () => setIsOpen((prevState) => !prevState)

  return (
    <S.Wrapper $isOpen={isOpen}>
      <S.Title onClick={handleOpenDropdown}>{title}</S.Title>
      <S.Content aria-hidden={!isOpen}>{children}</S.Content>
      <S.Overlay aria-hidden={!isOpen} onClick={handleOpenDropdown} />
    </S.Wrapper>
  )
}
