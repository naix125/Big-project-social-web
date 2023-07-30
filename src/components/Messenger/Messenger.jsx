import React from "react";
import s from './Messenger.module.css'
import Message from "../Message/Message";



const Messenger =(props)=> {
    let newUserName = React.createRef();


    let addUser = () => {
        

        let text = newUserName.current.value;

       props.addUser(text)
      
    }
   
    let dialogsElements = props.dialogsData.map ( d => <Message username={d.username} 
        dialog={d.dialog} time={d.time} id={d.id}/> );

        let onUserChange = () =>{
            let text =newUserName.current.value;
            props.updateNewUser(text);

        }
    return (
        
        <div className={s.messenger}>
            <div>
                {dialogsElements}

                <div>
<textarea onChange={onUserChange} ref={newUserName} 
value={props.newUserText}/>
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