import React, { useRef } from 'react';
import Slider from 'react-slick';
import './Portfolio.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Portfolio() {
  const images = [
    'photo2.jpg', 'photo3.jpg', 'photo4.jpg', 'photo5.jpg',
    'photo6.jpg', 'photo7.jpg', 'photo8.jpg', 'photo9.jpg',
    'photo10.jpg', 'photo11.jpg', 'photo12.jpg', 'photo13.jpg',
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 0,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const sliderRef = useRef(null);

  const nextSlide = () => {
    sliderRef.current.slickNext();
  }

  return (
    <section id="portfolio" className="portfolio py-3" style={{ textAlign: 'center', margin: '0 auto' }}>
      <h3 className="text-center">Company Portfolio</h3>
      <h2 className="text-center">Our Latest <span className="text-secondary">Case Studies</span></h2>
      <p className="text-center">
        We help you see the world differently, discover opportunities you may never have 
        <br /> imagined and achieve results that bridge what is with what can be
      </p>
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div className="item" key={index}>
            <img src={`/images/${image}`} alt={`Portfolio item ${index}`} /> {/* Reference from root */}
          </div>
        ))}
      </Slider>
      <button onClick={nextSlide}>Go to Next Portfolio Item</button>
    </section>
  );
}

export default Portfolio;

