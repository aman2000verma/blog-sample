import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import data from "./data.json";
import Blog from "./Blog";

const Blogs = () => {
  //   console.log(data);
  return (
    <div>
      <header className="header">
        <h1>Blogs</h1>
      </header>
      <div className="content">
        {data.map((item) => {
          return (
            <div key={item.id} className="post">
              <h3>{item.title}</h3>
              <div>{item.date}</div>
              <p>{item.content.substring(0, 400)}.....</p>
              <Link to={`blog/${item.id}`}>Read More</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
