import React from 'react'
import { createContext, useContext, useState } from "react";
import { Navbar } from "../components/Navbar";
import { NavigationMenu } from '../components/NavigationMenu'
import { graphql, useStaticQuery } from 'gatsby';

const NavigationMenuContext = createContext({
    posts: [],
    toggleNav: () => null,
    pageName: 'Homepage',
    setPageName: () => null
})

export function useNavigationMenu() {
    return useContext(NavigationMenuContext)
}

export function NavigationMenuProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [pageName, setPageName] = useState('Homepage');

    const toggleNav = () => setIsOpen(prev => !prev)
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
                edges {
                    node {
                        id
                        tableOfContents
                        frontmatter {
                            date(formatString: "MMMM DD, YYYY")
                            slug
                            title
                            category
                            tags
                            menuTitle
                            excerpt
                        }
                    }
                }
            }
        }
    `)
    const posts = data.allMarkdownRemark.edges;

    return (
        <NavigationMenuContext.Provider value={{ posts, toggleNav, pageName, setPageName }}>
            <NavigationMenu show={isOpen} handleClose={toggleNav} />
            <Navbar />
            {children}
        </NavigationMenuContext.Provider>
    )
}