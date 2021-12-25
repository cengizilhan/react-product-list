import React from 'react'
import { bindActionCreators } from 'redux'
import { decreaseCounter } from '../../Redux/Actions/counterActions'
import { connect } from 'react-redux'

function DecreaseCounter(props) {
    return (
        <div>
              <button onClick={e => {
                props.dispatch(decreaseCounter())
            }}>decrease</button>
        </div>
    )
}


function mapDistpatchToProps(dispatch) {
    return { actions: bindActionCreators(decreaseCounter, dispatch) }
}

export default connect(mapDistpatchToProps)(DecreaseCounter);

