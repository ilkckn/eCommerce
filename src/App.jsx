import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './views/Home'
import MenClothing from "./components/MenClothing";
import ECommerceContextProvider from './context/eCommerceContext'
import WomenClothing from './components/WomenClothing';
import Electronics from './components/Electronics';
import Jewelery from './components/Jewelery';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import CheckOut from './components/CheckOut';

function App() {

  return (
    <div className='appContainer'>
      <ECommerceContextProvider>
        <Navbar />
        <Filter />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/men-clothing" element={<MenClothing />} />
          <Route path='/women-clothing' element={<WomenClothing />} />
          <Route path='/electronics' element={<Electronics />} />
          <Route path='/jewelery' element={<Jewelery />} />
          <Route path='/cart' element={<CheckOut />} />
        </Routes>
      </ECommerceContextProvider>
    </div>
  )
}

export default App
