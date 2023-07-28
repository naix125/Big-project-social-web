import React from "react";
import s from './Message.module.css'
import { NavLink } from "react-router-dom";


const Message =(props)=> {
    return (
        <div className={s.message}>
           <NavLink to={""+props.id}>
            <div className={s.messageblock}>
            <img className={s.avatar} src="https://animals.pibig.info/uploads/posts/2023-04/1681759798_animals-pibig-info-p-koshka-sfinks-brash-zhivotnie-krasivo-3.jpg" alt="" />
               <div className={s.usernametime}> 
               <div className={s.username}> {props.username}</div>
               <div className={s.time}><div>{props.time}</div></div>
               </div>
                <div className={s.dialog}>{props.dialog}</div>
            </div>
            </NavLink> 
            
             </div>
    )
}
export default Message;