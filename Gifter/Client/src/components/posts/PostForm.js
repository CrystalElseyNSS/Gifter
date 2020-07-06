import React, { useContext, useRef } from "react";
import { PostContext } from "../../providers/PostProvider";
import { Button } from "reactstrap";

export const PostForm = ({ post }) => {

    const { addPost } = useContext(PostContext)

    const title = useRef()
    const imageUrl = useRef()
    const caption = useRef()
    const userId = useRef()

    const constructNewPost = () => {
        const newPost = {
            title: title.current.value,
            imageUrl: imageUrl.current.value,
            caption: caption.current.value,
            userProfileId: parseInt(userId.current.value), 
            dateCreated: new Date()        
        } 
        return addPost(newPost)
    }    

    return (
        <>
            <form>
                <fieldset>
                    <label htmlFor="post--title">Title:</label>
                    <input
                        autoFocus
                        type="text"
                        ref={title}
                        required
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="post--image">Image URL:</label>
                    <input
                        type="text"
                        ref={imageUrl}
                        required
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="post--caption">Caption:</label>
                    <input
                        type="text"
                        ref={caption}
                        required
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="newUserId">User Profile Id: </label>
                    <input 
                        type="number" 
                        ref={userId}
                        required />
                </fieldset>

                <div className="form--field">
                    <Button 
                        id="post--submit"
                        type="submit" 
                        color="info" 
                        size="sm"  
                        onClick={evt => {
                            evt.preventDefault()
                            constructNewPost()
                        }}
                        >
                        Submit
                    </Button>
                </div>  

            </form>
        </>  
    )
}  