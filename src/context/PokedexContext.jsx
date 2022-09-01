import React, { createContext, useContext, useState } from 'react';


const DEFAULT_FILTERS = {
    region: false,
    route: false,
    name: '',
    eggGroup: false,
    hasHorde: false
}

const PokedexContext = createContext()

export function usePokedex() {
    return useContext(PokedexContext)
}

export function PokedexProvider({ children }) {

    const [filters, setFilters] = useState(DEFAULT_FILTERS)

    const resetFilters = () => setFilters(DEFAULT_FILTERS)

    return (
        <PokedexContext.Provider value={{ filters, setFilters, resetFilters }}>
            {children}
        </PokedexContext.Provider>
    )
}