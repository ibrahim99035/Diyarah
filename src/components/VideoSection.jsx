import React from 'react';
import './Styles/VideoSection.css';
import BackVideo from './Videos/BackVideo.mp4'
import DiyarahLogo from './Images/Icons/logoWithSlogan.png'

const VideoSection = () => {
  return (
    <div className="video-section">
      <video autoPlay muted loop playsInline>
        <source src={ BackVideo } type="video/mp4" />
        متصفحك لا يدعم تنسيق الفيديو المضاف الى الخلفية
      </video>
      {/* Your content goes here */}
      <div className="content">
        <div id='vlogoDiv'>
          <img src={DiyarahLogo} alt="Logo" className="vidLogo"/>
        </div>
        <div>
         <h1>شركة ديارة العقارية</h1>
         <p>جودة لا تضاهى, ثقة لا تنتهي.</p>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
