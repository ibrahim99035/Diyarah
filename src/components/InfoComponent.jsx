// InfoComponent.jsx
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import './Styles/InfoComponent.css';

import image1 from '/Images/Buildingds/NargesBuildings.webp'
import image2 from '/Images/Buildingds/Damaam.webp'
import image3 from '/Images/Buildingds/Safa.webp'
import image4 from '/Images/Buildingds/TheViewProject.webp'

const InfoComponent = () => {
  return (
    <div>
      <InfoPart
        title="The Loft" 
        description= {`
          يقدم "THE LOFT” مفهوم مميز للحياة العصرية، وهو عبارة عن مجمع شقق سكنية مبني وفق أحدث تقنيات البناء. بنماذج متعددة من الوحدات السكنية التي تلبي رغبات عملائنا. يتميز المشروع بموقعه  الأستراتيجي المميز في حي النرجس شمال الرياض، حيث يقع على طريق الملك سلمان بالقرب من أهم المناطق الحيوية كالمطار الملك خالد الدولي و جامعة الأميرة نورة بنت عبدالرحمن و المولات التجارية كالأفنيوز. يتكون المشروع من 4 مباني بمجموع 27 وحدة سكنية مقسمة الى 8 دبلكسات و 20 شقة، بمساحات تترواح بين 104م - 198م. يقدم “THE LOFT” لعملائنا سبل الراحة و الأمان حيث تمتلك وحداتنا أنظمة الشقق الذكية التي تناسب احتياجاتك وتوفر لك الخصوصية والاستقرار الذي تبحث عنه.
        `}
        imgSrc={ image1 }
        partId = 'projectPartId1'
        fromLeft
      />
      <InfoPart
        title="Gulf Square" 
        description={`
          يقدم "GULF SQUARE” مكاناً مثالياً لإقامة الأعمال التجارية. حيث تُعد العمارة التجارية من الأماكن الحيوية للتبادل التجاري وعرض المنتجات والخدمات المختلفة، وتُعد أيضاً بأنها بيئة مثالية للشركات والعلامات التجارية لعرض منتجاتها وتعزيزها واستهداف عملائها المحتملين. حيث يقع “GULF SQUARE” بموقع استراتيجي مميز على طريق الخليج الساحلي في حي الغدير بمدينة الدمام بمساحة 3600م، ويتميز ايضاً بموقعه التجاري على الربط بين أحياء مدينة الدمام مما يجعل الوصول إليه في غاية السهولة. تتكون العمارة من عدة طوابق، حيث أن الدور السفلي مصمم للمعارض التجارية بمساحة 1200م، بينما الأدوار العلوية مخصصة للمكاتب والشركات بمساحة 2400م. تهدف “GULF SQUARE” الى انشاء بيئة عمل مثالية للمؤسسات التجارية وتسهيل التفاعل بين الشركات والعملاء.
        `}
        imgSrc={ image2 }
        partId = 'projectPartId2'
        fromRight
      />
      <InfoPart
        title="Safa Villas" 
        description={`
          تقدم “SAFA VILLAS” تجربة عصرية فريدة للعيش والاستمتاع بالرفاهية. تضمن فللنا المصممة بشكل مبتكر وأنيق وجود مساحات شاسعة ذات تصاميم داخلية مذهلة التي توفر لكم الخصوصية والراحة التي تستحقونها. حيث يقع “SAFA VILLAS” في حي الصفا بمدينة الأحساء، ويتكون المشروع من 6 فلل سكنية بمساحة إجمالية 529م ومساحة بناء 315م لكل فيلا. تتميز “SAFA VILLAS” بتقديم حلول سكنية اقتصادية تلبي رغبة العميل وعائلته في ظل وجود خيارات متعددة من الوحدات السكنية.    
        `}
        imgSrc={ image3 }
        partId = 'projectPartId3'
        fromLeft
      />
      <InfoPart
        title="The View" 
        description={`
        احدى الفرص الاستثمارية لشركة ديارة العقارية في قلب مدينة الإحساء الجذابة لجامل طبيعتها وموقعها الجغرافي. THE VIEW هو فندق سياحي 4 نجوم يضم 120 غرفة، بالإضافة إلى 10 معارض بتصميم عصري بلمسات تراثية. يضم الفندق 200 موقف سيارة. كام يوجد معارض تجارية مجهزة لأشهر الماركات العالمية مما يشكل فرص استثامرية واعدة. المساحة الإجمالية للمشروع الفندقي هي 5000 متر مربع شاملة الخدمات. هذا بالإضافة الى أن المساحة الإجاملية للمشروع هي 12000 متر مربع. يتميز بالقرب من استاد الأمير عبد الله بن جلوي الرياضي، وموقعه على طريق الامارات قطر، بالإضافة إلى قربه من جامعة الملك فيصل. يتمركز المجمع التجاري على 7 معارض تجارية مطلة على الشارع مبساحة تقريبية 250 متر مربع للمعرض. يتوفر 80 موقف فوق الأرض يخدم المعارض وبقوة استيعابية 600 زائر. تتنوع استخدامات المعارض من مطاعم ومقاهي ومحلا تجارية راقية لتمنح المنطقة قيمة سوقية. مسطحات خضراء للمنتزه العام، مما يعطي طابع صحي للتنزه وداعمة لرؤية 2030. وجهة تسوق لأهالي المنطقة وخارج المنطقة. المساحة التقديرية 7000 متر مربع مضاف اليها الخدمات.
        `}
        imgSrc={ image4 }
        partId = 'projectPartId4'
        fromRight
      />
    </div>
  );
};

const InfoPart = ({ title, description, imgSrc, fromLeft, fromRight, partId }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  const animationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? 'translate3d(0, 0, 0)'
      : fromLeft
      ? 'translate3d(-100%, 0, 0)'
      : fromRight
      ? 'translate3d(100%, 0, 0)'
      : 'translate3d(0, 100%, 0)', // Default animation for the third part
  });

  return (
    <animated.div ref={ref} style={animationProps} className={`infoPart`}>
      <div className={`infoContent ${fromLeft ? 'inforeverse' : ''}`} id={partId}>
        <div className="infoText">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="infoImage">
          <img src={imgSrc} alt={`Part ${title}`} loading="lazy" />
        </div>
      </div>
    </animated.div>
  );
};

export default InfoComponent;
