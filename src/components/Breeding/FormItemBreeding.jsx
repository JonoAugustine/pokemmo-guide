import React from 'react'
import { Form } from 'react-bootstrap'

export function FormItemBreeding({ id, ivCount, defaultValue, ...props }) {
    return (
        <Form.Group controlId={id} {...props}>
            <Form.Text className="text-muted">
                <span className='fw-bold text-dark fs-5 d-inline-block me-2'>{ivCount}</span>
                1x31 IV in...
            </Form.Text>
            <Form.Select defaultValue={defaultValue} disabled={!ivCount}>
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
