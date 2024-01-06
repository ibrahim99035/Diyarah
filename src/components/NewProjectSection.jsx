import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Styles/ProjectsSection.css'; 

import image1 from './Images/Buildingds/Building1.jpg'
import image2 from './Images/Buildingds/Building2.jpg'
import image3 from './Images/Buildingds/Building3.jpg'
import image4 from './Images/Buildingds/Building4.jpg'
import image5 from './Images/Buildingds/Building5.jpg'
import image6 from './Images/Buildingds/Building6.jpg'
import image7 from './Images/Buildingds/Building7.jpg'
import image8 from './Images/Buildingds/Building8.jpg'
import image9 from './Images/Buildingds/Building9.jpg'
import image10 from './Images/Buildingds/Building10.jpg'


const ProjectsSection = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  
  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };
  return (
    
    <div className="projects-background-slide">
        <h2>اخر المشاريع لدينا</h2>
        <Slider ref={sliderRef} {...settings}>
            <div className="card">
                <img src={image1} alt="Building 1" id='cardImage' />
                <h3>Heading</h3>
                <p>Paragraph</p>
            </div>
            <div className="card">
                <img src={image2} alt="Building 1" id='cardImage' />
                <h3>Heading</h3>
                <p>Paragraph</p>
            </div>
            <div className="card">
                <img src={image3} alt="Building 1" id='cardImage' />
                <h3>Heading</h3>
                <p>Paragraph</p>
            </div>
            <div className="card">
                <img src={image4} alt="Building 1" id='cardImage' />
                <h3>Heading</h3>
                <p>Paragraph</p>
            </div>
            <div className="card">
                <img src={image5} alt="Building 1" id='cardImage' />
                <h3>Heading</h3>
                <p>Paragraph</p>
            </div>
            <div className="card">
                <img src={image6} alt="Building 1" id='cardImage' />
                <h3>Heading</h3>
                <p>Paragraph</p>
            </div>
            <div className="card">
                <img src={image7} alt="Building 1" id='cardImage' />
                <h3>Heading</h3>
                <p>Paragraph</p>
            </div>
            <div className="card">
                <img src={image8} alt="Building 1" id='cardImage' />
                <h3>Heading</h3>
                <p>Paragraph</p>
            </div>
            <div className="card">
                <img src={image9} alt="Building 1" id='cardImage' />
                <h3>Heading</h3>
                <p>Paragraph</p>
            </div>
            <div className="card">
                <img src={image10} alt="Building 1" id='cardImage' />
                <h3>Heading</h3>
                <p>Paragraph</p>
            </div>  
        </Slider>

        <div className="navigation-buttons">
            <button onClick={goToPrevSlide}> &lt; السابق</button>
            
            <button onClick={goToNextSlide}>التالي &gt;</button>
        </div>

    </div>
  );
};
export default ProjectsSection;