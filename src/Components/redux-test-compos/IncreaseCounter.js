import React from 'react'
import { bindActionCreators } from 'redux'
import { increaseCounter } from '../../Redux/Actions/counterActions'
import { connect } from 'react-redux'

 function IncreaseCounter(props) {
    return (
        <div>
            <button onClick={e => {
                props.dispatch(increaseCounter())
            }}>increase</button>
        </div>
    )
}

function mapDistpatchToProps(dispatch) {
    return { actions: bindActionCreators(increaseCounter, dispatch) }
}

export default connect(mapDistpatchToProps)(IncreaseCounter);
