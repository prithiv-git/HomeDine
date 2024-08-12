import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';
import imgone from '../../images/Sliderimages/image1.png';
import imgtwo from '../../images/Sliderimages/image2.png';
import imgthree from '../../images/Sliderimages/image3.png';
// import imgfour from '../../images/Sliderimages/image4.png';
import imgfive from '../../images/Sliderimages/image5.png';
import imgsix from '../../images/Sliderimages/image6.png';
import imgseven from '../../images/Sliderimages/image7.png';
import imgeight from '../../images/Sliderimages/image8.png';
import imgnine from '../../images/Sliderimages/image9.png';
import imgten from '../../images/Sliderimages/image10.png';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:7000, // 5 seconds
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <img src={imgone} alt="Slide 1 - Image 1" className="slider-image" />
          <img src={imgfive} alt="Slide 1 - Image 5" className="slider-image zoom-image3" />
          <img src={imgthree} alt="Slide 1 - Image 3" className="slider-image zoom-image4" />
          <img src={imgtwo} alt="Slide 1 - Image 2" className="slider-image  zoom-image5" />
        </div>
        <div className="slide  slide-with-spacing">
          <img src={imgsix} alt="Slide 2 - Image 6" className="slider-image  zoom-image1" />
          <img src={imgseven} alt="Slide 2 - Image 7" className="slider-image zoom-image2" />
          <img src={imgnine} alt="Slide 2 - Image 9" className="slider-image" />
          <img src={imgten} alt="Slide 2 - Image 10" className="slider-image  zoom-image6" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;

