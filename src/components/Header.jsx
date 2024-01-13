import React, { useState } from 'react';
import './Styles/Header.css';
import './Styles/VideoSection.css';
import DiyarahLogo from './Images/Icons/logoWithSlogan.png'
import BackVideo from './Videos/BackVideo.mp4'

const Header = () => {
  // Step 2: Add state to track whether the navigation list is active or not
  const [navListActive, setNavListActive] = useState(false);

  return (
    <header className="header">
      <nav className={`navbar ${navListActive ? 'active' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item"><a href="/" className="nav-link">الصفحة الرئيسية</a></li>
          <li className="nav-item"><a href="/projects" className="nav-link">المشاريع</a></li>
          <li className="nav-item"><a href="/about-us" className="nav-link">من نحن</a></li>
          <li className="nav-item"><a href="/location" className="nav-link">موقعنا</a></li>
          <li className="nav-item" id='contactsNav'><a href="/chatting" className="nav-link">تواصل معنا</a></li>
          {/* <li className="nav-item"><a href="/news" className="nav-link">الأخبار</a></li> */}
        </ul>
        <div id='vlogoDiv'>
          <img src={DiyarahLogo} alt="Company Logo" className="vidLogo" loading="lazy" />
        </div>
      </nav>
      <div className="video-section">
      <video autoPlay loop playsInline>
        <source src={ BackVideo } type="video/mp4" />
        متصفحك لا يدعم تنسيق الفيديو المضاف الى الخلفية
      </video>
      {/* Your content goes here */}
      <div className="content">
        {/* <div id='vlogoDiv'>
          <img src={DiyarahLogo} alt="Logo" className="vidLogo"/>
        </div> */}
        <div>
         <h1>شركة ديارة العقارية</h1>
         <p>نبني المستقبل.</p>
        </div>
      </div>
    </div>
    </header>
  );
}

export default Header;
