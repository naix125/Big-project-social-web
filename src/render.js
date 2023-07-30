import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addUser, updateNewUser } from './redux/state';
export let rerenderEntireTree =(state) => {



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogsData={state.dialogsData} newUserText={state.newUserText} addUser={addUser} updateNewUser={updateNewUser}/>
  </React.StrictMode>
);
}

reportWebVitals();
