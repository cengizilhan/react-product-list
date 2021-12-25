import React from 'react'
import {connect} from "react-redux"

function Counter(props) {
    return (
        <div>
            <h1>{props.counter}</h1>
        </div>
    )
}


function mapStateToProps(state){
    return {counter:state.counterReducer}
}
export default connect(mapStateToProps)
(Counter)


