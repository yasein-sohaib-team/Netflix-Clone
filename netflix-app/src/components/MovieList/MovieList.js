import React from "react";
import Movie from "../Movie/Movie";
import styled from "styled-components";

const MoviesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

const MovieList = (props) => {
  let fromFav;
  if (props.fromFav != null) {
    fromFav = true;
  }
  let movies = props.movies.map((ele) => (
    <Movie data={ele} fromFav={fromFav}>
      {props.children}
    </Movie>
  ));
  return <MoviesContainer>{movies}</MoviesContainer>;
};

export default MovieList;
