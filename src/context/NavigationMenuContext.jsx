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
        category: 'guide',
        credits: 'Bestfriends & KaynineXL'
    },
    {
        title: "Optimal PvE Pickup Teddiursa, Munchlax, and Meowth",
        excerpt: "The best moves spread and setup for some useful PvE pokemons with Pickup ability. ",
        url: "https://forums.pokemmo.com/index.php?/topic/146969-optimal-pve-pickup-teddiursa-munchlax-and-meowth/",
        category: 'builds',
        credits: 'DragoTamer'
    },
    {
        title: "Optimal HM Friends (AKA Slaves)",
        excerpt: "This guide thoroughly explains HMs and offers some insight about HM friends, specifically for players who cannot afford—or do not want—to buy Move Ocarinas. It really boils down to a matter of preference.",
        url: "https://forums.pokemmo.com/index.php?/topic/149243-optimal-hm-friends/",
        category: 'builds',
        credits: 'Deomi'
    },
    {
        title: "EV Training Spots guide",
        excerpt: "The best place for farming EVs or Exp. It is recommended that you have full access in all regions. ",
        url: "https://forums.pokemmo.com/index.php?/topic/77490-simple-ev-training-leveling-guide-using-horde/",
        category: 'guide',
        credits: 'Akshit'
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