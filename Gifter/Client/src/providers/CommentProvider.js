import React, { useState } from "react";

export const CommentContext = React.createContext();

export const CommentProvider = (props) => {
  const [comments, setComments] = useState([]);

  const getAllComments = () => {
    return fetch("/api/comment")
      .then((res) => res.json())
      .then(setComments);
  };

  const addComment = (comment) => {
    return fetch("/api/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });
  };

  return (
    <CommentContext.Provider value={{ comments, getAllComments, addComment }}>
      {props.children}
    </CommentContext.Provider>
  );
};