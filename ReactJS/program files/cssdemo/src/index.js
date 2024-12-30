import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Register from './App';

let cssprop ={
borderColor:"red",
color:"yellow",
// width:"50px"
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.Fragment>
    <Register/>
    {/* <input style={cssprop} type='text' name='username' value=''/><br/><br/>
    <input type='text' name='password' value=''/><br/><br/>
    <input type='button' name='s' value='Login'/><br/><br/> */}
    </React.Fragment>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
