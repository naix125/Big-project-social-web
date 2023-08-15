import React from "react";
import Message from "../message/message";
let Messenger = () => {
    let dialogData =[
        {username:'sex',dialog: 'lets fuck',time :'11.45'},
        {username:'sex',dialog: 'lets fuck',time :'11.45'},
        {username:'sex',dialog: 'lets fuck',time :'11.45'},
        {username:'sex',dialog: 'lets fuck',time :'11.45'},
        {username:'sex',dialog: 'lets fuck',time :'11.45'},
        {username:'sex',dialog: 'lets fuck',time :'11.45'},
        {username:'sex',dialog: 'lets fuck',time :'11.45'}
    ]
    let dialogElements =dialogData.map (
        d=> <Message username={d.username}
        dialog={d.dialog}
        time={d.time}/>
    )
    return (
        <div>
            {dialogElements}
        </div>


    )
}
export default Messenger