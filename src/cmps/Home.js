import "../Home.css";
import React, { useEffect, useState } from "react";
import SimplexNoise from "simplex-noise";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import {vw, vh, vmin, vmax} from 'react-native-viewport-units';

export default function Home() {
  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };
  window.addEventListener("resize", appHeight);
  appHeight();

  const mount = () => {
    class Tool {
      // random number.
      static randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
    }

    /*
      When want to use angle.
    */

    class Angle {
      constructor(angle) {
        this.a = angle;
        this.rad = (this.a * Math.PI) / 180;
      }

      incDec(num) {
        this.a += num;
        this.rad = (this.a * Math.PI) / 180;
        return this.rad;
      }
    }

    class Time {
      constructor(time) {
        this.startTime = time;
        this.lastTime = 0;
        this.elapsedTime = 0;
      }

      getElapsedTime() {
        this.lastTime = Date.now();
        this.elapsedTime = (this.startTime - this.lastTime) * -1;
        return this.elapsedTime;
      }
    }

    /*
      When want to use time.
    */
    let canvas;
    const simplex = new SimplexNoise();

    class Canvas {
      constructor(bool) {
        // create canvas.
        this.canvas = document.getElementById("canvas");
        // if on screen.

        this.ctx = this.canvas.getContext("2d");
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
        // this.ctx.globalAlpha = 1 - (this.mouseY/ (this.height));
        // mouse infomation.
        this.mouseX = null;
        this.mouseY = this.height - this.height / 10;
        // shape
        this.shapeNum = 1;
        this.shapes = [];
        // time
        this.time = new Time(Date.now());
      }

      // init, render, resize
      init() {
        for (let i = 0; i < this.shapeNum; i++) {
          const s = new Shape(this.ctx, 0, this.height / 2);
          this.shapes.push(s);
        }
      }

      render() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < this.shapes.length; i++) {
          this.shapes[i].render(i);
        }
      }

      resize() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
        this.init();
      }
    }

    class Shape {
      constructor(ctx, x, y) {
        this.ctx = ctx;
        this.init(x, y);
      }

      init(x, y) {
        this.x = x;
        this.y = y;
        this.a = new Angle(Tool.randomNumber(0, 240));
        this.step = canvas.width / 360;
        this.t = 4000;
      }

      draw() {
        this.y = canvas.mouseY;
        const ctx = this.ctx;
        ctx.save();
        ctx.fillStyle = "black";
        ctx.lineJoin = "bevel";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        for (let x = 0; x < canvas.width; x += this.step) {
          // ctx.globalAlpha = (canvas.mouseY/ (canvas.height))*1.2;
          // if(ctx.globalAlpha<0.5){
          //   ctx.globalAlpha += 0.5 - ctx.globalAlpha;
          // }

          const noise =
            simplex.noise3D(x / 200, 200, this.a.rad) *
            ((canvas.height - canvas.mouseY) / 4);
          ctx.strokeStyle = "white";
          var my_gradient = ctx.createLinearGradient(
            0,
            0,
            0,
            canvas.height * 1.2
          );
          my_gradient.addColorStop(0, "#e4f4f50a");
          my_gradient.addColorStop(1, "rgb(3, 144, 232)");
          ctx.fillStyle = my_gradient;
          // ctx.fillStyle = `rgb(3, 144, 232)`;
          // if(this.y < 0.25*window.innerHeight){
          //   this.y = 0.25*window.innerHeight
          // }
          const y = Math.sin((x * Math.PI) / 180 / 2) * noise + this.y;
          ctx.lineTo(x * this.step, y);
        }
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        // ctx.stroke();
        ctx.fill();
        ctx.restore();
      }

      updateParams() {
        this.a.incDec(1);
      }

      render() {
        this.draw();
        this.updateParams();
      }
    }
    (function () {
      canvas = new Canvas(true);
      canvas.init();

      function render() {
        window.requestAnimationFrame(function () {
          canvas.render();
          render();
        });
      }

      render();

      // event
      window.addEventListener(
        "resize",
        function () {
          canvas.resize();
        },
        false
      );

      window.addEventListener(
        "mousemove",
        function (e) {
          canvas.mouseY = e.clientY;
        },
        false
      );
    })();
  };

  useEffect(mount);
  const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  const scaleValue = 10;
  const yValue = -(vh * 2);
  //   console.log(scaleValue);
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7 },
    },
    exit: {
      y: yValue,
      scale: scaleValue,
      opacity: 0.4,
      transition: { duration: 1.4 },
    },
  };

  const [color, setColor] = useState("#48b4a5");
  const [buttonBackground, setButtonBackground] = useState("");
  const [canvasDisplay, setCanvasDisplay] = useState("1");

  return (
    <motion.div
      className="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="Home">
        <div className="main">
          <canvas id="canvas" style={{ opacity: canvasDisplay }}></canvas>
          <div className="me container">
            <div className="name">
              <h1>RAED </h1>
              <h1>TAYYEM</h1>
            </div>
            <Link to="/aboutMe">
              <div
                className={`button ${buttonBackground}`}
                style={{ color: color }}
                onClick={() => {
                  setColor("transparent");
                  setButtonBackground("buttonBackground");
                  setCanvasDisplay("0");
                }}
              >
                <span>About me</span>
              </div>
            </Link>
            <div className="aboutLink">
              <h2>a full-stack web developer</h2>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
