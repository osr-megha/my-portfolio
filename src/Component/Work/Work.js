import React from "react";
import "./work.css";
import WorkCard from "./WorkCard";
import WorkData from "./WorkData";

const Work = () => {
  return (
    <div className="work">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
      {
        WorkData.map((val, ind) =>{
          return(
            <WorkCard 
            key={ind}
            img={val.img}
            title={val.title}
            text={val.text}
            view={val.view}
            source={val.source}
            />
          )
        })
      }
      </div>
    </div>
  );
};

export default Work;
