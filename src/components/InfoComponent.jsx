// InfoComponent.jsx
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import './Styles/InfoComponent.css';

import image1 from './Images/Buildingds/Narges.webp'
import image2 from './Images/Buildingds/BuildingSafa.webp'
import image3 from './Images/Buildingds/Building11.webp'

const InfoComponent = () => {
  return (
    <div>
      <InfoPart
        title="Alnarges Buildings" 
        description= {`
        عمائر النرجس، هو تحفة معمارية فريدة تتألق في قلب مدينة الرياض بالمملكة العربية السعودية. يتسم المشروع بأربعة أبراج فاخرة تتسابق لتحتل سماء المدينة بأناقة وجمال. تتألق واجهات المباني بتصاميم هندسية مبتكرة وزجاج فاخر يعكس أشعة الشمس بألوان رائعة. تتناغم الأبراج المتعددة بأسلوب فريد، مما يخلق لوحة جمالية تعكس روعة التصميم والابتكار في عالم العمارة.

        المساحات الداخلية في "عمائر النرجس" تتميز بالفخامة والراحة، حيث تم تصميمها بعناية فائقة لتلبية جميع احتياجات السكان. يسود الأثاث الحديث والمواد الراقية، مما يخلق بيئة حياة فاخرة تنعم بالرفاهية والاسترخاء. ومع وجود تكنولوجيا حديثة مدمجة في كل جزء من الأبراج، يتيح المشروع للسكان الاستمتاع بأعلى مستويات الراحة والرفاهية.
        
        تمتزج عمائر النرجس بمناطق خضراء جميلة وحدائق متنوعة، مما يضفي على المكان طابعًا طبيعيًا وهادئًا. تتوفر جميع وسائل الترفيه والاستجمام في المشروع، بدءًا من المسابح الفاخرة حتى الصالات الرياضية وأماكن التسوق، مما يجعل عمائر النرجس وجهة متكاملة للعيش الفاخر في قلب العاصمة السعودية.
        
        `}
        imgSrc={ image1 }
        partId = 'projectPartId1'
        fromLeft
      />
      <InfoPart
        title="Dammam Building" 
        description={`
            عمارة الدمام هي مشروع معماري يتحفنا بسحر الابتكار والتصميم الراقي في مدينة الدمام بالمملكة العربية السعودية. تتألق العمارة بواجهات زجاجية متطورة وأنيقة، تعكس جمالها في ضوء الشمس. يبرز التصميم الهندسي للعمارة بأسلوب جريء، حيث يجمع بين الأناقة الحديثة واللمسات الفنية التقليدية التي تعزز من فرادة المكان.

            الداخلية تتميز بالفخامة والأناقة، مع استخدام مواد عالية الجودة وتفاصيل دقيقة. يتيح للسكان التمتع بتجربة فريدة داخل مساحات متنوعة ومريحة. توفر عمارة الدمام بيئة حياة حديثة مع التكنولوجيا المتقدمة مدمجة بانسيابية في كل جزء.

            يشمل المشروع مرافق شاملة من مسابح إلى مراكز التسوق والمطاعم، مما يجعله وجهة متكاملة تلبي احتياجات الحياة اليومية والترفيهية. عمارة الدمام تجمع بين الحياة العصرية وسحر التراث في قلب مدينة الدمام.
        `}
        imgSrc={ image2 }
        partId = 'projectPartId2'
        fromRight
      />
      <InfoPart
        title="Safa Villas" 
        description={`
            دوبلكسات الصفا  هي مشروع سكني استثنائي يقع في موقع متميز في المدينة. تتميز هذه الفلل الدوبلكس بتصاميم فريدة وعصرية، حيث تمثل توازنًا مثاليًا بين الأناقة والوظائف العملية.

            تحتل دوبلكسات الصفا موقعًا استراتيجيًا يتيح للسكان الوصول السهل إلى جميع وسائل الحياة اليومية والترفيه. تمتاز المساحات الداخلية بالرحابة والتنظيم الفعّال، مع استخدام مواد فاخرة تعزز من جودة الحياة.
            
            يتوفر في المشروع مجموعة من المرافق مثل المسابح والحدائق الجميلة، مما يخلق بيئة مثالية للمعيشة العائلية. دوبلكسات الصفا تجسد التفرد والرفاهية، مما يجعلها خيارًا مثاليًا للباحثين عن السكن الفاخر في قلب المدينة.
        `}
        imgSrc={ image3 }
        partId = 'projectPartId3'
        fromLeft
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
