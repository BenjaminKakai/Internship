import React from 'react';
import Slider from 'react-slick';
import './Portfolio.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Portfolio() {
  const images = [
    { name: 'photo2.jpg', label: 'Manufacturing' },
    { name: 'photo3.jpg', label: 'Retail' },
    { name: 'photo4.jpg', label: 'Technology Companies' },
    { name: 'photo5.jpg', label: 'Finance and Insurance' },
    { name: 'photo6.jpg', label: 'Computer Vision Solutions' },
    { name: 'photo7.jpg', label: 'NLP' },
    // 'photo8.jpg', 
    // 'photo9.jpg',
    // 'photo10.jpg', 
    // 'photo11.jpg', 
    // 'photo12.jpg', 
    // 'photo13.jpg',
  ];

  const settings = {
    dots: true,
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

  return (
    <section id="portfolio" className="portfolio py-3" style={{ textAlign: 'center', margin: '0 auto' }}>
      <br /><br /><br /><br /><br />
      <h3 className="text-center">Company Portfolio</h3>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="item" key={index}>
            <img src={`/images/${image.name}`} alt={`Portfolio item ${index}`} />
            <p>{image.label}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Portfolio;

