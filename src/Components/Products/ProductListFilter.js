import React from "react"
import { Form } from "react-bootstrap"
import { useSelector, useDispatch } from 'react-redux'
import { filterrun, } from '../../Services/Redux/filterSlice'


export default function ProductListFilter(props) {
  const filterGroup1 = useSelector((state) => state.counter.filterGroup1);
  const dispatch = useDispatch()
  function filterLauncher(e){
    //dispatch(filterGroup1());
    
    console.log(e.target.value);
    dispatch(filterrun({ payload: e.target.value }));
    
  }
  
  return (
    <div className="p-1">
      <div className="brand-container ">
        
        <div>
          <b>Kategoriler</b>
        </div>
        {filterGroup1.map((x) => (
          (
          <Form.Check type="checkbox"  onChange={(e) => filterLauncher(e)}
           label={x.categoryname}  key={x.categoryid} />
           )
        ))}
        
      </div>

    </div>
  );
}

