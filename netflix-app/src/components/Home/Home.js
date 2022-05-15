import { useState, useEffect } from "react";
import MovieList from "../MovieList/MovieList";

export default function Home() {
  const [movies, setMovies] = useState([]);
  async function getMovies() {
    let response = await fetch(`${process.env.react_app_server}trending`);
    let moviesData = await response.json();
    setMovies(moviesData);
  }
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(18rem, 1fr))", backgroundColor: "#413F42" }}>{movies.length > 0 && <MovieList movies={movies} />}</div>
    </>
  );
}
