import { collection, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../../Context/context";
import "./Music.css";
import MusicComponent from "./MusicComponent";

function Music() {
  const { db } = useContext(StateContext);
  const [music, setMusic] = useState([]);
  const colRefMusic = collection(db, "music");
  useEffect(() => {
    onSnapshot(colRefMusic, (snapshot) => {
      setMusic(
        snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    });
  }, []);
  return (
    <div className="text-center">
      <h1>Songs</h1>
      <div className='bg-red-700 grid grid-cols-4 p-3 gap-3 '>
        {music.map((item) => (
          <MusicComponent key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Music;
