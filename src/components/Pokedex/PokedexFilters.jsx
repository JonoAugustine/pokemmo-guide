import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Form } from 'react-bootstrap'
import { usePokedex } from '../../context/PokedexContext'
import { pokedex } from '../../data/pokedex'
import { ShowLocationsToggle } from './ShowLocationsToggle'


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
    const { regions, eggGroups } = useMemo(() => getAllFilterableValues(), [pokedex])
    const { filters, setFilters } = usePokedex()

    if (!filters) return;

    return (
        <div className='mb-5'>
            <Form className="mb-2 d-flex" style={{ gap: '1rem' }}>
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
                    typeof filters.region !== "undefined"
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
                <Form.Group>
                    <Form.Text>Show only PKMN which has hordes?</Form.Text>
                    <Form.Check
                        type='checkbox'
                        id="hasHorde"
                        label="Has horde?"
                        onChange={({ target }) => setFilters(prev => ({ ...prev, hasHorde: target.checked }))}
                    />
                </Form.Group>
            </Form>
            <ShowLocationsToggle title="all locations" show={filters.showLocationsDefault} onClick={() => setFilters(prev => ({ ...prev, showLocationsDefault: !prev.showLocationsDefault }))} />
        </div>
    )
}
