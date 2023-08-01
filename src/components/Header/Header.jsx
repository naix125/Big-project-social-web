import React from "react";
import s from './Header.module.css';
import VK from '../../images/VK.svg'

const Header =()=>{
    return (<header className="header">
      <div className={s.logo}>
        <img src={VK} alt="logo" className={s.logoImage} />
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