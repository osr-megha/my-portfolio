import React from "react";
import { Link } from "react-router-dom";
import "./aboutcontent.css";

const AboutContent = () => {
  return (
    <React.Fragment>
      <div className="about">
        <div className="left">
          <h1>Who Am I</h1>
          <p>
            Developing highly interactive Front-End User Interfaces for your web
            and mobile applications
          </p>
          <p>Writing simple content structure & clean design patterns </p>
          <Link to="/contact">
            <button className="btn">Contact</button>
          </Link>
        </div>
        <div className="right">
          <div className="imgContainer">
            <div className="imgStack top">
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
                alt="Html5"
                className="img"
              />
            </div>
            <div className="imgStack bottom ">
              <img
                src="https://cdn-icons-png.flaticon.com/512/331/331383.png"
                alt="css"
                className="img"
              />
            </div>
            <div className="imgStack top">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1199/1199124.png"
                alt="JavaScript"
                className="img"
              />
            </div>
            <div className="imgStack bottom">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3334/3334886.png"
                alt="React"
                className="img"
              />
            </div>
            <div className="imgStack top">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
                alt="Typescript"
                className="img"
              />
            </div>
            <div className="imgStack bottom">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"
                alt="Bootstrap"
                className="img"
              />
            </div>
            <div className="imgStack top">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968358.png"
                alt="Sass"
                className="img"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutContent;
