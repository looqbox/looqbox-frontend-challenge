//This is basically where the website logo is located, it takes an svg file inside the Assets folder
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