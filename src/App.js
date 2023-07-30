import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import { BrowserRouter } from 'react-router-dom';

const App =(props)=> {
 
  return (
  <BrowserRouter>
  <div className='App'>
  
<Header/>
<Navbar/>
<Content dialogsData={props.dialogsData} addUser={props.addUser} 
newUserText={props.newUserText}
updateNewUser={props.updateNewUser}/>



</div>

</BrowserRouter>
  )
}


export default App;