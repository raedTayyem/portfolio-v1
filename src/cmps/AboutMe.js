import "../about.css";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

export default function AboutMe() {
  function loading() {
    document.querySelectorAll(".bar").forEach(function (current) {
      let startWidth = 0;
      const endWidth = current.dataset.size;

      /* 
    setInterval() time sholud be set as trasition time / 100. 
    In our case, 2 seconds / 100 = 20 milliseconds. 
    */
      const interval = setInterval(frame, 20);

      function frame() {
        if (startWidth >= endWidth) {
          clearInterval(interval);
        } else {
          startWidth++;
          current.style.width = `${endWidth}%`;
          current.firstElementChild.innerText = `${startWidth}%`;
        }
      }
    });
  }

  setTimeout(loading, 3400);

  const aboutVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 4 },
    },
    exit: {
      x: "-100vw",
      transition: { duration: 1.5 },
    },
  };

  return (
    <motion.div
      variants={aboutVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="about">
        <div className="meInfo ">
          <div className="aboutSectionContainer">
            <div className="summary">
              <div className="octaWrap">
                <div className="profileImage"></div>
              </div>
              <div className="aboutName">
                <h3>Raed Tayyem</h3>
                {/* <h3>Tayyem</h3> */}
              </div>
              {/* <img src={profileImage} alt="" className="profileImage"/> */}
            </div>
            <ul className="info">
              <li> A Full Stack / Frontend Web Developer,And a very</li>
              <li>curious individual who is always looking for his</li>
              <li>next challenge,With a passion for desgining and</li>
              <li>staying up to date with technology.</li>
              {/* <li>desgining and staying up to date with technology.</li> */}
              {/* A Full Stack / Frontend Web Developer, I'm a very curious person
              who is always looking for his next challenge, I have a passion for
              desgining and staying up to date with technology. */}
            </ul>
          </div>
        </div>

        <Link to="/contact">
          <div className="ContactMe">
            <span>Contact me</span>
          </div>
        </Link>

        <div className="skills">
          <div className="wrapper">
            <div className="skillWrap">
              <h3>Html5</h3>
              <div className="progress-bar">
                <div className="bar" data-size="90">
                  <span className="perc"></span>
                </div>
              </div>
            </div>
            <div className="skillWrap">
              <h3>Css3</h3>
              <div className="progress-bar">
                <div className="bar" data-size="75">
                  <span className="perc"></span>
                </div>
              </div>
            </div>
            <div className="skillWrap">
              <h3>Sass</h3>
              <div className="progress-bar">
                <div className="bar" data-size="65">
                  <span className="perc"></span>
                </div>
              </div>
            </div>
            <div className="skillWrap">
              <h3>JavaScript (ES6)</h3>
              <div className="progress-bar">
                <div className="bar" data-size="60">
                  <span className="perc"></span>
                </div>
              </div>
            </div>
            <div className="skillWrap">
              <h3>React.js</h3>
              <div className="progress-bar">
                <div className="bar" data-size="65">
                  <span className="perc"></span>
                </div>
              </div>
            </div>
            <div className="skillWrap">
              <h3>Angular</h3>
              <div className="progress-bar">
                <div className="bar" data-size="40">
                  <span className="perc"></span>
                </div>
              </div>
            </div>
            <div className="skillWrap">
              <h3>Vue</h3>
              <div className="progress-bar">
                <div className="bar" data-size="30">
                  <span className="perc"></span>
                </div>
              </div>
            </div>
            <div className="skillWrap">
              <h3>MongoDB</h3>
              <div className="progress-bar">
                <div className="bar" data-size="70">
                  <span className="perc"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// A Full Stack / Frontend Web Developer, I'm a very curious person
// who is always looking for his next challenge, I have a passion for desgining and staying up to date with technology.
