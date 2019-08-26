import React from "react";
import { Redirect } from "react-router-dom";

const Post = ({ match }) => {
  const slug = match.params.slug;
  const postSlugs = ["my-first-blog-post", "my-second-blog-post"];

  return postSlugs.indexOf(slug) !== -1 ? (
    <>
      <h1>This is a template for blog posts.</h1>
      <p>We'll get to this once we've hooked up Firebase!</p>
    </>
  ) : (
    <Redirect to="/404" />
  );
};

export default Post;
