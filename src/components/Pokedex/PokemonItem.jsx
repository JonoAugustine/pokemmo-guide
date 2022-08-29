import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import { EggGroup } from '../../components/Pokedex/EggGroup'
import { Stack } from 'react-bootstrap';


export const PokemonItem = ({ id, name, held, group, locations, sprite }) => {
    const [isLVU, setIsLVU] = useState(0)

    const lvu = () => id == 16 ? setIsLVU(prev => prev + 1) : null

    return (
        <Stack direction="horizontal" gap={3} className="mb-3 p-2 border rounded">
            <div onClick={() => lvu()}>
                <GatsbyImage image={sprite.node.childImageSharp.gatsbyImageData} alt={name} onClick={() => { lvu() }} />
            </div>
            <Stack gap={1} style={{ justifyContent: 'center' }}>
                <Stack direction="horizontal" gap={2}>
                    <h4 className="mb-0">{isLVU > 16 ? '16/07/11 ❤️' : name}</h4>
                    {group.map(item => <EggGroup id={item.toLowerCase().replace(' ', '-')}>{item}</EggGroup>)}
                </Stack>
                <p className='mb-0'>Item held: <b>{held.length ? held.join(', ') : 'None'}</b></p>
            </Stack>
        </Stack>
    )
}