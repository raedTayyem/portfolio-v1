import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <App />
  </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();


//   function sendEmail(e) {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "gmail",
//         "service_8zhfhuq",
//         e.target,
//         "user_CPOFn2xQoacgRIQh8SzEG"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//     setTimeout(function () {
//       //   successMsg.innerHTML = "";
//       e.target.reset();
//     }, 6000);
//   }
