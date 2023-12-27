import React from 'react'
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Login from "../pages/Login"
import Consult from "../pages/Consult"

import {Routes, Route} from 'react-router-dom'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/consult" element={<Consult />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default Routers
