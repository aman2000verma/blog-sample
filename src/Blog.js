import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ data }) => {
  console.log(data);
  return (
    <div className="blog-container">
      <Link to="/">Go Back</Link>
      <h2>{data.title}</h2>
      <h3>{data.date}</h3>
      <p>{data.content}</p>
    </div>
  );
};

export default Blog;
