import React from "react";
import Product from "./Product";
import { Toast } from "react-bootstrap";
import ProductListFilter from "./ProductListFilter";
var productArr = require("../../Services/data.json");

export default function ProductList() {
  return (
    <div class="d-flex row m-0">
      <div className="mt-1 plist-filter-container col-md-2">
        <b>plist container</b>
        <ProductListFilter></ProductListFilter>
      </div>

      <div className="productList-container row col-md-10 col-12">
        {productArr.map((x) => (
          <Product product={x} key={x.id}></Product>
        ))}
      </div>
    </div>
  );
}
/*        {
       productArr.map(x=>(
           <div>

               <h6> {x.title} {x.price}$</h6>
           </div>
           ))
   }*/
