import React from 'react'
import { Alert, Button } from 'react-bootstrap'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const Information = ({ children, title }) => {
    const [isOpen, setIsOpen] = useLocalStorage('breedingGuideOpen', true);

    return (
        isOpen ?
            <Alert variant="info">
                <Alert.Heading>{title}</Alert.Heading>
                {children}
                <hr />
                <div className="mt-2">
                    <Button variant="outline-primary" onClick={() => setIsOpen(false)}>Close this info</Button>
                </div>
            </Alert>
            : <Button text="light" variant="info" className="mb-3" onClick={() => setIsOpen(true)}>How to use this tool</Button>
    )
}
