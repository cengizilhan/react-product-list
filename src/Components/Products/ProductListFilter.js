import React from "react";
import { Form } from "react-bootstrap";
const marks = ["renault", "opel", "ford"];
const categoryArr = ["cat1", "cat2"];

export default function ProductListFilter(props) {
  props = {
    brands: marks,
    category: categoryArr,
  };
  return (
    <div class="p-3">
      <div class="brand-container ">
        <div>
          <b>Markalar</b>
        </div>
        {props.brands.map((x) => (
          <Form.Check type="checkbox" onClick={(e) => {
            e.preventDefault();
            
          }} label={x} />
        ))}
      </div>

      <div class="category-container ">
        <div>
          <b>Kategoriler</b>
        </div>
        {props.category.map((x) => (
          <Form.Check type="checkbox" label={x} />
        ))}
      </div>
    </div>
  );
}
