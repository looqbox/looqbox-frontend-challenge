import React from 'react'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import './Header.css'

const Header = () => {
    return (
        <header className="center">
            <Logo />
        </header>
    )
}

export default Header