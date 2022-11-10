import React from "react";
import "./mainContent.css";
import myImg from "../../Assests/myImg.jpg";


const MainContent = ({heading, text}) => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={myImg} alt="myImage" />
      </div>
      <div className="content">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default MainContent;
