import React from 'react'
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Login from "../pages/Login"
import Consult from "../pages/Consult"

import {Routes, Route} from 'react-router-dom'
import Consult from "../pages/Consult"
// import Login from "../pages/Login"
import Login from "../Backend/pages/Login"
import  Homepost from "../Backend/pages/Homepost"
import EditPost from '../Backend/pages/EditPost'
import Post from '../Backend/pages/Post'
import ConsultForm from '../Backend/post-form/ConsultForm'




import AddPost from '../Backend/pages/AddPost'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/consult" element={<Consult />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default Routers
