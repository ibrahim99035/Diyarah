import React from 'react';
import './Styles/HeroSection.css';

import HeroSectionBuildings from '/Images/Buildingds/heroSectionBuildingsPixeled.jpg'

const HeroSection = () => {
  return (
    <div className="about-us-section">
      <div className="custom-header">
        <h2>رحلتنا و قيمنا</h2>
        <p className="sub-header">
          شركة ديارة العقارية تقدم لكم تجربة استثنائية في عالم العقارات، حيث يتميز عملنا بالاحترافية واحترام الخصوصية.
        </p>
      </div>
      <div id='heroImageDiv'>
        <img
            src= {HeroSectionBuildings}
            alt="Buidings Grafity"
            className="hero-image"
            id='HeroBuilding'
            loading="lazy" 
        />
      </div>
      <br />
      <div className="Hprofessional-intro-section">
        <p>
         نحن نفخر بتقديم خدمات عقارية شاملة تشمل البيع والشراء وإدارة الممتلكات، مع التفرد في التعامل مع كل عميل والتركيز على تلبية احتياجاته الفريدة.
        </p>

        <p>
         ومع الفهم العميق لسوق العقارات واستخدام التكنولوجيا، فإننا دامئًا نسعى جاهدين لتحقيق أعلى قيمة لعملائنا لاكتشاف الفرق مع شركة ديارة العقارية، حيث نساهم في بناء مستقبلك بكفاءة ومستدامة.
        </p>

        <p>
          وقد اتسمت رحلة ديارة بالسعي الدؤوب لتحقيق التميز، واتباع نهج يركز على العملاء، والالتزام بالنمو المستدام.
        </p>
      </div>
      <div id='SeeMoreDiv'>
        <a href="/about-us" target='_blank' id='SeeMore'>اطلع على المزيد ...</a>
      </div>
    </div>
  );
};

export default HeroSection;