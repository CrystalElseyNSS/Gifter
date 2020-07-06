import React from "react";

const Comment = ({ comment }) => {
  return (
    <p>{comment.message}</p>
  );
};

export default Comment;