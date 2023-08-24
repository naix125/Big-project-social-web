import React from "react";
let Post =(props)=> {
    
    return <div>
        {props.username}
        {props.dialog}
        {props.time}
    </div>
}
export default Post