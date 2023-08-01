
import './index.css';
import state, { provodnik } from './redux/state';
import reportWebVitals from './reportWebVitals';

import { rerenderEntireTree } from './render';

const consl = () => {
    console.log ('to chto nujno vivesti')
}

provodnik (consl);

rerenderEntireTree (state);
consl();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
