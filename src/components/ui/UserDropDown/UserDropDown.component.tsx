import React from 'react'
import { useDispatch } from 'react-redux'
import { useTheme } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { User, LogOut, Heart, HomeAlt } from '@styled-icons/boxicons-regular'

import { Dropdown } from '../DropDown/DropDown.component'

import { UserDropdownProps } from './defs'
import { Routing } from 'global/routes/Routing'
import { clearUser } from 'global/redux/actions/user-slice'

import * as S from './UserDropDown.styles'

export function UserDropdown({ username, screenName }: UserDropdownProps) {
  const { colors } = useTheme()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignOut = () => {
    dispatch(clearUser())
  }

  return (
    <Dropdown
      title={
        <S.Username>
          <User fill={colors.grayscale.white} size={24} />
          {username}
        </S.Username>
      }
    >
      <S.Nav>
        {screenName !== 'HOME' && (
          <S.Link onClick={() => navigate(Routing.HOME)} title="Home">
            <HomeAlt fill={colors.grayscale.dark} />
            <span>Home</span>
          </S.Link>
        )}

        {screenName !== 'FAVORITE_POKEMONS' && (
          <S.Link
            onClick={() => navigate(Routing.FAVORITE_POKEMONS)}
            title="Favorite Pokemons"
          >
            <Heart fill={colors.grayscale.dark} />
            <span>Favorite Pokemons</span>
          </S.Link>
        )}

        <S.Link role="button" onClick={handleSignOut} title="Sign out">
          <LogOut fill={colors.grayscale.dark} />
          <span>Sign out</span>
        </S.Link>
      </S.Nav>
    </Dropdown>
  )
}
