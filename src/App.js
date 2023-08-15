import React from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Messenger from './components/messenger/messenger';

import Musicbar from './components/musicbar/musicbar';

const App =(props)=> {
 
  return (
  <BrowserRouter>
  <div className='App'>
  
   <Navbar/>
   <Routes>
 <Route path='/messenger' element ={ < Messenger />}  />
 <Route path='/musicbar'element={<Musicbar/>} />
 </Routes>
 </div>
</BrowserRouter>

  )
}


export default App;