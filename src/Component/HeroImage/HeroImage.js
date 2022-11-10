import React from "react";
import "./heroImage.css";
import myImg from "../../Assests/myImg.jpg";
import { Link } from "react-router-dom";

const HeroImage = () => {
  return (
    <React.Fragment>
      <div className="hero">
        <div className="mask">
          {" "}
          <img className="intro-img" src={myImg} alt="myImage" />
        </div>

        <div className="content">
          <p>Hello !! I am a Freelance</p>
          <h1> JavaScript, React, Front-End Developer</h1>
          <div>
            <Link to="/projects" className="btn">
              Projects
            </Link>
            <Link to="/contact" className="btn btn-light">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroImage;
