import React, { useContext, useEffect, useRef, useState } from "react";
import { PostContext } from "../../providers/PostProvider";
import { Button } from "reactstrap"

export const PostForm = ({ post }) => {

    const { addPost } = useContext(PostContext)

    const Title = useRef()
    const ImageUrl = useRef()
    const Caption = useRef()

    const constructNewPost = () => {
        const newPost = {
            Title: Title,
            ImageUrl: ImageUrl,
            Caption: Caption,
            // DateCreated: DateCreated,
            // UserProfileId: parseInt(UserProfileId)           
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
                        ref={Title}
                        required
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="post--image">Image URL:</label>
                    <input
                        type="text"
                        ref={ImageUrl}
                        required
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="post--caption">Caption:</label>
                    <input
                        type="text"
                        ref={Caption}
                        required
                    />
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