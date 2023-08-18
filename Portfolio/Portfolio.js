import React from 'react';
import Slider from 'react-slick';
import './Portfolio.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Portfolio() {
const images = [
  { name: 'images/Manufacturing.jpg', label: 'Manufacturing', description: 'Intelliverse offers top-tier data analytics consulting using cutting-edge technology.', url: 'https://intelliverseai.com/data-analytics-consulting-services/' },
  { name: 'images/Retail.jpg', label: 'Retail', description: 'Intelliverse enhances retail through impactful AI solutions. How can we assist you?', url: 'https://intelliverseai.com/retail/' },
  { name: 'images/Technology Companies.jpg', label: 'Technology Companies', description: 'Inteliverse elevates software across industries with AI module incorporation.', url: 'https://intelliverseai.com/technology-companies/' },
  { name: 'images/fintech.jpg', label: 'Finance and Insurance', description: 'Inteliverse is at the forefront of digital transformation in finance and insurance through Big Data, AI, and Machine Learning.', url: 'https://intelliverseai.com/finance-insurance/' },
  { name: 'images/Computer Vision Solutions.jpg', label: 'Computer Vision Solutions', description: 'Boost operations with Inteliverse’s computer vision solutions.', url: 'https://intelliverseai.com/computer-vision-solution/' },
  { name: 'images/NLP.jpg', label: 'NLP', description: 'Inteliverse provides comprehensive Natural Language Processing solutions.', url: 'https://intelliverseai.com/nlp-solutions/' },
];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      { breakpoint: 1000, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 0, settings: { slidesToShow: 1 } }
    ]
  };

 return (
    <section id="portfolio" className="portfolio py-3" style={{ textAlign: 'center', margin: '0 auto' }}>
      <br /><br /><br /><br /><br />
      <h3 className="text-center">Click on Different Company Portfolios to Learn More.....</h3>
      
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="item" key={index}>
            <div className="image-container">
              <h4 className="image-heading">{image.label}</h4> {/* Moved above the anchor tag */}
              <a href={image.url} target="_blank" rel="noopener noreferrer">
                <img src={`/${image.name}`} alt={`Portfolio item ${index}`} />
              </a>
              <p className="image-description">{image.description}</p> {/* Moved below the image */}
              <a href={image.url} className="read-more-button" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Portfolio;

