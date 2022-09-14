import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';
import { Stack } from 'react-bootstrap';
import { EggGroup } from '../../components/Pokedex/EggGroup';
import { usePokedex } from '../../context/PokedexContext';
import { useCatchRate } from '../../hooks/useCatchRate';
import { Button, Card, Typography } from '../Atoms';
import { CatchResults } from './CatchResults';
import { PokemonActionBar } from './PokemonActionBar';
import { PokemonLocations } from './PokemonLocations';
import { PokemonBaseStats } from './PokemonBaseStats';

export const PokemonSection = ({ children, show, title }) => {
    return (
        <div style={{ maxHeight: show ? 300 : 0, overflow: 'scroll', transition: '.3s' }}>
            <div className="border-top"></div>
            <div className='p-2'>
                <Typography className="pt-2" as="h3">{title}</Typography>
                {children}
            </div>
        </div>
    )
}

export const PokemonItem = (pokemon) => {
    const { id, name, held, group, locations, sprite, catchRate, stats } = pokemon;
    const { filters, TABS } = usePokedex()
    const [activeTab, setActiveTab] = useState(filters.allLocations)

    const toggleTab = tabId => setActiveTab(prev => prev !== tabId ? tabId : '')


    useEffect(() => {
        setActiveTab(filters.activeTab)
    }, [filters])
    const [isLVU, setIsLVU] = useState(0)
    const catchResults = useCatchRate(catchRate, stats.hp);

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
                            <PokemonActionBar
                                onClick={tabId => toggleTab(tabId)}
                                active={activeTab}
                                {...pokemon}
                            />
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
                        <PokemonSection show={activeTab === TABS.LOCATION ? true : false} title="Locations">
                            <PokemonLocations
                                locations={locations}
                            />
                        </PokemonSection>
                    </>
                    : false
            }
            {
                <>
                    <PokemonSection show={activeTab === TABS.CATCH_RATE ? true : false} title="Catch rate">
                        <CatchResults
                            results={catchResults}
                        />
                    </PokemonSection>
                    <PokemonSection
                        show={activeTab === TABS.STATS ? true : false}
                        title="Base Stats">
                        <PokemonBaseStats {...stats} />
                    </PokemonSection>
                </>
            }
        </Card>
    )
}