import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/state';

import App from './App';
import reportWebVitals from './reportWebVitals';
const consl = () => {
    console.log ('to chto nujno vivesti')
}

;



const rerenderEntireTree =(store.getState()) => {



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogsData={store.dialogsData} newUserText={store.newUserText} addUser={addUser} updateNewUser={updateNewUser}/>
  </React.StrictMode>
);
}

reportWebVitals();
provodnik (rerenderEntireTree);

rerenderEntireTree (store._state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
