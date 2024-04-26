import React from 'react';
import Navbar from './components/Navbar.js';
import Herosection from './components/Herosection.js';
import Rooms from './components/Rooms.js';
import './App.css';

export default function App() {
  return (
    <>
    <Navbar/>
    <Herosection/>
    <Rooms/>
    </>
  );
}
