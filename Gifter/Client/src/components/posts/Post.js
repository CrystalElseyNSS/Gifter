import React from "react";
import { Card, CardImg, CardBody, CardFooter } from "reactstrap";
import Comment from "../comments/Comment";
import { Link } from "react-router-dom";

const Post = ({ post }) => {

  return (
    <Card className="m-5">

      <p>{post.caption}</p>

      <CardImg top src={post.imageUrl} alt={post.title} />

      <CardBody>
        <p><Link to={`/posts/${post.id}`}><strong>{post.title}</strong></Link></p>
        <p className="text-left px-2">Posted by: {post.userProfile.name}</p>
      </CardBody>
      
      <CardFooter>
        <h5>Comments:</h5>
        <div>
          {
            post.comments.map(comm => {
              return <Comment comment={comm} key={comm.id} />
            })
          }
      </div>
      </CardFooter>
    </Card>
  );
};

export default Post;