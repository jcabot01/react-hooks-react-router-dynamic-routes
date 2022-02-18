import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({ movies }) {
  //call useParams to access the 'params' from the url
  const params = useParams();
  console.log(params);

  //down below we access the 'movieID' stored in 'params' to render info about selected movie
  return (
    <div>
      <h3>{movies[params.movieId].title}</h3>
    </div>
  );
}

export default MovieShow;