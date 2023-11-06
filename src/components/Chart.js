import React from "react";
import { useState, useEffect } from "react";
import Movie from "./Movie";

function Chart() {
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.movies);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    /* <!-- Conjunto de cards --> */
    <div>
              {movies.map((i) => {
                return <Movie key={i} />;
              })}
    </div>
  );
}

export default Chart;
