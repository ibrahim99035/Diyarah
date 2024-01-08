import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Styles/SliderSection.css';

import Building1 from './Images/Buildingds/Building1.webp'
import Building2 from './Images/Buildingds/Building2.webp'
import Building3 from './Images/Buildingds/Building3.webp'
import Building4 from './Images/Buildingds/Building4.webp'
import Building5 from './Images/Buildingds/Building5.webp'
import Building6 from './Images/Buildingds/Building6.webp'
import Building7 from './Images/Buildingds/Building7.webp'
import Building8 from './Images/Buildingds/Building8.webp'
import Building9 from './Images/Buildingds/Building9.webp'


const SliderSection = () => {
  const sliderRef = useRef(null);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
    <div className="background-slide">
        <div>
            <Slider ref={sliderRef} {...settings}>
                <div className="slide">
                    <img src={Building1} alt="Slide 1" className="slide-image" loading="lazy" />
                </div>

                <div className="slide">
                    <img src={Building2} alt="Slide 2" className="slide-image" loading="lazy" />
                </div>

                <div className="slide">
                    <img src={Building3} alt="Slide 3" className="slide-image" loading="lazy" />
                </div>

                <div className="slide">
                    <img src={Building4} alt="Slide 4" className="slide-image" loading="lazy" />
                </div>

                <div className="slide">
                    <img src={Building5} alt="Slide 5" className="slide-image" loading="lazy" />
                </div>

                <div className="slide">
                    <img src={Building6} alt="Slide 6" className="slide-image" loading="lazy" />
                </div>

                <div className="slide">
                    <img src={Building7} alt="Slide 7" className="slide-image" loading="lazy" />
                </div>

                <div className="slide">
                    <img src={Building8} alt="Slide 8" className="slide-image" loading="lazy" />
                </div>

                <div className="slide">
                    <img src={Building9} alt="Slide 9" className="slide-image" loading="lazy" />
                </div>
                
            </Slider>
        </div>

        <div className="navigation-buttons">
            <button onClick={goToPrevSlide}> &lt; السابق</button>
            
            <button onClick={goToNextSlide}>التالي &gt;</button>
        </div>
    </div>
  );
}

export default SliderSection;