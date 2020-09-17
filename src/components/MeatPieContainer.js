import React from 'react'
import { connect } from 'react-redux'
import { buyMeatPie } from '../redux'

function MeatPieContainer (props) {
    return (
        <div>
            <h2>Number of meatpie - {props.numOfMeatPie}</h2>
            <button onClick={props.buyMeatPie}>Buy Ice Cream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfMeatPie: state.meatPie.numOfMeatPie
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyMeatPie: () => dispatch(buyMeatPie())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (MeatPieContainer)
