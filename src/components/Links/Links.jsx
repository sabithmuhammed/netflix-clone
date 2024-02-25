import React from "react";
import './style.css';
function Links({ linkItems }) {
  return (
    <ul className="foot-links">
      {linkItems.map((link,index) => (
        <li key={index}>{link}</li>
      ))}
    </ul>
  );
}

export default Links;
