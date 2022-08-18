import React from "react"
import { BreedingProvider } from "./src/context/BreedingContext"
import { DarkModeProvider } from "./src/context/DarkModeContext"
import { NavigationMenuProvider } from './src/context/NavigationMenuContext'

export const wrapRootElement = ({ element }) => (
    <DarkModeProvider>
        <NavigationMenuProvider>
            <BreedingProvider>
                {element}
            </BreedingProvider>
        </NavigationMenuProvider>
    </DarkModeProvider>
)