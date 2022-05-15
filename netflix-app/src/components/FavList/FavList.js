import React from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import { useState, useEffect } from "react";
import MovieList from "../MovieList/MovieList";

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
    </>
  );
};

export default FavList;
