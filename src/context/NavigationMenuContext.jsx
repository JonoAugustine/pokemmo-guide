import React, { createContext, useContext, useState } from 'react';
import { Navbar } from "../components/Navbar";
import { NavigationMenu } from '../components/NavigationMenu';

const NavigationMenuContext = createContext({
    posts: [],
    toggleNav: () => null,
    pageName: 'Homepage',
    setPageName: () => null
})

const NAVIGATION_MENU_ITEMS = {
    GUIDES: [
        {
            label: 'Pickup',
            url: '/guides/make-money-with-pickup'
        }
    ],
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

const POSTS = [
    {
        title: "Making money with Pickup in PokeMMO",
        excerpt: "When you defeat a wild Pokémon and you have a Pokémon with pickup in the first slot of the party, you get a small percentage of grab an item from a pool. The pool of items is not random but it's based on the current route.",
        url: "https://forums.pokemmo.com/index.php?/topic/106742-money-guide-community-pickup-guide-2nd-edition/",
        category: 'guide'
    }
]

export function useNavigationMenu() {
    return useContext(NavigationMenuContext)
}

export function NavigationMenuProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [pageName, setPageName] = useState('Homepage');

    const toggleNav = () => setIsOpen(prev => !prev)

    return (
        <NavigationMenuContext.Provider value={{ toggleNav, pageName, setPageName, NAVIGATION_MENU_ITEMS, POSTS }}>
            <NavigationMenu show={isOpen} handleClose={toggleNav} />
            <Navbar />
            {children}
        </NavigationMenuContext.Provider>
    )
}