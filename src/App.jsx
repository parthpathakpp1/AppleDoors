import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import './App.css';
import DoorCard from "./components/Doorcard/DoorCard";

const App = () => {
  return (
    <>
      <Header />
      <h1>Apple Doors</h1> 
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
          doorName="Door 6"
        />
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
          doorName="Door 6"
        />
      </div>
    </>
  );
};

export default App;
