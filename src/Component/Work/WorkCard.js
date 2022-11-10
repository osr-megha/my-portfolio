import React from "react";
import "./work.css";

const WorkCard = (d) => {
  return (
    <React.Fragment>
          <div className="project-card">
            <img src={d.img} alt="" />
            <h2 className="project-title">{d.title}</h2>
            <div className="pro-details">
              <p>{d.text}</p>
              <div className="pro-btns">
                <a href={d.view} target="_blank" rel="noreferrer" className="btn">
                  View
                </a>
                <a href={d.source} target="_blank" rel="noreferrer" className="btn">
                  Source
                </a>
              </div>
            </div>
          </div>
    </React.Fragment>
  );
};

export default WorkCard;
