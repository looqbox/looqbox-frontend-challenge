import React from 'react'

import { ModalProps } from './defs'

import * as S from './Modal.styles'

export function Modal({ children, isVisible }: ModalProps) {
  return (
    <S.Wrapper
      aria-label="modal"
      role="presentation"
      $isVisible={isVisible}
      aria-hidden={!isVisible}
    >
      <S.ContentWrapper>{children}</S.ContentWrapper>
    </S.Wrapper>
  )
}
