import React, { useRef, useState } from 'react'
import { ButtonGroup, Form, Toast as ToastBS } from 'react-bootstrap'
import { Button, Card, Toast, Typography } from '../../components/Atoms'
import { BreedingList } from '../../components/Breeding/BreedingList'
import { FormItemBreeding } from '../../components/Breeding/FormItemBreeding'
import { Information } from '../../components/Information'
import { Page } from '../../components/Page'
import { PageTitle } from '../../components/PageTitle'
import { Seo } from '../../components/SEO'
import { useBreeding } from '../../context/BreedingContext'

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
            <Information title="How to use the breeding tool">
                This tool will help you on making your competitive Pokémon easily. <br />
                Select how many IVs do you want on your Pokémon and choose if you want the nature or not. The calculator will automatically update the required number of 31s required. <br />
                For example, if you want a 2x31 you will need 2 Pokémon 1x31. If you want a 3x31 you will need 2 Pokémon with 2x31 (4 1x31). <br /><br />
                So based on the 1x31 you already have fill the last fields of the calculator. If you want a 5x31 with HP, Atk, Def, Sp.Def and Spe and a nature you'll need 2 1x31 of a specific stat, 11 1x31 of another one, 10 1x31, 6 1x31 and 2 1x31. Fill those fields based on the quantity you have on your boxes. <br />
            </Information>
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
                <div className='d-flex flex-wrap' style={{ gap: '1.5rem' }}>
                    {
                        breedingIVsRequested.map((count, i) => {
                            let index = i + 1;
                            return (
                                <FormItemBreeding
                                    key={i}
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
                For this Pokémon you will spend <Typography highlight>{expectedPrice}$</Typography> and you may need <Typography highlight>{totalPokemonReq}</Typography> Pokémons.
            </Card>
            <div className='d-flex' style={{ gap: '1rem' }}>
                <Button onClick={startBreeding}>Start breeding</Button>
                <Button variant='outline-danger' onClick={onClear}>Clear</Button>
            </div>
            {
                breedingConfig.isBreeding ? <BreedingList></BreedingList> : null
            }
            <Toast bg="danger" show={isError} onClose={() => setIsError(false)} delay={3000} autohide style={{ position: 'fixed', bottom: 25, left: 25 }}>
                <ToastBS.Body>You can't have the same stats in multiple IVs field.</ToastBS.Body>
            </Toast>
        </Page>
    )
}

export default Breeding

export const Head = () => <Seo title="Breeding Simulator"></Seo>