import React from "react";
import s from './News.module.css'
import Post from "../Post/Post";

const News = (props) => {
    let newPostElement = React.createRef();


    let newPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    }
    let postElements = props.newsState.postsData.map ( p => <Post username={p.username} 
        dialog={p.post} time={p.time} /> );
       
    return (
        <div className={s.news}>
            
            {postElements}
            postElements
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            
            <button onClick={newPost}>
                New post


            </button>
            
        </div>
    )
}

export default News;