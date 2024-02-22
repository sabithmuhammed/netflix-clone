import React from 'react'
import Navbar from '../Navbar/Navbar'
import axios from 'axios';
import './style.css'
function Banner() {
   

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/discover/movie',
  params: {include_adult: 'false', language: 'en-US', page: '1',api_key:''},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
  return (
    <div className='banner-div'>
        <Navbar></Navbar>
        <div className="banner-text">
            <h1>Watch Joker Now</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, facere. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae perferendis neque deleniti repellat, eligendi hic labore eveniet quisquam rerum illo.</p>
            <div className="button-div">
                <button><i className="fa-solid fa-play"></i>Play</button><button className='btn-more'><i class="fa-solid fa-circle-info"></i>More info</button>
            </div>
        </div>
        <img className='banner-img' src="https://image.tmdb.org/t/p/original/meyhnvssZOPPjud4F1CjOb4snET.jpg" alt=""/>
        <div className="gradient"></div>
    </div>
  )
}

export default Banner
