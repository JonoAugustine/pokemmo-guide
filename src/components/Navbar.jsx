import React from 'react'
import { Button, Container, Navbar as NavbarBs } from 'react-bootstrap'
import { useDarkMode } from '../context/DarkModeContext'
import { FcMenu } from "react-icons/fc"
import { useNavigationMenu } from '../context/NavigationMenuContext'
import { FiSun, FiMoon } from 'react-icons/fi'
import { Link } from 'gatsby'
import logo from '../images/logo.png'
import { Solrock, Lunatone } from '../assets/icons'

export function Navbar() {
    const { isDark, theme, toggleDarkMode } = useDarkMode()
    const { toggleNav } = useNavigationMenu()

    return (
        <NavbarBs bg={theme} variant={theme} className="shadow-sm mb-3">
            <Container>
                <Button onClick={toggleNav}>
                    <FcMenu className='ch-color' color="white" size="1.4em" />
                </Button>
                <Link to="/" className='fs-3 mb-0'>
                    <img style={{ width: '2em' }} src={logo} alt="Logo di PokeMMO Guides - Grazie a Joe Kotlan" />
                </Link>
                <Button className="p-0" onClick={toggleDarkMode} variant={isDark ? 'light' : 'dark'}>
                    {
                        <img src={isDark ? Solrock : Lunatone} style={{ height: '2.3rem', width: '2.3rem' }} />
                    }
                </Button>
            </Container>
        </NavbarBs>
    )
}
