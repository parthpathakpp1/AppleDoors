import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselSection.css';
const CarouselSection = () => {
  return (
    <Carousel infiniteLoop autoPlay showArrows showStatus={false} showThumbs={false}>
      <div className="banner-slide">
        <img src="https://saina-doors.com/wp-content/uploads/slider/cache/4b58cd065323067cb38f904204d2bdc7/banner1.webp" alt="Image 1" />
        <div className="banner-content">
          <h2 className="heading">Grace your living space with exotic foreign designs</h2>
          <p className="subheading">Customized And Handcrafted Doors In All Price Ranges</p>
          <button className="discover-button">Discover Now</button>
        </div>
      </div>
      <div className="banner-slide">
        <img src="https://saina-doors.com/wp-content/uploads/slider/cache/a272804213a858e6cddcceb3516351b1/slider3-2.jpg" alt="Image 2" />
        <div className="banner-content">
          <h2 className="heading">Unique Designs for Different Styles</h2>
          <p className="subheading">Customized And Handcrafted Doors In All Price Ranges</p>
          <button className="discover-button">Discover Now</button>
        </div>
      </div>
      <div className="banner-slide">
        <img src="https://saina-doors.com/wp-content/uploads/slider/cache/d81160f8946620e27c19576ccc339068/slider2.jpg" alt="Image 3" />
        <div className="banner-content">
          <h2 className="heading">Modern Design Door Manufacturers In India</h2>
          <p className="subheading">Customized And Handcrafted Doors In All Price Ranges</p>
          <button className="discover-button">Discover Now</button>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselSection;
