import React from "react";
import "./style.css";
import Links from "../Links/Links";
function Footer() {
  return (
    <footer>
      <div className="social">
        <div className="">
          <i className="fa-brands fa-facebook-f"></i>
        </div>
        <div className="">
          <i className="fa-brands fa-x-twitter"></i>
        </div>
        <div className="">
          <i className="fa-brands fa-instagram"></i>
        </div>
        <div className="">
          <i className="fa-brands fa-youtube"></i>
        </div>
      </div>
      <div className="links">
        <Links
          linkItems={["FAQ", "Investors Relations", "Privacy", "Speed Test"]}
        />
        <Links
          linkItems={[
            "Help Center",
            "Jobs",
            "Cookie Preferences",
            "Legal Notices",
          ]}
        />
        <Links
          linkItems={[
            "Account",
            "Way to Watch",
            "Corporate Information",
            "Only on Netflix",
          ]}
        />
        <Links linkItems={["Media Center", "Terms of Use", "Contact US"]} />
      </div>
    </footer>
  );
}

export default Footer;
