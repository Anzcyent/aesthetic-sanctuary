import React from "react";
import "./Services.scss";

import { services } from "../../api/dummy.json";
import Service from "./Service/Service";

const Services = () => {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>

      <p className="services-section-description">
        Upgrade your beauty routine with our premium services, where our expert
        team of professionals will provide you with personalized care and
        attention to enhance your natural features.
      </p>

      <div className="services" id="services">
        {services.map((service) => (
          <Service
            key={service.id}
            title={service.title}
            description={service.description}
            photo={service.photo}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
