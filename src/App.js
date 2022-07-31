import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blogs from "./Blogs";
import data from "./data.json";
import Blog from "./Blog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blogs />} />
        {data.map((item) => {
          return (
            <Route
              key={item.id}
              path={`blog/${item.id}`}
              element={<Blog data={item} />}
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
