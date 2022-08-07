import React from 'react'
import { Form } from 'react-bootstrap'

export function FormItemBreeding({ id, ivCountLabel, defValue }) {
    return (
        <Form.Group controlId={id}>
            <Form.Text className="text-muted">{ivCountLabel} 1x31 IV in...</Form.Text>
            <Form.Select defaultValue={defValue}>
                <option value="hp">HP</option>
                <option value="atk">Attack</option>
                <option value="spatk">Sp. Attack</option>
                <option value="def">Defense</option>
                <option value="spdef">Sp. Defense</option>
                <option value="spe">Speed</option>
            </Form.Select>
        </Form.Group>
    )
}
