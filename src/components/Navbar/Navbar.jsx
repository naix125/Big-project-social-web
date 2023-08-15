import React from "react";
import { NavLink } from "react-router-dom";




let Navbar = ()=>{

    return (
        <div>
            
           <div> <NavLink to="/musicbar">music</NavLink> </div>

    <div>  <NavLink to="/messenger">messenger</NavLink> </div>
        </div>
    )
}

export default Navbar