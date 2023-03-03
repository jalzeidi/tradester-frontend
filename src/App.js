import React from "react";
import { Routes, Route, Link } from "react-router-dom";

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
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post" element={<Post />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/simulation" element={<Simulation />} />
      </Routes>
    </>
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

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/simulation">Simulation</Link>
    </div>
  )
}

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
    </div>
  );
};
