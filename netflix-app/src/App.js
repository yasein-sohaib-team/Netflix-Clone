import "./App.css";
import React from "react";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import FavList from "./components/FavList/FavList";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="fav" element={<FavList />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
