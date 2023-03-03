import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

import About from "./routes/About";
import Blog from "./routes/Blog";
import Post from "./routes/Post";
import Dashboard from "./routes/Dashboard.tsx";
import Login from "./routes/Login.tsx";
import Simulation from "./routes/Simulation";
import bull from "./bull.png";
import "./style.css";
import "./app.css";

export default function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/post" element={<Post />}></Route>
        <Route index element={<HomePage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/simulation" element={<Simulation />}></Route>
      </Routes>
    </div>
  );
}

const HomePage = () => {
  return (
    <div className="home">
      <h1>Welcome to tradester</h1>
      <Link to="/dashboard">View Dashboard</Link>
    </div>
  );
};

const Nav = () => {
  return (
    <div>
      <div className="nav">
        <Link className="logo" to="/dashboard">
          Tradester <img src={bull} alt="Logo" />{" "}
        </Link>
        <div className="links">
          <Link to="/about">About</Link>
          <Link to="/simulation">Simulation</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
