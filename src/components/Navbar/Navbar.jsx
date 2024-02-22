import React from "react";
import "./style.css";
function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="nav-left">
        <ul>
          <li className="logo">
            <img
              src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
              alt=""
            />
          </li>
          <li className="nav-link">Series</li>
          <li className="nav-link">Movies</li>
        </ul>
      </div>
      <div className="nav-right">
        <div className="search">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Ic_search_white_48px.svg" alt="" />
        </div>
        <div className="avatar">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
