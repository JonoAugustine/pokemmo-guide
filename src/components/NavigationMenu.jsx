import React from 'react'
import { Offcanvas, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink } from './NavLink';
import { useNavigationMenu } from '../context/NavigationMenuContext'

export function NavigationMenu({ show, handleClose }) {
    const { posts } = useNavigationMenu();
    return (
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Pokemmo Guides</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav variant='pills' className="flex-column" onSelect={handleClose}>
                    <Nav.Item className='mb-2'>Making money</Nav.Item>
                    {
                        posts
                            .filter(item => item.node.frontmatter.tags.includes('money'))
                            .map(({ node }) => <NavLink onClick={handleClose} key={node.id} to={node.frontmatter.slug}>{node.frontmatter.menuTitle}</NavLink>)
                    }
                    <Nav.Item className='mt-3 mb-2'>Utility Pokemon</Nav.Item>
                    {
                        posts
                            .filter(item => item.node.frontmatter.tags.includes('utility-pokemon'))
                            .map(({ node }) => <NavLink onClick={handleClose} key={node.id} to={node.frontmatter.slug}>{node.frontmatter.menuTitle}</NavLink>)
                    }
                    <Nav.Item className='mt-3 mb-2'>Useful resources</Nav.Item>
                    <NavLink target="_blank" to="https://forums.pokemmo.com/">Official Forum</NavLink>
                    <NavLink target="_blank" to="#">PokeMMO Duders Discord</NavLink>
                    <NavLink target="_blank" to="https://www.youtube.com/c/patrouski/videos" >Patrouski Youtube Channel</NavLink>
                </Nav>
            </Offcanvas.Body>
        </Offcanvas>
    )
}