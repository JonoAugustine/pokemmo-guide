import React from 'react'
import { useLocalStorage } from "../hooks/useLocalStorage";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const BreedingContext = createContext({})

export function useBreeding() {
    return useContext(BreedingContext)
}

export function BreedingProvider({ children }) {
    const [breds, setBreds] = useLocalStorage('breds', [])
    const [stats, setStats] = useLocalStorage('stats', []);

    const setAsBred = ({ row, col }) => {
        const breds = findTreeBreds({ row, col })
        setBreds(prev => [...prev, ...breds])
    }

    const removeBred = ({ row, col }) => {
        const breds = findTreeBreds({ row, col })
        setBreds(prev => prev.filter(val => breds.includes(val)))
    }

    const findTreeBreds = ({ row, col }) => {
        let breds = [];
        let delta = 1
        breds.push({ row, col })
        for (let i = row - 1; i > 0; i--) {
            delta = delta * 2
            let ending = (col + 1) * delta
            console.log(`delta ${delta} ending ${ending}`);
            for (let j = 0; j < delta; j++) {
                console.log(`row ${i} col ${ending - 1 - j}`)
                breds.push({ row: i, col: ending - 1 - j });
            }
        }
        return breds;
    }

    return (
        <BreedingContext.Provider value={{ breds, setAsBred, removeBred }}>
            {children}
        </BreedingContext.Provider>
    )
}