import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Categories from './pages/Categories/Categories'
import Product from './pages/Product/Product'
import Search from './pages/Search/Search'
import './index.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/product" element={<Product />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  )
}

export default App