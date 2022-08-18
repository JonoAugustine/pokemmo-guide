import React, { useRef, useState } from 'react'
import { Button, ButtonGroup, Card, Form, Toast } from 'react-bootstrap'
import { Page } from '../../components/Page'
import { PageTitle } from '../../components/PageTitle'
import { SEO } from '../../components/SEO'
import { FormItemBreeding } from '../../components/Breeding/FormItemBreeding'
import { BreedingList } from '../../components/Breeding/BreedingList'
import { useBreeding } from '../../context/BreedingContext'
import { Text } from '../../components/Text'

const Breeding = () => {
    const form = useRef()
    const [isError, setIsError] = useState(false);
    const { breedingConfig, setBreedingConfig, clearBreeding, BREEDING_FORM_VALUES } = useBreeding();
    if (!breedingConfig) return;

    const startBreeding = () => {
        const ivs = (({ iv1, iv2, iv3, iv4, iv5 }) => ({ iv1, iv2, iv3, iv4, iv5 }))(form.current);
        if (!isStatsUniq(ivs))
            return setIsError(true);

        const { iv1, iv2, iv3, iv4, iv5 } = ivs
        setBreedingConfig(prev => (
            {
                ...prev,
                isBreeding: true,
                iv: {
                    1: !iv1.disabled ? iv1.value : false,
                    2: !iv2.disabled ? iv2.value : false,
                    3: !iv3.disabled ? iv3.value : false,
                    4: !iv4.disabled ? iv4.value : false,
                    5: !iv5.disabled ? iv5.value : false,
                }
            }
        ));
    }

    const onClear = () => {
        clearBreeding();
        form.current.iv1.value = 'hp'
        form.current.iv2.value = 'atk'
        form.current.iv3.value = 'def'
        form.current.iv4.value = 'spdef'
        form.current.iv5.value = 'spe'
    }

    const isStatsUniq = (ivs) => {
        let values = [];
        for (const key in ivs) {
            if (Object.hasOwnProperty.call(ivs, key)) {
                if (!ivs[key].disabled) {
                    values.push(ivs[key].value)
                }
            }
        }
        return !values
            .some((value, index, values) => values.indexOf(value) !== index);

    }

    const updateIVsCount = count => setBreedingConfig(prev => ({ ...prev, ivsCount: count, isBreeding: false }))

    const breedingIVsRequested = breedingConfig.nature
        ? BREEDING_FORM_VALUES.nature.iv[breedingConfig.ivsCount]
        : BREEDING_FORM_VALUES.random.iv[breedingConfig.ivsCount]

    const totalPokemonReq = breedingIVsRequested.reduce((total, curr) => total + curr, 0)
    const costsTable = {
        nature: {
            iv: {
                2: 75000,
                3: 170000,
                4: 355000,
                5: 715000
            }
        },
        random: {
            iv: {
                2: 20000,
                3: 65000,
                4: 155000,
                5: 340000
            }
        }
    }
    const expectedPrice = breedingConfig.nature
        ? costsTable.nature.iv[breedingConfig.ivsCount]
        : costsTable.random.iv[breedingConfig.ivsCount]


    return (
        <Page>
            <PageTitle>Breeding simulator</PageTitle>
            <Form ref={form} className="d-flex mb-3 flex-column" style={{ gap: '.5rem' }}>
                <div className='d-flex' style={{ gap: '1rem' }}>
                    <div className='d-flex flex-column' style={{ gap: '.3rem' }}>
                        <Form.Text className="text-muted">How many IVs do you want?</Form.Text>
                        <ButtonGroup aria-label="Basic example">
                            <Button disabled={breedingConfig.ivsCount === 2} onClick={() => updateIVsCount(2)}>2</Button>
                            <Button disabled={breedingConfig.ivsCount === 3} onClick={() => updateIVsCount(3)}>3</Button>
                            <Button disabled={breedingConfig.ivsCount === 4} onClick={() => updateIVsCount(4)}>4</Button>
                            <Button disabled={breedingConfig.ivsCount === 5} onClick={() => updateIVsCount(5)}>5</Button>
                        </ButtonGroup>
                    </div>
                    <div className="d-flex flex-column" style={{ gap: '.3rem' }}>
                        <Form.Text className='text-muted'>Consider nature in breeding project?</Form.Text>
                        <Form.Check
                            type="switch"
                            id="nature"
                            checked={breedingConfig.nature}
                            onChange={() => setBreedingConfig(prev => ({ ...prev, nature: !prev.nature }))}
                        />
                    </div>
                </div>
                <div className='d-flex' style={{ gap: '1.5rem' }}>
                    {
                        breedingIVsRequested.map((count, i) => {
                            let index = i + 1;
                            return (
                                <FormItemBreeding
                                    id={`iv${index}`}
                                    defaultValue={
                                        breedingConfig.iv[index] || 'hp'
                                    }
                                    ivCount={count}
                                    className={count === 0 ? 'd-none' : null}
                                />
                            )
                        })
                    }
                </div>
            </Form>
            <Card body className="my-3">
                For this Pokémon you will spend <Text highlight>{expectedPrice}$</Text> and you may need <Text highlight>{totalPokemonReq}</Text> Pokémons.
            </Card>
            <div className='d-flex' style={{ gap: '1rem' }}>
                <Button onClick={startBreeding}>Start breeding</Button>
                <Button variant='outline-danger' onClick={onClear}>Clear</Button>
            </div>
            {
                breedingConfig.isBreeding ? <BreedingList></BreedingList> : null
            }
            <Toast bg="danger" show={isError} onClose={() => setIsError(false)} delay={3000} autohide>
                <Toast.Body>You can't have the same stats in multiple IVs field.</Toast.Body>
            </Toast>
        </Page>
    )
}

export default Breeding

export const Head = () => <SEO title="Breeding Simulator"></SEO>