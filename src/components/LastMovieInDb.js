import React from "react";
import { useState, useEffect } from "react";

function LastMovieInDb() {
  let [movie, setMovie] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => {
        const movies = data.movies;
        setMovie(movies[movies.length - 1]);
      })
      .catch((error) => console.log(error));
  }, []);



  return (
    <div >
        <div >
          <h5>
            Última película
          </h5>
        </div>
        <div>
            <img src={movie.image} alt=""/>
        </div>
    </div>
  );
}

export default LastMovieInDb;
