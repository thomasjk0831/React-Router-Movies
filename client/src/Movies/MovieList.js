import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom'

const MovieList = props => {

  
  
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore } = movie;
  // const { url } = useRouteMatch()
  // console.log("url:",url)
 
  return (
    <div className="movie-card">
     <Link to= {`movies/${movie.id}`}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      </Link>
    </div>
  );
}

export default MovieList;
