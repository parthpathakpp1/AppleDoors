import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import './App.css';
import DoorCard from "./components/Doorcard/DoorCard";
<<<<<<< HEAD
import FilterSection from "./components/FilterSection/FilterSection";
import Loader from "./components/loader/Loader";

=======
>>>>>>> 4306cf5c375e25bc65388225334333380747db3d

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
          <h1>Apple <span>Doors</span></h1> 
          <FilterSection />
          <div className="door-cards-container">
            <DoorCard
              imageUrl="/Door1.png"
              doorName="Door 1"
            />
             <DoorCard
              imageUrl="/Door2.png"
              doorName="Door 2"
            />
             <DoorCard
              imageUrl="/Door3.png"
              doorName="Door 3"
            />
             <DoorCard
              imageUrl="/Door1.png"
              doorName="Door 4"
            />
             <DoorCard
              imageUrl="/Door2.png"
              doorName="Door 5"
            />
             <DoorCard
              imageUrl="/Door3.png"
              doorName="Door "
            />
               <DoorCard
              imageUrl="/Door1.png"
              doorName="Door 6"
            />
             <DoorCard
              imageUrl="/Door2.png"
              doorName="Door 1"
            />
             <DoorCard
              imageUrl="/Door3.png"
              doorName="Door 1"
            />
             <DoorCard
              imageUrl="/Door1.png"
              doorName="Door 1"
            />
             <DoorCard
              imageUrl="/Door2.png"
              doorName="Door 1"
            />
             <DoorCard
              imageUrl="/Door3.png"
              doorName="Door 1"
            />
          
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default App;
