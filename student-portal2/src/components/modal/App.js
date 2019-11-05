import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Layout from './components/layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
