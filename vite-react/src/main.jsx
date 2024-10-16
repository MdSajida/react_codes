import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import  Mytest from './newVreact.jsx'
function Cap(){
  return (
  <>
    <p>Hello doston!</p>
  </>)
}

const username='Sajida'

const Maap =(
    <a href='https://www.google.com' target='_blank'>Clict here to visit anohter universe</a>
)

const relement=React.createElement(
  'a',
  {href:"https://www.google.com",title:'click hehe',target:'_blank'},
  'CLICK HERE TO VISIT ',
  username //evaluated expression/js

)
createRoot(document.getElementById('root')).render(
 
 <App/>
  
)