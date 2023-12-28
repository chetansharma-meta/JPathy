import React, {useEffect, useState} from 'react'
import  PostForm from '../post-form/PostForm'
import appwriteService from "../Appwrite/config";
import { useNavigate,  useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
        
            <PostForm post={post} />
       
    </div>
  ) : null
}

export default EditPost