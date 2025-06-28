import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Country from './Pages/Country'
import Contact from './Pages/Contact'
import Navbar from './components/Navbar'
import Error from './Pages/Error'
import Footer from './components/Footer'
import CountryDetails from './Pages/CountryDetails'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/country' element={<Country />}/>
        <Route path='/country/:id' element={<CountryDetails />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
