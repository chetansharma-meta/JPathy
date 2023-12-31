import React from 'react'
// import appwriteService from "../Appwrite/config"
import {Link} from 'react-router-dom'

function PostConsultForm({	$id,	fullName	,contactno	,problem	,status,problemRelated	}) {
    
  return (
    <Link >
        <div className='w-full bg-gray-100 rounded-xl p-4 border-2 border-black-300 justify-center'>
            
            <h2 className='text-xl font-bold text-center'>Full Name :{fullName}</h2>
            <h2 className='text-xl font-bold text-center'>ID :  {$id}</h2>
            <h2 className='text-xl font-bold text-center'>Phone no:  {contactno}</h2>
            <h2 className='text-xl font-bold text-center'>Category : {problemRelated}</h2>
            <h2 className='text-xl font-bold text-center'>Problem : {problem}</h2>
            <h2 className='text-xl font-bold text-center'>Status : {status}</h2>
            {/* <h2 className='text-xl font-bold text-center'>{slug}</h2> */}
        
        </div>
    </Link>
  )
}


export default PostConsultForm