import React from "react";
import s from './Messenger.module.css'
import Message from "../Message/Message";



const Messenger =(props)=> {
    let newUserName = React.createRef();


    let addUser = () => {
        debugger
        let text = newUserName.current.value;

       props.addUser(text)
       newUserName.current.value = '';
    }
   
    let dialogsElements = props.dialogsData.map ( d => <Message username={d.username} 
        dialog={d.dialog} time={d.time} id={d.id}/> );
    return (
        
        <div className={s.messenger}>
            <div>
                {dialogsElements}

                <div>
<textarea ref={newUserName}></textarea>
<button onClick={addUser}>
    adduser
</button>

                        </div>
                        </div>

                        
            <div>
                navbarmessenger
            </div>
            
        </div>
    )
}
export default Messenger;