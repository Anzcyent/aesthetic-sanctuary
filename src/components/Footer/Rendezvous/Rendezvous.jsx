import React, { useEffect, useState } from "react";
import "./Rendezvous.scss";

import { useMediaQuery } from "react-responsive";

const Rendezvous = () => {
  const [animateRendezvous, setAnimateRendezvous] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (!isSmallScreen) {
        if (scrollPosition > 2300) {
          setAnimateRendezvous(true);
        } else {
          setAnimateRendezvous(false);
        }
      } else {
        if (scrollPosition > 1500) {
            setAnimateRendezvous(true);
          } else {
            setAnimateRendezvous(false);
          }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <form className={`rendezvous ${animateRendezvous && "active"}`}>
      <h5>Get Rendezvous</h5>

      <div className="individual-info">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Phone" />
      </div>
      <div className="message">
        <textarea rows={5} placeholder="Your message"></textarea>
      </div>

      <button type="button">Send</button>
    </form>
  );
};

export default Rendezvous;
