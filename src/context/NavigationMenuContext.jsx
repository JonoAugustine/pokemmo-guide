import React, { createContext, useContext, useState } from 'react';
import { Footer } from '../components/Footer';
import { Navbar } from "../components/Navbar";
import { NavigationMenu } from '../components/NavigationMenu';
import { Posts } from '../data/posts';

const NavigationMenuContext = createContext({
    posts: [],
    toggleNav: () => null,
    pageName: 'Homepage',
    setPageName: () => null
})

const NAVIGATION_MENU_ITEMS = {
    TOOLS: [
        {
            label: 'Pokedex',
            url: '/tools/pokedex'
        },
        {
            label: 'Breeding Simulator',
            url: '/tools/breeding'
        }
    ],
    EXTERNAL_RESOURCES: [
        {
            label: 'Official Forum',
            url: 'https://forums.pokemmo.com/'
        },
        {
            label: 'PokeMMO Duders Discord',
            url: 'https://discord.com/invite/7DnX2g7kTD'
        },
        {
            label: 'Patrouski Youtube Channel',
            url: 'https://www.youtube.com/c/patrouski/videos'
        },
        {
            label: 'Pokemon Showdown Damage Calculator',
            url: 'https://calc.pokemonshowdown.com/?gen=5'
        },
        {
            label: 'Smogon Competitive Pokemon',
            url: 'https://www.smogon.com/dex/bw/pokemon/'
        }
    ]
}

export function useNavigationMenu() {
    return useContext(NavigationMenuContext)
}

export function NavigationMenuProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [pageName, setPageName] = useState('Homepage');

    const toggleNav = () => setIsOpen(prev => !prev)

    return (
        <NavigationMenuContext.Provider value={{ toggleNav, pageName, setPageName, NAVIGATION_MENU_ITEMS, POSTS: Posts }}>
            <div className='webapp'>
                <NavigationMenu show={isOpen} handleClose={toggleNav} />
                <Navbar />
                {children}
                <Footer />
            </div>
        </NavigationMenuContext.Provider>
    )
}