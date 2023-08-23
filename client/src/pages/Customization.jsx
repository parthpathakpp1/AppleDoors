import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header/Header";
import "./Customization.css";
import { useParams } from "react-router-dom";

const Customization = () => {
  
  const { doorName} = useParams();

  const frontClass = `front-${doorName}`;
  const backClass = `back-${doorName}`;
  const sideClass=`side-${doorName}`;
  const pageClass=`page-${doorName}`;


  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const section = document.querySelector(".door-showcase");
    const book = document.querySelector(".door");
    const body = document.querySelector("body");

    let prev = 0;
    let calc = 0;
    const sensitivity = 2;

    const handleMouseDown = (e) => {
      const x = e.clientX;

      const handleMouseMove = (e) => {
        calc = (e.clientX - x) / sensitivity;
        book.style.transform = `rotateY(${calc + prev}deg)`;
        body.style.cursor = "grabbing";
      };

      section.addEventListener("mousemove", handleMouseMove);

      const handleMouseUp = () => {
        section.removeEventListener("mousemove", handleMouseMove);
        body.style.cursor = "default";
      };

      window.addEventListener("mouseup", handleMouseUp);
    };

    if (section) {
      section.addEventListener("mousedown", handleMouseDown);
    }

    return () => {
      if (section) {
        section.removeEventListener("mousedown", handleMouseDown);
      }
    };
  }, []);

  const handleButtonClick = (angle) => {
    setRotation(angle);
  };

  return (
    <>

      <div className="customization-page">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Customization
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          This is the customization page of {doorName}.
        </motion.p>
      </div>
      <motion.div
        className="sidebar"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#42a5f5" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleButtonClick(0)}
        >
          Front
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#42a5f5" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleButtonClick(180)}
        >
          Back
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#42a5f5" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleButtonClick(90)}
        >
          Side
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#42a5f5" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleButtonClick(270)}
        >
          Page
        </motion.button>
      </motion.div>
      <section id="design" className="door-showcase">
        <div className="wrapper">
          <motion.div
            className="door"
            style={{ transform: `rotateY(${rotation}deg)` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className={frontClass}></div>
            <div className={sideClass}></div>
            <div className={backClass}></div>
            <div className={pageClass}></div>
            <div className="shadow"></div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Customization;
