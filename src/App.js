import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './global.css';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';



export default function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Pokemon/:id' element={<Pokemon/>} />
      </Routes>

    </Router>
      
    </>
  );
}
