import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
