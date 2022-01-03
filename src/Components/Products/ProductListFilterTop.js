import React from 'react'
import { Form, FormGroup, FormLabel, FormSelect } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { sortingName, sortingPrice } from '../../Services/Redux/filterSlice'

//react-bootstrap ınput import edilmiyor


export default function ProductListFilterTop() {
    const dispatch = useDispatch()
    function sorter(e) {
        let text = e.target.value;
        const myArray = text.split("-"); //sortingName-asc
        const sortName = myArray[0];
        const sortType = myArray[1];
        switch (sortName) {
            case "sortingName":
                dispatch(sortingName({ payload: sortType }));
                break;
            case "sortingPrice":
                dispatch(sortingPrice({ payload: sortType }));
                break;
            default:
                break;
        }



    }
    //soldan filtre atılınca sıralama default'a çekilecek

    return (
        <div className='container mt-3 col-md-3'>
            <FormSelect type="select" onChange={(e) => sorter(e)} >
                <option>
                    Sort By Default
                </option>
                <option name="sortingName" value="sortingName-asc">
                    Product Name A-Z
                </option>
                <option name="sortingName" value="sortingName-desc">
                    Product Name Z-A
                </option>
                <option name="sortingPrice" value="sortingPrice-asc">
                    Product Price 1-9
                </option>
                <option name="sortingPrice" value="sortingPrice-desc">
                    Product Price 9-1
                </option>
            </FormSelect>

        </div>
    )
}
