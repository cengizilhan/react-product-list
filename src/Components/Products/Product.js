import { Button, Row, Col, Card } from 'react-bootstrap'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Product.css';

export default function Product(props) {
    return (
        <div className="product-container col-md-6 col-12 col-lg-4">
            <div className="d-flex flex-column border p-3 m-3">
                <img className="prod-img" alt="" src={props.product.image}></img>
                <span>   {props.product.title}</span>
                <span><b>{props.product.price} $</b></span>
            </div>
         
        </div>
    )
}
