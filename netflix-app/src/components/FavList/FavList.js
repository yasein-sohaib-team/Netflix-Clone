import React from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import { useState, useEffect } from "react";
import MovieList from "../MovieList/MovieList";
const FavList = () => {
  const [moviesList, setMoviesList] = useState([]);
  const fetchMoviesData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER}getMovies`);
      const data = await response.data;
      setMoviesList(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => fetchMoviesData(), []);
  return (
    <>
      <Navbar />
      <MovieList movies={moviesList} fromFav={true} />
    </>
  );
};

export default FavList;
