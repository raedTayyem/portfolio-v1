import "../contact.css";
import { motion } from "framer-motion";
import React from "react";
import emailjs from "emailjs-com";


export default function Contact() {

  const switchTheme = (e) => {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  };


  function sendEmail(e) {
        e.preventDefault();
    
        emailjs
          .sendForm(
            "service_g17ced5",
            "template_6vdvo69",
            e.target,
            "user_CPOFn2xQoacgRIQh8SzEG"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        setTimeout(function () {
          //   successMsg.innerHTML = "";
          e.target.reset();
        }, 6000);
      }

  const contactVariants = {
    initial: {
      // opacity: 0,
      x: "100vw",
      scale: 1,
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1.5 },
    },
    exit: {
      opacity: 0,
      // x: "100vw",
      scale: 1.2,
      transition: { duration: 3 },
    },
  };

  const contactTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1.5,
  };

  return (
    <motion.div
      transition={contactTransition}
      variants={contactVariants}
      initial="initial"
      animate="in"
      exit="exit"
    >
      <div className="contact">
        <div className="left-col"></div>
        <div className="right-col">
          <div className="theme-switch-wrapper">
            <label
              className="theme-switch"
              onChange={switchTheme}
            >
              <input type="checkbox" id="checkbox" />
              <div className="slider round"></div>
            </label>
            <div className="description">Dark Mode</div>
          </div>

          <h1>Contact me</h1>
          <p>
            Searching for a Full-Stack or Front-End developer? you want your
            next website to look the best.
          </p>

          <form onSubmit={sendEmail}>
            <label>Subject</label>
            <input
              type="subject"
              id="subject"
              name="subject"
              placeholder="Subject"
              required
            />
            <label>Full name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <label>Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email Address"
              required
            />
            <label>Message</label>
            <textarea
              rows="6"
              placeholder="Your Message"
              id="message"
              name="message"
              required
            ></textarea>
            <button type="submit" id="submit" name="submit">
              Send
            </button>
          </form>

          <div id="error"></div>
          <div id="success-msg"></div>
        </div>
      </div>
    </motion.div>
  );
}
