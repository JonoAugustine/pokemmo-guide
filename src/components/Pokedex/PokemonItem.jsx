import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import { EggGroup } from '../../components/Pokedex/EggGroup'
import { Stack } from 'react-bootstrap';
import { useCatchRate } from '../../hooks/useCatchRate';
import { CatchResults } from './CatchResults';

export const PokemonItem = ({ id, name, held, group, locations, sprite, catchRate, hp }) => {
    const [isLVU, setIsLVU] = useState(0)
    const catchResults = useCatchRate(catchRate, hp);

    const lvu = () => id == 16 ? setIsLVU(prev => prev + 1) : null

    return (
        <div className="mb-3 border rounded">
            <Stack direction="horizontal" gap={3} className="p-2">
                <div onClick={() => lvu()}>
                    <GatsbyImage style={{ maxWidth: '80px' }} image={sprite.node.childImageSharp.gatsbyImageData} alt={name} onClick={() => { lvu() }} />
                </div>
                <Stack gap={1} style={{ justifyContent: 'center' }}>
                    <Stack direction="vertical" gap={2}>
                        <h4 className="mb-0">{isLVU > 16 ? '16/07/11 ❤️' : name}</h4>
                        <Stack direction="horizontal" gap={2}>
                            {
                                group.map(item => <EggGroup key={item.toLowerCase().replace(' ', '-')} id={item.toLowerCase().replace(' ', '-')}>{item}</EggGroup>)
                            }
                        </Stack>
                    </Stack>
                    <p className='mb-0'>Item held: <b>{held.length ? held.join(', ') : 'None'}</b></p>
                </Stack>
            </Stack>
            {
                locations.length ? <CatchResults results={catchResults} /> : false
            }
        </div>
    )
}