import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Context_provider } from './context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  
    <Context_provider>
    <App />
    </Context_provider>
    

);

