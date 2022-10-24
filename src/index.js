/* import Str from './Str'
const h3='<h3>标题</h3>';
console.log(h3+Str.link);
const app=document.getElementById("app");
app.innerHTML=h3+Str.link; */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


ReactDOM.render(
    <App/>,
    document.getElementById("app")
)
