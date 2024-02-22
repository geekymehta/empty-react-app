import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <div>
        Home <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default Dashboard;
