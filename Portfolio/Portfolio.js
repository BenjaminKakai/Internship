import React from 'react';
import Slider from 'react-slick';
import './Portfolio.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Portfolio() {
  const images = [
    { name: 'images/Manufacturing.jpg', label: 'Manufacturing', description: 'Intelliverse employs cutting-edge technology to provide top-tier data analytics consulting.', url: 'https://intelliverseai.com/data-analytics-consulting-services/' },
    { name: 'images/Retail.jpg', label: 'Retail', description: 'Artificial intelligence (AI) has transcended its buzzword status and is now making a tangible impact on the retail industry. In what ways can Intelliverse assist?', url: 'https://intelliverseai.com/retail/' },
    { name: 'images/Technology Companies.jpg', label: 'Technology Companies', description: 'Inteliverse has helped Companies in Incorporating Artificial Intelligence (AI) modules enhances the capabilities of software across industries.', url: 'https://intelliverseai.com/technology-companies/' },
    { name: 'images/fintech.jpg', label: 'Finance and Insurance', description: 'Inteliverse Recognizes that Financial and insurance services have emerged as frontrunners in the realm of digital transformation, eagerly embracing the potential offered by Big Data, Data Engineering, AI, and Machine Learning.', url: 'https://intelliverseai.com/finance-insurance/' },
    { name: 'images/Computer Vision Solutions.jpg', label: 'Computer Vision Solutions', description: 'Let Inteliverse Help you Boost operations with computer vision solutions.', url: 'https://intelliverseai.com/computer-vision-solution/' },
    { name: 'images/NLP.jpg', label: 'NLP', description: 'Inteliverse has Got you on Natural Language Processing.', url: 'https://intelliverseai.com/nlp-solutions/' },
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
            <a href={image.url} target="_blank" rel="noopener noreferrer">
              <h4 className="image-heading">{image.label}</h4>
              <div className="image-container">
                <img src={`/${image.name}`} alt={`Portfolio item ${index}`} />
                <p className="image-description">{image.description}</p>
                <a href={image.url} className="read-more-button" target="_blank" rel="noopener noreferrer">Read More</a> {/* Read More button */}
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Portfolio;

