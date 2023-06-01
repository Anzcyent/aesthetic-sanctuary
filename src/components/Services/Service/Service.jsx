import React from "react";
import "./Service.scss";

const Service = ({title, description, photo}) => {
  return (
    <div className="service">
      <div className="service-header">
        <img src={photo} alt="service-photo" />
      </div>
      <div className="service-body">
        <h5>{title}</h5>
      </div>
    </div>
  );
};

export default Service;
