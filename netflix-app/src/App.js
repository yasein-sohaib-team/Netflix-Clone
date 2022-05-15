import "./App.css";
import React from "react";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import FavList from "./components/FavList/FavList";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      {<div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<FavList />} />
        </Routes>
      </div>}
    </>
  );
}

export default App;

/* export default function App() {
  return (
    <div>
      <p>Hello Pizza 🍕 World 👋</p>
    </div>
  )
}
 */
