import { Link } from 'gatsby'
import React from 'react'
import { Container, Image, Navbar as NavbarBs } from 'react-bootstrap'
import { GiHamburger } from "react-icons/gi"
import { Lunatone, Solrock } from '../assets/icons'
import { useDarkMode } from '../context/DarkModeContext'
import { useNavigationMenu } from '../context/NavigationMenuContext'
import { Button } from './Atoms'
import logo from '../images/logo.png'

export function Navbar() {
    const { isDark, theme, toggleDarkMode } = useDarkMode()
    const { toggleNav } = useNavigationMenu()

    return (
        <NavbarBs bg={theme} variant={theme} className="shadow-sm mb-3">
            <Container>
                <Button onClick={toggleNav} variant="outline-info">
                    <GiHamburger size="1.4em" />
                </Button>
                <Link to="/" className='fs-3 mb-0'>
                    <Image style={{ width: '2em' }} src={logo} alt="Logo di PokeMMO Guides - Thanks to Bunga" />
                </Link>
                <Button className="p-0" onClick={toggleDarkMode} variant={isDark ? 'light' : 'dark'}>
                    {
                        <Image src={isDark ? Solrock : Lunatone} style={{ height: '2.3rem', width: '2.3rem' }} />
                    }
                </Button>
            </Container>
        </NavbarBs>
    )
}
