import './index.css';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';
import React from 'react';
import { BrowserRouter, Routes } from 'react-router';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
	<App />
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
