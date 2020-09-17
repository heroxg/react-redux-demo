import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createBlog } from '../redux/creatBlog/createBlogAction'

 function CreateBlog(props){
        
    return (
        <div>
            <h1>Create a new blog</h1>
            <form>
                <input type="text" 
                name="blogTitle" 
                placeholder="blog title" 
                // onChange="this.handleInputChange"
                value={props.name}
                /><br/><br/>
                <textarea 
                placeholder="blog content" 
                name="blogContent"
                value={props.name}
                // onChange="this.handleInputChange"
                ></textarea>
                <br/><br/>
                <button onClick={props.createBlog}>Submit</button>
            </form>

            <div className="output">
               <p>{props.blogTitle}</p>
               <p>{props.blogContent}</p>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        value: state.blogPost.value
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createBlog: () => dispatch(createBlog())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (CreateBlog)
