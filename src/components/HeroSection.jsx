import React from 'react';
import './Styles/HeroSection.css';

import HeroSectionBuildings from './Images/Buildingds/heroSectionBuildingsPixeled.png'

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
            alt="Professional Image 1"
            className="hero-image"
            id='HeroBuilding'
        />
      </div>
      <br />
      <div className="Hprofessional-intro-section">
        <p>
          نحن نفتخر بتقديم خدمات عقارية شاملة تشمل البيع والشراء وإدارة العقارات، مع التفرد في التعامل مع كل عميل وتركيزنا على تلبية احتياجاتهم الفريدة.
        </p>

        <p>
          نلتزم بحماية خصوصية عملائنا وضمان أمان معلوماتهم، ونستخدم تقنيات متقدمة ونتبنى الابتكار لضمان تجربة متميزة وفعّالة لعملائنا.
        </p>

        <p>
          بتفهم عميق لسوق العقارات واستخدام التكنولوجيا، نسعى دائمًا لتحقيق أعلى قيمة لعملائنا، وندعوكم لاكتشاف الفارق مع ديارة العقارية حيث نساهم في بناء مستقبلكم بكفاءة واستدامة.
        </p>
      </div>
      <div id='SeeMoreDiv'>
        <a href="/about" target='_blank' id='SeeMore'>اطلع على المزيد ...</a>
      </div>
    </div>
  );
};

export default HeroSection;