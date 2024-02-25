import React, { useContext } from "react";
import { PlayerContext } from "../Row/Row";
import { imageURL } from "../../constants/constants";
import "./style.css";
function Tile({ imagePath, movieId }) {
  const handleTileClick = useContext(PlayerContext);
  return (
    <div className="tile" onClick={() => handleTileClick(movieId)}>
      <img src={`${imageURL}/w500/${imagePath}`} alt="" />
    </div>
  );
}

export default Tile;
