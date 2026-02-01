import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../layouts/Header/Header'
import Footer from '../layouts/Footer/Footer'
import Home from '../layouts/Home/Home'
import ErrorPage from '../layouts/ErrorPage/ErrorPage'
import About from '../layouts/About/About'
import Catalog from '../layouts/Catalog/Catalog'
import Login from '../layouts/Login/Login'
import ShoppingCart from '../layouts/ShoppingCart/shoppingCart'

const Router = () => {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='*' element={<ErrorPage/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/allProducts' element={<Catalog/> } />
          <Route path='/allProducts/:categoria' element={<Catalog/> } />
          <Route path='/login' element={<Login/> } />
          <Route path='/shopping_cart' element={<ShoppingCart/>} />
        </Routes>
      <Footer/>
    </div>
  )
}

export default Router
