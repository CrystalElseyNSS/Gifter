import React, { useState, createContext, useContext } from "react";
import { UserProfileContext } from "../providers/UserProfileProvider";

export const PostContext = createContext();

export const PostProvider = (props) => {
  const apiUrl = "/api/post";
  const { getToken } = useContext(UserProfileContext);
  const [posts, setPosts] = useState([]);

  const getAllPosts = () => {
    getToken().then((token) => 
      fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(setPosts)
    )
  };

  const getPostById = (id) => {
    getToken().then((token) =>
      fetch(apiUrl`/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(setPosts)
    )
  };
  
  const refreshPosts = () => {
    getToken().then((token) =>
      fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(setPosts)
    )
  };

  const addPost = (post) => {
    getToken().then((token) =>
      fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
      })
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        }
        throw new Error("Unauthorized");
      })
    )
  };

  const searchPosts = (searchTerm) => {
    if (!searchTerm) {
      getAllPosts()
      return
    }
    return fetch(`api/post/search?q=${searchTerm}&sortDesc=true`)
    .then((res) => res.json())
    .then(setPosts)
  }

  return (
    <PostContext.Provider value={{ posts, getAllPosts, addPost, searchPosts, getPostById, refreshPosts }}>
      {props.children}
    </PostContext.Provider>
  );
};