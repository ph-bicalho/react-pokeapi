import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./variables.css";
import "./global.css";
import Home from "./pages/Home/Home";
import Pokemon from "./pages/Pokemon/Pokemon";


const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pokemon/:id" element={<Pokemon />} />
        </Routes>
      </Router>
    </>
  );
}

export {AppRouter}
