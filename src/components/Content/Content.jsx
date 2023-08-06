import React from "react";
import s from './Content.module.css'
import MyProfile from "../MyProfile/MyProfile";
import { Route, Routes , } from "react-router-dom";
import News from "../News/News";
import Messenger from "../Messenger/Messenger";
const Content =(props)=>{
   
    return (
        
    <div className={s.content}> 
    
    <Routes>
    <Route path="/myprofile" element={<MyProfile />} />

    <Route path="/news" element ={<News/>} />
    
    <Route path="/messenger/" element = {<Messenger dialogsData={props.dialogsData} 
    addUser={props.addUser}
    newUserText={props.newUserText}
    updateNewUser={props.updateNewUser}
/>} />
    
    </Routes>
    </div>
    
    )
}


export default Content ;