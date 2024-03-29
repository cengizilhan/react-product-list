import React from "react";
import Product from "./Product";
import { useSelector, useDispatch } from 'react-redux'
import ProductListFilter from "./ProductListFilter";
import ProductListFilterTop from "./ProductListFilterTop";


export default function ProductList() {
  const productArr = useSelector((state) => state.filter.productList);
  return (
    <div className="container">
      <div><ProductListFilterTop></ProductListFilterTop> </div>
    <div className="d-flex row m-0">
      <div className="mt-1 plist-filter-container col-md-2">
        
        <ProductListFilter></ProductListFilter>
      </div>

      <div className="productList-container row col-md-10 col-12">
        {
        
        productArr.map((x) => (
          <Product product={x} key={x.id}></Product>
        ))}
      </div>
    </div>
    </div>
  );
}
