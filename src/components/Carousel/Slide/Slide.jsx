import React from "react";
import "./Slide.scss";

const Slide = ({ title, description, photo }) => {
  return (
    <div className="slide">
      <div className="slide-info">
        <h2 className="slide-title">{title}</h2>
        <p className="slide-description">{description}</p>
      </div>

      <img src={photo} alt="slide-photo" className="slide-photo" />
    </div>
  );
};

export default Slide;
