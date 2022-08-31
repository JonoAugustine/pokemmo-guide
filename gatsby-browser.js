import React from "react"
import { BreedingProvider } from "./src/context/BreedingContext"
import { DarkModeProvider } from "./src/context/DarkModeContext"
import { NavigationMenuProvider } from './src/context/NavigationMenuContext'
import { PokedexProvider } from "./src/context/PokedexContext"

import "./src/global.css"

export const wrapRootElement = ({ element }) => (
    <DarkModeProvider>
        <NavigationMenuProvider>
            <BreedingProvider>
                <PokedexProvider>
                    {element}
                </PokedexProvider>
            </BreedingProvider>
        </NavigationMenuProvider>
    </DarkModeProvider>
)