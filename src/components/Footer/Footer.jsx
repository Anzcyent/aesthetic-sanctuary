import React from "react";
import "./Footer.scss";
import Rendezvous from "./Rendezvous/Rendezvous";

const Footer = () => {
  return (
    <footer id="rendezvous">
      <div className="footer-el">
        <div className="circle"></div>
      </div>
      <div className="footer-el">
        <div className="container">
          <h4>Aesthetic Sanctuary</h4>

          <p>
            Discover a world of beauty and wellness at Aesthetic Sanctuary.
            Immerse yourself in a sanctuary of relaxation and rejuvenation,
            where expert professionals provide personalized services to enhance
            your natural beauty. Experience our range of premium skincare
            treatments, innovative beauty products, and holistic wellness
            services. Unleash your inner radiance and elevate your self-care
            rituals with us. Your journey to beauty begins here.
          </p>

          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#products">Products</a>
              </li>
            </ul>
          </nav>

          <div className="extra">
            <span>
              <i className="fa-brands fa-whatsapp"></i> +90 546 717 74 21
            </span>
            <span>
              <i className="fa-brands fa-instagram"></i> anzcyent
            </span>
          </div>
        </div>
      </div>
      <Rendezvous />
    </footer>
  );
};

export default Footer;
