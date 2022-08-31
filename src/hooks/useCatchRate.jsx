import { useEffect, useState } from 'react'

const BALLS = [
    {
        name: 'pokeball',
        rate: 1
    },
    {
        name: 'megaball',
        rate: 1.5
    },
    {
        name: 'ultraball',
        rate: 2
    },
    {
        name: 'bisball',
        rate: 2.5
    }
]

const STATUSES = [
    {
        name: null,
        rate: 1
    },
    {
        name: 'sleep',
        rate: 2.5
    }
]

const calculateCatchRate = (pkmn_rate, max_hp, current_hp, pokeball, status) => {
    const x = (((max_hp * 3 - current_hp * 2) * 1 * pkmn_rate * pokeball.rate) / (max_hp * 3)) * status.rate
    if (x > 255) return { ball: pokeball.name, hp: current_hp, status: status.name, probabilities: 100 }; // Catch guaranteed
    const y = (65536 / (Math.sqrt(Math.sqrt(255 / x))))
    const z = (y / 65536) * (y / 65536) * (y / 65536) * 100
    return { ball: pokeball.name, hp: current_hp, status: status.name, probabilities: Math.round(z * 10) / 10 };
}

export const useCatchRate = (pkmn_rate, max_hp) => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        BALLS.forEach(ball => {
            STATUSES.forEach(status => {
                setResults(prev => [...prev, calculateCatchRate(pkmn_rate, max_hp, max_hp, ball, status)])
                setResults(prev => [...prev, calculateCatchRate(pkmn_rate, max_hp, 1, ball, status)])
            })
        });
    }, [max_hp, pkmn_rate])

    return results;
}