import React from 'react';
import './Styles/GoogleMapSection.css'; // Import your CSS file

const GoogleMapSection = () => {
  return (
    <section id="map"> 
      <h2>موقعنا</h2>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3624.9772205331587!2d46.60021878500041!3d24.693309784133046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQxJzM1LjkiTiA0NsKwMzUnNTIuOSJF!5e0!3m2!1sar!2seg!4v1702244390066!5m2!1sar!2seg" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
        id="mapframe"
      ></iframe>
    </section>
  );
}

export default GoogleMapSection;