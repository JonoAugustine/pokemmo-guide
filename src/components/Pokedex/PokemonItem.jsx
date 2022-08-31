import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'
import { EggGroup } from '../../components/Pokedex/EggGroup'
import { Button, Stack } from 'react-bootstrap';
import { useCatchRate } from '../../hooks/useCatchRate';
import { CatchResults } from './CatchResults';
import { TbPokeball } from 'react-icons/tb';
import { PokemonLocations } from './PokemonLocations';
import { ShowLocationsToggle } from './ShowLocationsToggle';
import { usePokedex } from '../../context/PokedexContext';

export const PokemonItem = ({ id, name, held, group, locations, sprite, catchRate, hp }) => {
    const { filters } = usePokedex()
    const [showLocations, setShowLocations] = useState(filters.showLocationsDefault)

    useEffect(() => {
        setShowLocations(filters.showLocationsDefault)
    }, [filters])
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
                    <Stack gap={2}>
                        <Stack gap={4} direction="horizontal" className='align-items-center'>
                            <h4 className="mb-0">{isLVU > 16 ? '16/07/11 ❤️' : name}</h4>
                            {
                                locations.length ?
                                    <ShowLocationsToggle
                                        onClick={() => setShowLocations(prev => !prev)}
                                        show={showLocations}
                                    />
                                    : false
                            }
                        </Stack>
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
                locations.length
                    ? <>
                        <PokemonLocations locations={locations} show={showLocations} onClose={() => setShowLocations(prev => !prev)} />
                        <CatchResults results={catchResults} />
                    </>
                    : false
            }
        </div>
    )
}