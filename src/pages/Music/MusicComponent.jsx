import React from "react";
import './Music.css'
function MusicComponent({ music, singer, name }) {
  console.log(music)
  return (
    <div className="bg-green-700 p-5 text-[yellow]">
      <audio src={music} controls></audio>
      <h2>{name}</h2>
      <h3>{singer}</h3>
    </div>
  );
}

export default MusicComponent;
