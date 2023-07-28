import React from "react";
import s from  './Navbar.module.css'
import {  NavLink } from "react-router-dom";
const Navbar =()=>{

    return (
        
    <div className={s.navbar}> 
    <NavLink to='/myprofile' className={s.item}>My profile</NavLink>
    <NavLink to="/news" className={s.item}>News</NavLink>
    <NavLink to="/messenger" className={s.item} >Messenger</NavLink>
    <a href="/calls" className={s.item}>Calls</a>
    <a href="/friends" className={s.item}>Fiends</a>
    <a href="/communities" className={s.item}>Communities</a>
    
    <a href="/messenger" className={s.item}>Messenger</a>
    <a href="/messenger" className={s.item}>Messenger</a>
    <a href="/messenger" className={s.item}>Messenger</a>
    </div>
    
    )
}


export default Navbar ;