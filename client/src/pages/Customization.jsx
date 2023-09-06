import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Customization.css";
import axios from "axios";
import { saveAs } from "file-saver";
import { useParams, useSearchParams } from "react-router-dom";
import Header from "../components/Header/Header";
import LandingFooter from "../components/Footer/Footer";

const Customization = () => {
  const { doorName } = useParams();
  const [params] = useSearchParams();
  const id = params.get("id");

  const frontClass = `front-${doorName}`;
  const backClass = `back-${doorName}`;
  const sideClass = `side-${doorName}`;
  const pageClass = `page-${doorName}`;

  const [rotation, setRotation] = useState(0);
  const [imageCss, setImageCss] = useState({
    backgroundImage: `url("http://localhost:8080/api/v1/product/product-photo/${id}")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  });
  const [products, setProducts] = useState([]);
  const [selectedId, setSelectedId] = useState(id);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/product/get-product"
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductNameById = (id) => {
    let productName;
    for (let i = 0; i < products.length; i++) {
      if (products[i]._id == id) {
        const product = products[i];
        productName = product.name;
        break;
      }
    }
    return productName;
  };

  useEffect(() => {
    rotation > -90 && rotation < 90
      ? setImageCss({
          ...imageCss,
          backgroundImage: `url("http://localhost:8080/api/v1/product/product-photo/${selectedId}")`,
        })
      : setImageCss({
          ...imageCss,
          backgroundImage: `url("http://localhost:8080/api/v1/product/product-photo/${selectedId}?photo=secondPhoto")`,
        });
  }, [rotation]);

  useEffect(() => {
    getAllProducts();
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
        setRotation(calc);
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
    <Header />
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
        className="Doorcard-container"
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="door-card">
          <div className="door-content">
            {products?.map((p) => (
              <div
                onClick={() => {
                  setSelectedId(p._id);
                  setImageCss({
                    ...imageCss,
                    backgroundImage: `url("http://localhost:8080/api/v1/product/product-photo/${p._id}")`,
                  });
                }}
                className="item-card"
                key={p._id}
              >
                <div className="item-images">
                  <img
                    src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                    className="item-img"
                    alt={p.name}
                  />

                  <img
                    src={`http://localhost:8080/api/v1/product/product-photo/${p._id}?photo=secondPhoto`}
                    className="item-img"
                    alt={`${p.name} - Second Photo`}
                  />
                </div>
                <div className="item-details">
                  <h5 className="item-title">{p.name}</h5>
                  <p className="item-description">{p.description}</p>
                  <strong>₹{p.price}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        className="sidebar"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#42a5f5" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            handleButtonClick(0);
            setImageCss({
              ...imageCss,
              backgroundImage: `url("http://localhost:8080/api/v1/product/product-photo/${selectedId}")`,
            });
          }}
        >
          Front
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#42a5f5" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            handleButtonClick(180);
            console.log(products);
            setImageCss({
              ...imageCss,
              backgroundImage: `url("http://localhost:8080/api/v1/product/product-photo/${selectedId}?photo=secondPhoto")`,
            });
          }}
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
          onClick={() => {
            handleButtonClick(270);
            let a = document.getElementsByClassName("page-Door");
            console.log(a);
          }}
        >
          Page
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#42a5f5" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            saveAs(
              `http://localhost:8080/api/v1/product/product-photo/${selectedId}?photo=secondPhoto`,
              `${getProductNameById(selectedId)}-back`
            );
            saveAs(
              `http://localhost:8080/api/v1/product/product-photo/${selectedId}`,
              `${getProductNameById(selectedId)}-front`
            );
          }}
        >
          Download
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
            <div style={imageCss} className="front-Door"></div>
            <div className="side-Door"></div>
            <div className="page-Door"></div>
            <div style={imageCss} className="back-Door"></div>
          </motion.div>
        </div>
      </section>
      <LandingFooter />
    </>
  );
};

export default Customization;