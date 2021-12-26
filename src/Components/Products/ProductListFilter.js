import React from "react"
import { Form } from "react-bootstrap"
import { useSelector, useDispatch } from 'react-redux'
import { filterrun } from '../../Services/Redux/counterSlice'


export default function ProductListFilter(props) {
  const filterGroup1 = useSelector((state) => state.counter.filterGroup1);
  const dispatch = useDispatch()
  function filterLauncher(e){
    console.log(e.target.value);
    dispatch(filterrun({ payload: e.target.value }));
    
  }
  
  return (
    <div className="p-1">
      <div className="brand-container ">
        
        <div>
          <b>Kategoriler</b>
        </div>
       
         {


filterGroup1.forEach(function(value, key) {
  <Form.Check type="checkbox"  onClick={(e) => filterLauncher(e)}
  label={key} value={key} />
})

}
      </div>

    </div>
  );
}
/* 
filterGroup1.forEach((value, key) => {
  <Form.Check type="checkbox"  onClick={(e) => filterLauncher(e)}
  label={key} value={key} />
 } )
  }
  */
