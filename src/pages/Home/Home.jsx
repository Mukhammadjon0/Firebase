import React, { useContext, useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
// import { db } from "../../firebase";
import Movie from "../../components/Movie/Movie";
import "./Home.css";
import { StateContext } from "../../Context/context";


function Home() {
  const {db}=useContext(StateContext)
  const [movies, setMovies] = useState([]);
  const colRefMovies = collection(db, "movies");
  useEffect(() => {
    onSnapshot(colRefMovies, (snapshot) => {
      setMovies(
        snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    });
  }, []);
console.log(movies)
  return (
    <div className="text-center">
      <h1>Movies</h1>
      <div className="movies grid grid-cols-4 my-3 px-3 gap-5">
        {movies.map((item) => (
          <Movie key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
