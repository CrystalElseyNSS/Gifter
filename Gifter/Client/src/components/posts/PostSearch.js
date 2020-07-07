import React, { useContext } from 'react'
import { Input } from 'reactstrap'
import { PostContext } from '../../providers/PostProvider'

const PostSearch = () => {
    const { searchPosts } = useContext(PostContext)
 
    const handleChange = (evt) => {
        searchPosts(evt.target.value)
    }

    return (
        <div className='container mt-1'>
            <Input type='text' onChange={handleChange} placeholder="Search Posts by Title or Caption" />
        </div>
    )
}

export default PostSearch