import React, {
    useState
} from 'react'
import { createContext, useContext } from "react";


const DEFAULT_FILTERS = {
    region: false,
    route: false,
    name: '',
    eggGroup: false,
    hasHorde: false,
    showLocationsDefault: false
}

const PokedexContext = createContext()

export function usePokedex() {
    return useContext(PokedexContext)
}

export function PokedexProvider({ children }) {

    const [filters, setFilters] = useState(DEFAULT_FILTERS)

    return (
        <PokedexContext.Provider value={{ filters, setFilters }}>
            {children}
        </PokedexContext.Provider>
    )
}