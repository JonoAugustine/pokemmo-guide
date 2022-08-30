import React from 'react'
import { Alert, Button } from 'react-bootstrap'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const Information = ({ children, title }) => {
    const [breedingHelp, setBreedingHelp] = useLocalStorage('breedingHelp', false);

    return (
        breedingHelp
            ? <Alert variant="info">
                <Alert.Heading>{title}</Alert.Heading>
                {children}
                <hr />
                <div className="mt-2">
                    <Button variant="outline-primary" onClick={() => setBreedingHelp(false)}>Close this info</Button>
                </div>
            </Alert>
            : <Button text="light" variant="info" className="mb-3" onClick={() => setBreedingHelp(true)}>
                How to use this tool
            </Button>
    )
}
