import React, { createContext, useContext } from 'react';
import { useLocalStorage } from "../hooks/useLocalStorage";

const DEFAULT_BREDS = []
const DEFAULT_BREEDING_CONFIG = {
    ivsCount: 5,
    nature: false,
    isBreeding: false,
    iv: {}
}
const BREEDING_FORM_VALUES = {
    nature: {
        iv: {
            5: [2, 11, 10, 6, 2],
            4: [6, 5, 3, 1, 0],
            3: [4, 2, 1, 0, 0],
            2: [2, 1, 0, 0, 0],
            1: [1, 0, 0, 0, 0]
        }
    },
    random: {
        iv: {
            5: [2, 5, 5, 3, 1],
            4: [2, 3, 2, 1, 0],
            3: [2, 1, 1, 0, 0],
            2: [1, 1, 0, 0, 0]
        }
    }
}

const BreedingContext = createContext({
    breds: DEFAULT_BREDS,
    setAsBred: () => null,
    removeBred: () => null,
    clearBreeding: () => null,
    breedingConfig: DEFAULT_BREEDING_CONFIG,
    setBreedingConfig: () => null,
    BREEDING_FORM_VALUES
})

export function useBreeding() {
    return useContext(BreedingContext)
}

export function BreedingProvider({ children }) {

    const [breds, setBreds] = useLocalStorage('breds', DEFAULT_BREDS)
    const [breedingConfig, setBreedingConfig] = useLocalStorage('breedingConfig', DEFAULT_BREEDING_CONFIG);

    const setAsBred = ({ row, col }) => {
        const breds = findTreeBreds({ row, col })
        setBreds(prev => [...prev, ...breds])
    }

    const removeBred = ({ row, col }) => {
        const breds = findTreeBreds({ row, col })
        setBreds(prev => prev.filter(({ row, col }) => {
            return !breds.some(bred => bred.row === row && bred.col === col)
        }))
    }

    const findTreeBreds = ({ row, col }) => {
        let breds = [];
        let delta = 1
        breds.push({ row, col })
        for (let i = row - 1; i > 0; i--) {
            delta = delta * 2
            let ending = (col + 1) * delta
            for (let j = 0; j < delta; j++) {
                breds.push({ row: i, col: ending - 1 - j });
            }
        }
        return breds;
    }
    const clearBreeding = () => {
        setBreds(DEFAULT_BREDS)
        setBreedingConfig(DEFAULT_BREEDING_CONFIG)
    }

    return (
        <BreedingContext.Provider value={{ breds, setAsBred, removeBred, clearBreeding, breedingConfig, setBreedingConfig, BREEDING_FORM_VALUES }}>
            {children}
        </BreedingContext.Provider>
    )
}