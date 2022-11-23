import React from "react";
import "./Movie.css";
function Movie({ title, img, year }) {
  return (
    <div className="bg-gray-500 py-3 px-2 w-250">
      <img className="cursor-pointer" src={img} alt="movie" />
      <h2>{title}</h2>
      <p>{year}</p>
    </div>
  );
}

export default Movie;
