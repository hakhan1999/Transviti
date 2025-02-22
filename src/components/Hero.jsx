import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-sec h1,.hero-sec p",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 1 }
    );
    gsap.fromTo(
      ".hero-bottom",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 2 }
    );
    gsap.fromTo(
      ".video-sec video",
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1, delay: 3 }
    );
  }, []);

  return (
    <section className="hero-sec" id="hero">
      <div className="wrapper">
        <div className="video-sec">
          <video
            className="hero-video"
            src="src/assets/hero-sec-video.webm"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className="content">
          <h1>Your shortcut to everything.</h1>
          <p>
            A collection of powerful productivity tools all within an extendable
            launcher. Fast, ergonomic and reliable.
          </p>
        </div>
        <div className="hero-bottom">
          <div className="hero-btns">
            <Link to="#" className="mac white-btn">
              <img src="src/assets/apple.svg" alt="Apple Icon" />
              <span>Download for Mac</span>
            </Link>
            <Link to="#" className="windows black-btn">
              <img src="src/assets/windows.svg" alt="Windows Icon" />
              <span>Join Windows Waitlist</span>
            </Link>
          </div>
          <div className="versions">
            v1.91.2 | macOS 12+ | Install via homebrew
          </div>
          <div className="glowing-btn">
            <div className="glowing-btn-wrapper animate">
              <Link className="btn-anchor" to="#">
                <span className="introducing">Introducing Raycast Focus</span>
                <span className="btn-span">
                  Learn more
                  <img src="src/assets/arrow-learn.svg" alt="Arrow" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
