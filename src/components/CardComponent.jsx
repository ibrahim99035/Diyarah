// CardComponent.jsx
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import './Styles/CardComponent.css'

import image1 from '/Images/Buildingds/NargesBuildings.webp'
import image2 from '/Images/Buildingds/Damaam.webp'
import image3 from '/Images/Buildingds/Safa.webp'
import image4 from '/Images/Buildingds/TheViewProject.webp'

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
          description="مجمع سكني مبني بتقنيات حديثة في حي النرجس بالرياض، يتميز بالموقع الاستراتيجي بالقرب من المطار وجامعة الأميرة نورة والمولات التجارية. توفر الشقق أنظمة ذكية للراحة والأمان." 
          partID = "projectPartId1" 
        />
        <CardItem 
          imgSrc={image2} 
          title="Gulf Square" 
          description="عمارة تجارية في حي الغدير بالدمام، تتكون من طوابق مخصصة للمعارض التجارية والمكاتب والشركات، بموقع استراتيجي على طريق الخليج الساحلي بمساحة 3600م. تهدف لتوفير بيئة عمل مثالية للشركات والعملاء." 
          partID = "projectPartId2" 
        />
        <CardItem 
          imgSrc={image3} 
          title="Safa Villas" 
          description="مشروع فلل سكنية في حي الصفا بالاحساء. يضم 6 فلل بتصاميم داخلية مذهلة ومساحات شاسعة. بمساحة 529م لكل فيلا. يوفر حلول سكنية اقتصادية مع خيارات متعددة للعائلات." 
          partID = "projectPartId3" 
        />
        <CardItem 
          imgSrc={image4} 
          title="The View" 
          description="ديارة العقارية تُقدم فرصة استثمارية في مدينة الإحساء: فندق سياحي 4 نجوم، 120 غرفة، 10 معارض، مواقف لـ 200 سيارة، مساحات تجارية، ملاعب، مسطحات خضراء، وجهة تسوق." 
          partID = "projectPartId4" 
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
