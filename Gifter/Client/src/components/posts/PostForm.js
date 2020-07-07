import React, { useContext, useRef } from "react";
import { PostContext } from "../../providers/PostProvider";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";

export const PostForm = ({ post }) => {

    const { addPost } = useContext(PostContext)
    const history = useHistory();
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
        return addPost(newPost).then((p) => {
            history.push("/");
        })
    }    

    return (
        <>
            <h3 className="m-5">New Post:</h3>
            <form>
                <div className="row m-5 form-group justify-content-between">
                    <div className="col">
                        <fieldset>
                            <input 
                                autoFocus
                                type="text" 
                                ref={title}
                                className="form-control" 
                                placeholder="Title" 
                                required
                            />
                        </fieldset>
                    </div>
                    <div className="col">
                        <fieldset>
                            <input 
                                type="text" 
                                ref={caption}
                                className="form-control" 
                                placeholder="Caption" 
                                required
                            />
                        </fieldset>
                    </div>
                </div>
                <div className="row m-5 form-group justify-content-between">
                    <div className="col">
                        <fieldset>        
                            <input 
                                type="text" 
                                ref={imageUrl}
                                className="form-control" 
                                placeholder="Image URL" 
                                required                                
                            />
                        </fieldset>
                    </div>
                    <div className="col">
                        <fieldset>                             
                            <input 
                                type="number" 
                                ref={userId}
                                className="form-control"
                                placeholder="User Id"
                                required 
                            />
                        </fieldset>
                    </div>
                </div>
                <div className="form--field mt-5">
                    <Button 
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