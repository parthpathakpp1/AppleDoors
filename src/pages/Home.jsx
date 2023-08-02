// Home.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from '../components/Header/Header';
import DoorCard from '../components/Doorcard/DoorCard';

const Home = () => {
  return (
    <>
      <Header />
      <Carousel infiniteLoop autoPlay showArrows showStatus={false} showThumbs={false}>
        <div>
          <img src="https://saina-doors.com/wp-content/uploads/2021/08/slider2.jpg" alt="Image 1" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="https://saina-doors.com/wp-content/uploads/2021/08/banner.jpg" alt="Image 2" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="https://saina-doors.com/wp-content/uploads/2021/08/slider3.jpg" alt="Image 3" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
      <div className="door-cards-container">
        <DoorCard imageUrl="/Door1.png" doorName="Door 1" />
        <DoorCard imageUrl="/Door2.png" doorName="Door 2" />
        <DoorCard imageUrl="/Door3.png" doorName="Door 3" />
        <DoorCard imageUrl="/Door1.png" doorName="Door 1" />
        <DoorCard imageUrl="/Door2.png" doorName="Door 2" />
        <DoorCard imageUrl="/Door3.png" doorName="Door 3" />
        </div>
    </>
  );
};

export default Home;
