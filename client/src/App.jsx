import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import DoorCard from "./components/Doorcard/DoorCard";
import FilterSection from "./components/FilterSection/FilterSection";
import Loader from "./components/loader/Loader";
import CarouselSection from './components/CarouselSection';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Contact from './components/Contact/Contact';
import ExtraContent from './components/ExtraContent/ExtraContent';
import ExtraContent2 from './components/ExtraContent2/ExtraContent2';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header'
import LandingFooter from './components/Footer/Footer';
import productData from './productData.json'




const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  return (
    <>
      {loaded ? (
        <>
          <Header />
          <ToastContainer />
          <CarouselSection />
         
          <ExtraContent />
          <ExtraContent2 />
          <h1>Apple <span>Doors</span></h1> 
          <FilterSection />
          <div className="door-cards-container">
          {productData.map((product) => (
  <DoorCard
    key={product.imageUrl}
    imageUrl={product.imageUrl}
    doorName={product.doorName}
    price={product.price} // Pass the price property
  />
))}
        </div>
          <WhyChooseUs />
          <Contact />
          <LandingFooter />
        </>
      ) : (
        <Loader />
      )}
     
    </>
  );
};

export default App;
