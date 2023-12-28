import React from 'react'
import Home from "../pages/Home"
import Contact from "../pages/Contact"
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
      <Route path="/contact" element={<Contact />} />
      
      <Route path="/consult" element={<ConsultForm />} />
      <Route path="/login" element={<Login />} />
      <Route path="/allpost" element={<Homepost />} />
      <Route path="/editpost" element={<EditPost />} />
      <Route path="/addpost" element={<AddPost />} />
      <Route path="/post/:slug" element={<Post />} />
    </Routes>
  )
}

export default Routers
