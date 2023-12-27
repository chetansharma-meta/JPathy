import React from 'react'
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Consult from "../pages/Consult"
import Cart from "../pages/Cart"
import About from "../pages/About"

import {Routes, Route} from 'react-router-dom'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/consult" element={<Consult />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default Routers
