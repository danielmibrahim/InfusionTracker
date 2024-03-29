import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';

import *  as serviceWorker from './serviceWorker';
import Home from './components/home/Home';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header/Header';

 
ReactDOM.render(    
<BrowserRouter>
<Header/>
<App/>
</BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
