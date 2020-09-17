import {CREATE_BLOG} from './createBlogTypes'


const initialState = { 
    blogTitle: '',
    blogContent: ''
}

const createBlog = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_BLOG:
            return {
                ...state,
                blogTitle: state.value,
                blogContent: state.value
            }
        default: return state
    }
}

export default createBlog