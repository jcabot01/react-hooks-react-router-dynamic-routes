import React from "react";
import { Link } from "react-router-dom";

function MoviesList({ movies }){ //movies is State from App, passed down via props.  movies is an object containing each movie
  const renderMovies = Object.keys(movies).map((movieID) => (
    <li key={movieID}>
      <Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
    </li>
  ));

  return <ul>{renderMovies}</ul>
};

export default MoviesList