import React from "react"
import { DarkModeProvider } from "./src/context/DarkModeContext"
import { NavigationMenuProvider } from './src/context/NavigationMenuContext'

export const wrapRootElement = ({ element }) => (
    <DarkModeProvider>
        <NavigationMenuProvider>
            {element}
        </NavigationMenuProvider>
    </DarkModeProvider>
)