import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAWEKWwyMNw-UA625yjZd9NcotUVk382dY",
  authDomain: "my-react-blog-22bbf.firebaseapp.com",
  projectId: "my-react-blog-22bbf",
  storageBucket: "my-react-blog-22bbf.appspot.com",
  messagingSenderId: "877880797442",
  appId: "1:877880797442:web:7ecdeef8f8b3c3b2bb3a1b"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
