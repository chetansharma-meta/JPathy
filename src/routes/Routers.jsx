import React from 'react'
import Home from "../pages/Home"
import Contact from "../pages/Contact"

import {Routes, Route} from 'react-router-dom'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default Routers
