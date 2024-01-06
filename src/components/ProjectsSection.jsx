import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './Styles/ProjectsSection.css'; 
import image1 from './Images/projects/1.jpg'
import image2 from './Images/projects/2.jpg'
import image3 from './Images/projects/3.jpg'
import image4 from './Images/projects/4.jpg'
import image5 from './Images/projects/5.jpg'
import image6 from './Images/projects/6.jpg'
import image7 from './Images/projects/7.jpg'
import image8 from './Images/projects/8.jpg'
import image9 from './Images/projects/9.jpg'
import image10 from './Images/projects/10.jpg'

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

const ProjectsSection = ({ cards }) => {
  const totalCards = cards.length;
  const totalVisibleCards = 5; 
  const totalRenderedCards = totalVisibleCards * 3; 
  const [startIndex, setStartIndex] = useState(0);

  const handleNavigation = (direction) => {
    let newIndex;

    if (direction === 'next') {
      newIndex = (startIndex - 1 + totalRenderedCards) % totalRenderedCards;
    } else {
      newIndex = (startIndex + 1) % totalRenderedCards;
    }

    setStartIndex(newIndex);
  };

  const renderCards = () => {
    const renderedCards = [];
    for (let i = 0; i < totalVisibleCards; i++) {
      const index = (startIndex + i) % totalRenderedCards;
      renderedCards.push(
        <div key={index} className="card">
          <img src={images[index % totalCards]} alt= {cards[index % totalCards].title} id='cardImage' />
          <h3>{cards[index % totalCards].title}</h3>
          <p>{cards[index % totalCards].description}</p>
        </div>
      );
    }
    return renderedCards;
  };

  return (
    <div className="card-slider" id='projects'>
      <h2>مشاريعنا</h2>
      <div className="card-container">{renderCards()}</div>
      <div className="navigation-buttons">
        <button onClick={() => handleNavigation('prev')}>&lt; السابق</button>
        <button onClick={() => handleNavigation('next')}>التالي &gt;</button>
      </div>
    </div>
  );
};
export default ProjectsSection;