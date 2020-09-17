import { BUY_MEATPIE } from './meatPieTypes'

const initialState = {
    numOfMeatPie : 30
}

const meatPieReducer = (state=initialState, action) => {
    switch(action.type) {
        case BUY_MEATPIE:
            return {
                ...state,
                numOfMeatPie: state.numOfMeatPie - 1 
            }
        default: return state
    }
}

export default meatPieReducer