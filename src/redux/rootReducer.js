import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './icecream/iceCreamReducer'
import meatPieReducer from './meatPie/meatPieReducer'
import createBlogReducer from './creatBlog/createBlogReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    meatPie: meatPieReducer,
    blogPost: createBlogReducer

})

export default rootReducer