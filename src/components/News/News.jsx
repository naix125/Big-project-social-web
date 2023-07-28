import React from "react";
import s from './News.module.css'
debugger;
const News =()=>{
    let newPostElement = React.createRef();


    let newPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    }
    return (
       <div className={s.news}> 
       <div>
       <textarea ref = {newPostElement}></textarea>
       </div>
       <button onClick={ newPost }>
New post

       </button>
       <div>
       News
       </div>
       </div> 
    )
}

export default News;