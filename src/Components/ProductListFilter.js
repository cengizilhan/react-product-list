import React from 'react'
import { Form, Button, Nav, Container,Navbar } from 'react-bootstrap'

export default function ProductListFilter() {
    return (
        <div class="p-3">
        
            
            <div class="brand-container borde">
                <div><b>Markalar</b></div>
            
                Filtrele textbox
            <Form.Check type="checkbox" label="Marka 1" />
            <Form.Check type="checkbox" label="Marka 2" />
            </div>

 

        </div>
    )
}
