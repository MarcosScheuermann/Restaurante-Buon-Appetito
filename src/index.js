import React from 'react';
// import {createRoot} from 'react-dom/client'
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';

// const express = require('express');
// const app = express();
// const users = require('./routes/users');
// const products = require('./routes/products');

// app.use('/productos', products);
// app.use('/usuarios', users);

// app.listen(4000,()=>{
//   console.log('Escuchando al puerto 4000');
// })


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// createRoot(
//   document.getElementById('root')
// ).render(
//   <App />
// )
