import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Consult from "../pages/Consult"
import AuthLayout from "../Backend/components/AuthLayout.jsx"

import {Routes, Route} from 'react-router-dom'
import Login from "../Backend/components/Loginpage.jsx"
import  Homepost from "../Backend/pages/Homepost"
import EditPost from '../Backend/pages/EditPost'
import Post from '../Backend/pages/Post'
import ConsultForm from '../Backend/post-form/ConsultForm'
import ConsultFormResult from "../Backend/pages/ConsultFormResult.jsx"



import AddPost from '../Backend/pages/AddPost'
// import PostConsultForm from "../Backend/components/PostConsultForm.jsx"
// import ConsultFormResult from "../Backend/pages/ConsultFormResult.jsx"

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
      <Route path="/formresult" element={<ConsultFormResult />} />
      
      
       <Route path="/addpost" element={
        <AuthLayout authentication>
            <AddPost />

        </AuthLayout>
     
      } />

      <Route path="/post/:slug" element={<Post />} />
    </Routes>
  )
}

export default Routers
