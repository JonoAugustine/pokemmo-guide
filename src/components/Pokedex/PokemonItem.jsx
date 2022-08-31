import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';
import { Stack } from 'react-bootstrap';
import { EggGroup } from '../../components/Pokedex/EggGroup';
import { useCatchRate } from '../../hooks/useCatchRate';
import { Button, Card, Typography } from '../Atoms';
import { CatchResults } from './CatchResults';
import { PokemonLocations } from './PokemonLocations';
import { ShowLocationsToggle } from './ShowLocationsToggle';

export const PokemonItem = ({ id, name, held, group, locations, sprite, catchRate, hp, toggleLocationsAll }) => {
    const [showLocations, setShowLocations] = useState(toggleLocationsAll)

    useEffect(() => {
        setShowLocations(toggleLocationsAll)
    }, [toggleLocationsAll])
    const [isLVU, setIsLVU] = useState(0)
    const catchResults = useCatchRate(catchRate, hp);

    const lvu = () => parseInt(id) === 16 ? setIsLVU(prev => prev + 1) : null

    return (
        <Card className="mb-3 rounded">
            <Stack direction="horizontal" gap={3} className="p-2">
                {id === 16
                    ? <Button
                        style={{ padding: 0, border: 0 }}
                        variant="link"
                        onClick={() => lvu()}
                    >
                        <GatsbyImage style={{ maxWidth: '80px' }} image={sprite.node.childImageSharp.gatsbyImageData} alt={name} />
                    </Button>
                    : <GatsbyImage style={{ maxWidth: '80px' }} image={sprite.node.childImageSharp.gatsbyImageData} alt={name} />}
                <Stack gap={1} style={{ justifyContent: 'center' }}>
                    <Stack gap={2}>
                        <Stack gap={4} direction="horizontal" className='align-items-center'>
                            <Typography as="h4" className="mb-0">{isLVU > 16 ? '16/07/11 ❤️' : name}</Typography>
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
                    <Typography className='mb-0'>Item held: <b>{held.length ? held.join(', ') : 'None'}</b></Typography>
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
        </Card>
    )
}