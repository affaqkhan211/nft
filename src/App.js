import React from 'react'
import Navbar from "./components/navbar/Navbar"
import Home from './pages/home/Home'
import Projects from "./pages/projects/Projects"
import { Routes, Route } from "react-router-dom"
import Footer from './components/footer/Footer'
import About from './pages/about/About'
import TermsAndConditions from './pages/terms/TermsAndConditions'
import Contact from './pages/contact/Contact'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/projects" element = {<Projects/>}/>
      <Route path = "/about-us" element = {<About/>}/>
      <Route path = "/terms-and-conditions" element = {<TermsAndConditions/>}/>
      <Route path = "/contact-us" element = {<Contact/>}/>
    </Routes>

    <Footer/>
    </>
  )
}

export default App