// CardComponent.jsx
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import './Styles/CardComponent.css'

import image1 from './Images/Buildingds/NargesBuildings.webp'
import image2 from './Images/Buildingds/Damaam.webp'
import image3 from './Images/Buildingds/Safa.webp'

const CardComponent = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px', // Adjust rootMargin as needed for your design
  });

  const animationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 100%, 0)',
  });

  return (
    <animated.div ref={ref} style={animationProps} className="cardComponent">
      <h2>اخر المشاريع لدينا</h2>
      {/* Your card content goes here (image, title, short description) */}
      <div className="animatedCardComponent">
        <CardItem 
          imgSrc={image1}  
          title="The Loft" 
          description="مجمع سكني فاخر يتألق بأربعة أبراج زجاجية فريدة. يجمع بين التصميم العصري والراحة الفاخرة، ويوفر للسكان بيئة حياة استثنائية مع مناطق خضراء جذابة ومرافق ترفيهية متكاملة." 
          partID = "projectPartId1" 
        />
        <CardItem 
          imgSrc={image2} 
          title="Gulf Square" 
          description="تتألق في مدينة الدمام، بتصميم حديث يجمع بين الأناقة والتكنولوجيا. بيئة سكنية مريحة ومرافق شاملة، مع لمسات فنية تعكس تراث المدينة" 
          partID = "projectPartId2" 
        />
        <CardItem 
          imgSrc={image3} 
          title="Safa Villas" 
          description="مشروع سكني فاخر يتميز بالأناقة والفخامة. تقدم تصاميم معمارية رائعة ومساحات داخلية فاخرة، و هي وجهة مثالية للعيش الراقي." 
          partID = "projectPartId3" 
        />
      </div>
    </animated.div>
  );
};

const CardItem = ({ imgSrc, title, description, partID }) => {
  return (
    <div className="cardDiv">
      <img src={imgSrc} alt={`Card Image for ${title}`} loading="lazy" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CardComponent;
