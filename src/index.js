import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/state';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { newsState } from './redux/state';
const consl = () => {
    console.log ('to chto nujno vivesti')
}

;



let rerenderEntireTree = (state) => {



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <App newsState={newsState}
    dialogsData={store.getState().dialogsData} 
    newUserText={store._state.newUserText} 
    addUser={store.addUser} 
    updateNewUser={store.updateNewUser}/>
  </React.StrictMode>
)
}

reportWebVitals();


rerenderEntireTree (store.getState());
store.provodnik (rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
