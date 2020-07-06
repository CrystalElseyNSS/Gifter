import React from "react";
import { Card, CardImg, CardBody, CardFooter } from "reactstrap";
import Comment from "../comments/Comment";

const Post = ({ post }) => {

  return (
    <Card className="m-4">
      <p className="text-left px-2">Posted by: {post.userProfile.name}</p>
      <CardImg top src={post.imageUrl} alt={post.title} />
      <CardBody>
        <p>
          <strong>{post.title}</strong>
        </p>
        <p>{post.caption}</p>
      </CardBody>
      <CardFooter>
        <h4>Comments:</h4>
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