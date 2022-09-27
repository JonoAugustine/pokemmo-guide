import React, { useMemo, useState } from 'react'
import { useEffect } from 'react'
import { Form, Spinner } from 'react-bootstrap'
import { usePokedex } from '../../context/PokedexContext'
import { pokedex } from '../../data/pokedex'
import { useDelay } from '../../hooks/useDelay'
import { Button, Typography } from '../Atoms'
import { ActionToggler } from './ActionToggler'


const getAllFilterableValues = () => {
    const data = pokedex.reduce((prev, curr) => {
        prev.eggGroup = [...prev.eggGroup, ...curr.group]

        if (!curr.locations.length) return prev;
        curr.locations.forEach(item => {
            prev.regions[item.region].push(item.route.split('(')[0])
        })
        return prev;
    }, { regions: { kanto: [], hoenn: [], unova: [], sinnoh: [] }, eggGroup: [] })

    const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

    return {
        regions: {
            kanto: [...new Set(data.regions.kanto)].sort(collator.compare),
            hoenn: [...new Set(data.regions.hoenn)].sort(collator.compare),
            unova: [...new Set(data.regions.unova)].sort(collator.compare),
            sinnoh: [...new Set(data.regions.sinnoh)].sort(collator.compare)
        },
        eggGroups: [...new Set(data.eggGroup)].sort(collator.compare)
    }
}

export const PokedexFilters = () => {
    const { regions, eggGroups } = useMemo(() => getAllFilterableValues(), [])
    const { filters, setFilters, resetFilters, TABS } = usePokedex()
    const [name, setName] = useState('')
    const [isSearching, doneSearching] = useDelay(150)

    useEffect(() => {
        doneSearching(() => setFilters(prev => ({ ...prev, name })));
    }, [name])

    useEffect(() => {
        setFilters(prev => ({ ...prev, route: false }))
    }, [filters.region])

    if (!filters) return;

    return (
        <div className='mb-5'>
            <Form className="mb-1" onSubmit={e => e.preventDefault()}>
                <div className="d-flex mb-2" style={{ gap: '1rem' }}>
                    <Form.Group controlId='region' className="position-relative">
                        <Form.Text>
                            Name
                        </Form.Text>
                        <Form.Control
                            value={name}
                            type="text"
                            placeholder="Pokemon Name"
                            onChange={({ target }) => setName(target.value)}
                        />
                        <div className="position-absolute" style={{ right: 10, bottom: 6, display: isSearching ? 'initial' : 'none' }} >
                            <Spinner animation="border" role="status" variant="info" size="sm">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    </Form.Group>
                    <Form.Group controlId='region'>
                        <Form.Text>
                            Region
                        </Form.Text>
                        <Form.Select value={filters.region} onChange={({ target }) => setFilters(prev => ({ ...prev, region: target.value !== 'false' ? target.value : false }))}>
                            <option value={false}>Select a region</option>
                            {Object.keys(regions).map(region => <option key={region} value={region}>{region}</option>)}
                        </Form.Select>
                    </Form.Group>
                    {
                        filters.region
                            ? <Form.Group controlId="routes">
                                <Form.Text>Routes</Form.Text>
                                <Form.Select value={filters.route} onChange={({ target }) => setFilters(prev => ({ ...prev, route: target.value !== 'false' ? target.value : false }))}>
                                    <option value={false}>Select a route</option>
                                    {regions[filters.region]?.map(item => <option key={item} value={item}>{item}</option>)}
                                </Form.Select>
                            </Form.Group>
                            : false
                    }
                    <Form.Group>
                        <Form.Text>Egg Group</Form.Text>
                        <Form.Select value={filters.eggGroup} onChange={({ target }) => setFilters(prev => ({ ...prev, eggGroup: target.value !== 'false' ? target.value : false }))}>
                            <option value={false}>Select an Egg Group</option>
                            {eggGroups.map(item => <option key={item} value={item}>{item}</option>)}
                        </Form.Select>
                    </Form.Group>
                </div>
                <div>
                    <Form.Group>
                        <div>
                            <Form.Text>Filter by encounter type</Form.Text>
                        </div>
                        <Form.Check
                            inline
                            name="encounter-type"
                            type='radio'
                            id="all"
                            label="All"
                            onChange={({ target }) => setFilters(prev => ({ ...prev, hasHorde: false, isPheno: false }))}
                        />
                        <Form.Check
                            inline
                            name="encounter-type"
                            type='radio'
                            id="hasHorde"
                            label="Horde"
                            onChange={({ target }) => setFilters(prev => ({ ...prev, hasHorde: true, isPheno: false }))}
                        />
                        <Form.Check
                            inline
                            name="encounter-type"
                            type='radio'
                            id="isPheno"
                            label="Phenomena"
                            onChange={({ target }) => setFilters(prev => ({ ...prev, hasHorde: false, isPheno: true }))}
                        />
                    </Form.Group>
                </div>
            </Form>
            <div className="d-flex mt-3 flex-wrap" style={{ gap: '.5rem' }}>
                <ActionToggler
                    size="md"
                    title="locations"
                    onClick={() => setFilters(prev => ({ ...prev, activeTab: prev.activeTab !== TABS.LOCATION ? TABS.LOCATION : false }))}
                />
                <ActionToggler
                    size="md"
                    title="catch rates"
                    onClick={() => setFilters(prev => ({ ...prev, activeTab: prev.activeTab !== TABS.CATCH_RATE ? TABS.CATCH_RATE : false }))}
                />
                <ActionToggler
                    size="md"
                    title="stats"
                    onClick={() => setFilters(prev => ({ ...prev, activeTab: prev.activeTab !== TABS.STATS ? TABS.STATS : false }))}
                />
                <Button variant="outline-danger" onClick={resetFilters}>Clear filters</Button>
            </div>
        </div>
    )
}
