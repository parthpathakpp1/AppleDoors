import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import './App.css';
import DoorCard from "./components/Doorcard/DoorCard";
import FilterSection from "./components/FilterSection/FilterSection";
import Loader from "./components/loader/Loader";
import CarouselSection from './components/CarouselSection';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Contact from './components/Contact/Contact';
import LandingFooter from './components/Footer/Footer';
import ExtraContent from './components/ExtraContent/ExtraContent';
import ExtraContent2 from './components/ExtraContent2/ExtraContent2';


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
          <CarouselSection />
          <ExtraContent />
          <ExtraContent2 />
          <h1>Apple <span>Doors</span></h1> 
          <FilterSection />
          <div className="door-cards-container">
            <DoorCard
              imageUrl="https://ik.imagekit.io/durian1985/Durian/durian/product/800x800/820210810095326img.jpg?tr=w-453,q-100,f-auto"
              doorName="Door 1"
            />
             <DoorCard
              imageUrl="https://ik.imagekit.io/durian1985/Durian/durian/product/800x800/820210810092957img.jpg?tr=w-453,q-100,f-auto"
              doorName="Door 2"
            />
             <DoorCard
              imageUrl="https://ik.imagekit.io/durian1985/Durian/durian/product/800x800/1020210810102443img.jpg?tr=w-453,q-100,f-auto"
              doorName="Door 3"
              
            />
             <DoorCard
              imageUrl="https://ik.imagekit.io/durian1985/Durian/durian/product/800x800/920210810111126img.jpg?tr=w-453,q-100,f-auto"
              doorName="Door4 "
            />

            <DoorCard
              imageUrl="https://ik.imagekit.io/durian1985/Durian/durian/product/800x800/920210810110256img.jpg?tr=w-453,q-100,f-auto"
              doorName="Door5 "
            />

            <DoorCard
              imageUrl="https://ik.imagekit.io/durian1985/Durian/durian/product/800x800/1220210810105609img.jpg?tr=w-453,q-100,f-auto"
              doorName="Door6 "
            />
 
            <DoorCard
              imageUrl="https://ik.imagekit.io/durian1985/Durian/durian/product/800x800/1020210810105912img.jpg?tr=w-453,q-100,f-auto"
              doorName="Door7 "
            />

            <DoorCard
              imageUrl="https://ik.imagekit.io/durian1985/Durian/durian/product/800x800/1020210810105351img.jpg?tr=w-453,q-100,f-auto"
              doorName="Door8 "
            />
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
