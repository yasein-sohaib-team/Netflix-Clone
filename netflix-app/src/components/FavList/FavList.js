import React from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import { useState, useEffect } from "react";
import MovieList from "../MovieList/MovieList";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";

const FavList = () => {
  const [moviesFavList, setMoviesFavList] = useState([]);
  const fetchFavMoviesData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER}getMovies`);
      const data = await response.data;
      setMoviesFavList(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => fetchFavMoviesData(), []);
  return (
    <>
      <Navbar />
      <MovieList movies={moviesFavList} fromFav={true} />

      <Navbar />
      {
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorite" element={<FavList />} />
          </Routes>
        </div>
      }
    </>
  );
};

export default FavList;
