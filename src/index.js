/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
import UserApp from './user/userApp';
import User from './ReduxToolkit/user';
import App from './ReduxToolkit/App';
import { Provider } from 'react-redux';
import Project from './Project1/Project';
import store from './Project1/redux/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <Provider store={store}>
                <Project />
        </Provider>     
);  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

