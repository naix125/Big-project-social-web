import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addUser } from './redux/state';
export let rerenderEntireTree =(state) => {



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogsData={state.dialogsData} addUser={addUser}/>
  </React.StrictMode>
);
}

reportWebVitals();
