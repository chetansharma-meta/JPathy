import React, {useEffect, useState} from 'react'
import appwriteService from "../Appwrite/config";
import PostCard from '../components/PostCard'

function Homepost() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    // if (posts.length === 0) {
    //     return (
    //         <div className="w-full py-8 mt-4 text-center">
                
    //                 <div className="flex flex-wrap">
    //                     <div className="p-2 w-full">
    //                         <h1 className="text-2xl font-bold hover:text-gray-500">
    //                             Login to read posts
    //                         </h1>
    //                     </div>
    //                 </div>
                
    //         </div>
    //     )
    // }
    return (
        <div className='w-full py-8'>
         
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
           
        </div>
    )
}

export default Homepost