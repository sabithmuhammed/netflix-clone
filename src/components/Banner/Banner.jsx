import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { API_KEY, imageURL } from "../../constants/constants";
import "./style.css";
function Banner() {
  const [banner, setBanner] = useState(null);
  useEffect(() => {
    const getMovie = async () => {
      try {
        const { data } = await axios.get(
          `/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`
        );
        const randomIndex = Math.floor(Math.random() * data.results.length);
        setBanner(data.results[randomIndex]);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovie();
  }, []);

  return (
    banner &&
    <div className="banner-div">
      <div className="banner-text">
        <h1>{banner.title}</h1>
        <p>{banner.overview}</p>
        <div className="button-div">
          <button>
            <i className="fa-solid fa-play"></i>Play
          </button>
          <button className="btn-more">
            <i className="fa-solid fa-circle-info"></i>More info
          </button>
        </div>
      </div>
      <img
        className="banner-img"
        src={`${imageURL}/original/${banner.backdrop_path}`}
        alt=""
      />
      <div className="gradient"></div>
    </div>
  );
}

export default Banner;
