import React, { useState, createContext, useEffect } from "react";
import "./style.css";
import Tile from "../Tile/Tile";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import axios from "../../axios";
import { API_KEY } from "../../constants/constants";
const PlayerContext = createContext();
function Row({ title, url }) {
  const [playerActive, setPlayerActive] = useState(false);
  const [rowMovies, setRowMovies] = useState([]);
  const [videoId, setVideoId] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await axios.get(url);
        setRowMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovies();
  }, []);
  async function handleTileClick(movieId) {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
      );
      const randomIndex = Math.floor(Math.random() * data.results.length);
      setVideoId(data.results[randomIndex]?.key);
      setPlayerActive(true);
    } catch (error) {
      console.log(error.message);
    }
  }
  function handleClose() {
    setPlayerActive(false);
  }
  return (
    <div className="row-tiles">
      <h2 className="row-title">{title}</h2>
      <div className="tiles-div">
        <PlayerContext.Provider value={handleTileClick}>
          {rowMovies.map((item) => (
            <Tile
              key={item.id}
              imagePath={item.backdrop_path}
              movieId={item.id}
            />
          ))}
        </PlayerContext.Provider>
      </div>
      {playerActive && (
        <div className="video-div">
          <button className="close" onClick={handleClose}>
            &#x2715;
          </button>
          <VideoPlayer videoId={videoId}></VideoPlayer>
        </div>
      )}
    </div>
  );
}

export default Row;
export { PlayerContext };
