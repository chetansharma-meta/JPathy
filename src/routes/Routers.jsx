import Home from "../pages/Home"
import Contact from "../pages/Contact"

import {Routes, Route} from 'react-router-dom'
import  Homepost from "../Backend/pages/Homepost"
import Post from '../Backend/pages/Post'
import ConsultForm from '../Backend/post-form/ConsultForm'
import ConsultFormResult from "../Backend/pages/ConsultFormResult.jsx"



// import PostConsultForm from "../Backend/components/PostConsultForm.jsx"
// import ConsultFormResult from "../Backend/pages/ConsultFormResult.jsx"

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/home" element={<Home />} /> */}
      <Route path="/contact" element={<Contact />} />
      
      <Route path="/consult" element={<ConsultForm />} />
      <Route path="/DrsCorner" element={<Homepost />} />
      <Route path="/formresult" element={<ConsultFormResult />} />
      
      
       {/* <Route path="/addpost" element={
        <AuthLayout authentication>
            <AddPost />

        </AuthLayout>
     
      } /> */}

      <Route path="/post/:slug" element={<Post />} />
    </Routes>
  )
}

export default Routers
