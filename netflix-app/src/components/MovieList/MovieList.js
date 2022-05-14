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
  let movies = props.movies.map((ele) => <Movie data={ele}>{props.children}</Movie>);

  return (
    <>
      <div>
        <MoviesContainer>{movies}</MoviesContainer>
      </div>
    </>
  );
};

export default MovieList;
