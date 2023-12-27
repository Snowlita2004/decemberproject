import React from 'react';
 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
 
 import Project1 from './Project1';
 
export default function App() {
   const myList = [
    { id: 'a', value: 'apple' },
     { id: 'b', value: 'banana' },
    { id: 'c', value: 'orange' },
    { id: 'd', value: 'grapes' },
     { id: 'e', value: 'mango' },
   ];
  return (
    <div className="App">
      { <Project1 myList={myList}/> }
       
      { <BrowserRouter>
          
            
      </BrowserRouter> }
  
    </div>
  );
}