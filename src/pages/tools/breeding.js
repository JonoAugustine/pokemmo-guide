import React, { useRef, useState, useEffect } from 'react'
import { Button, Form, Toast, ToastContainer } from 'react-bootstrap'
import { Page } from '../../components/Page'
import { PageTitle } from '../../components/PageTitle'
import { SEO } from '../../components/SEO'
import { FormItemBreeding } from '../../components/Breeding/FormItemBreeding'
import { BreedingList } from '../../components/Breeding/BreedingList'

const Breeding = () => {
    const form = useRef()
    const [isError, setIsError] = useState(false);
    const [ivs, setIvs] = useState(false)

    const startBreeding = () => {
        const ivs = (({ ivs2, ivs11, ivs10, ivs6, ivs22 }) => ({ ivs2, ivs11, ivs10, ivs6, ivs22 }))(form.current);
        if (!isStatsUniq(ivs))
            return setIsError(true);

        const { ivs2, ivs11, ivs10, ivs6, ivs22 } = ivs
        setIvs({
            2: ivs2.value,
            11: ivs11.value,
            10: ivs10.value,
            6: ivs6.value,
            22: ivs22.value
        })
    }

    const isStatsUniq = (ivs) => {
        let values = [];
        for (const key in ivs) {
            if (Object.hasOwnProperty.call(ivs, key)) {
                values.push(ivs[key].value)
            }
        }
        return !values
            .some((value, index, values) => values.indexOf(value) !== index);

    }

    return (
        <Page>
            <PageTitle>Breeding simulator</PageTitle>
            <Form ref={form} className="d-flex mb-3" style={{ gap: '1.5em' }}>
                <FormItemBreeding id="ivs2" defValue='atk' ivCountLabel={'Two'} />
                <FormItemBreeding id="ivs11" defValue='hp' ivCountLabel={'Eleven'} />
                <FormItemBreeding id="ivs10" defValue="spe" ivCountLabel={'Ten'} />
                <FormItemBreeding id="ivs6" defValue="spdef" ivCountLabel={'Six'} />
                <FormItemBreeding id="ivs22" defValue="def" ivCountLabel={'Two'} />
            </Form>
            <Button onClick={startBreeding}>Start breeding</Button>
            {
                ivs ? <BreedingList ivs={ivs}></BreedingList> : null
            }
            <Toast bg="danger" show={isError} onClose={() => setIsError(false)} delay={3000} autohide>
                <Toast.Body>You can't have the same stats in multiple IVs field.</Toast.Body>
            </Toast>
        </Page>
    )
}

export default Breeding

export const Head = () => <SEO title="Breeding Simulator"></SEO>