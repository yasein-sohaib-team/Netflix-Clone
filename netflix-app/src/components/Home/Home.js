import Navbar from "../Navbar/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "../MovieList/MovieList";

const Home = () => {
  const [moviesList, setMoviesList] = useState([]);
  const fetchMoviesData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER}trending`);
      const data = await response.data;
      // console.log(data);
      setMoviesList(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => fetchMoviesData(), []);
  return (
    <>
      <Navbar></Navbar>
      <MovieList movies={moviesList}></MovieList>
    </>
  );
};

export default Home;
