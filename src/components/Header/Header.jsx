import React from "react";
// import s from './Header.module.css';
import './Header.css'; 
const Header =()=>{
    return (<header className="header">
      <div className="logo">
        <img src="icon.png" alt="logo" className="logo-image" />
      </div>
      
      <div className="search">
          <input type="text" className="search-input" />
        </div>
        <div className="icons">
          <img src="bell.png" alt="bell" className="notification-icon" />
          <img src="music.png" alt="music" className="music-icon" />
        </div>
        <div className="profiles">
          <img src="app-icon.png" alt="app icon" className="app-icon" />
          <img src="avatar.png" alt="avatar" className="avatar" />
        </div>
  
        </header>
    )
}





export default Header ;