import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselSection = () => {
  return (
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
  );
};

export default CarouselSection;
