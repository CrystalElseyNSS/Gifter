import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PostList from "./posts/PostList";
import { PostForm } from "./posts/PostForm";
import PostSearch from "./posts/PostSearch";
import { UserProfileContext } from "../providers/UserProfileProvider";
import Login from "./auth/Login";
import Register from "./auth/Register";

const ApplicationViews = () => {
  const { isLoggedIn } = useContext(UserProfileContext);
  return (
    <Switch>
      <Route path="/" exact>
        {isLoggedIn ? <><PostSearch /> <PostList /></> : <Redirect to="/login" />}
      </Route>

      <Route path="/posts/add">
        {isLoggedIn ? <PostForm /> : <Redirect to="/login" />}
      </Route>

      <Route path="/posts/:id">{/* TODO: Post Details Component */}</Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  );
};

export default ApplicationViews;