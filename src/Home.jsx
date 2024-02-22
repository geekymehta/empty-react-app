import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <p>
        <Link to="/dashboard">Dashboard</Link>
      </p>
    </>
  );
};

export default Home;
