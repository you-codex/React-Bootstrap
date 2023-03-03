import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import GettingStarted from "./Getting Started/Getting Started"; 
import Accordion from "./Components/Accordion";
import Alert from "./Components/Alert";
import Card from "./Components/Card";
import List from "./Components/List Group";

const App = () => {
  return (
    <div className="container-fluid p-0">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Accordion" element={<Accordion />} />
          <Route path="/Alert" element={<Alert />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/List" element={<List />} />
          <Route path="/GettingStarted" element={<GettingStarted />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
