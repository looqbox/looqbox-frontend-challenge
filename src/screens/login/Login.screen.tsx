import React, { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Modal } from 'components/ui/Modal/Modal.component'
import { Button } from 'components/ui/Button/Button.component'
import { TextInput } from 'components/ui/TextInput/TextInput.component'

import pokedexLogo from 'assets/svg/pokedex_logo.svg'

import { Routing } from 'global/routes/Routing'
import { setUser } from 'global/redux/actions/user-slice'

import * as S from './login.styles'

export function LoginScreen() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [usernameValue, setUserNameValue] = useState('')

  const handleUsernameInputChange = (value: string) => {
    setUserNameValue(value)
  }

  const handleSubmitUsername = (event: FormEvent) => {
    event.preventDefault()
    dispatch(setUser(usernameValue))
    navigate(Routing.HOME)
  }

  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <S.PokedexLogo src={pokedexLogo} alt="Pokedex logo" />
      </S.LogoWrapper>
      <Modal isVisible={true}>
        <TextInput
          label="Please enter your username"
          placeholder="Username"
          name="username"
          onChangeValue={(value) => handleUsernameInputChange(value)}
        />
        <S.ModalFooter>
          <Button
            disabled={!usernameValue}
            onClick={handleSubmitUsername}
            label="Send"
          />
        </S.ModalFooter>
      </Modal>
    </S.Wrapper>
  )
}
