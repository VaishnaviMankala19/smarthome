import React from 'react';
import Home from './components/Home';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rooms from './components/Rooms';
import Full from './components/Full.js';


export default function App() {
  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Full' element={<Full/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
