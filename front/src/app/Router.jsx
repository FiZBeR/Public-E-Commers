import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../layouts/Header/Header'
import Footer from '../layouts/Footer/Footer'
import Home from '../layouts/Home/Home'
import ErrorPage from '../layouts/ErrorPage/ErrorPage'

const Router = () => {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      <Footer/>
    </div>
  )
}

export default Router
