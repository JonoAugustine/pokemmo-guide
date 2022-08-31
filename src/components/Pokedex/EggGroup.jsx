import React from 'react'
import { Image } from 'react-bootstrap'
import { EggIcon } from '../../assets/icons'
import * as pokedexStyle from "./pokedex.module.css"

const EGG_GROUP_COLORS = {
    "monster": '#775544',
    "water-a": '#66ccff',
    "bug": '#aabb22',
    "flying": '#8899ff',
    "field": '#ddbb55',
    "fairy": '#ee99ee',
    "plant": '#77cc55',
    "humanoid": '#bb5544',
    "mineral": '#bbaa67',
    "water-c": '#3399ff',
    "chaos": '#7070bf',
    "water-b": '#4d9ec6',
    "ditto": '#cabbd7',
    "dragon": '#7766ed',
    "cannot-breed": '#ebf0ed',
    "genderless": '#cbe7e8',
}

export const EggGroup = ({ id, children }) => {
    return (
        <div
            className={`px-2 py-1 rounded d-flex align-items-center ${pokedexStyle[id]}`}
            style={{ backgroundColor: EGG_GROUP_COLORS[id], width: 'auto', textAlign: 'center', gap: '.5rem' }}
        >
            <Image src={EggIcon} style={{ height: '1rem' }} />
            {children}
        </div>
    )
}
