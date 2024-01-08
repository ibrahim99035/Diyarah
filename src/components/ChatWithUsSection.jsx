import React from 'react';
import whatsappicon from './Images/Icons/whatsapp.png'
import './Styles/ChatWithUsSection.css'; // Import your CSS file

const ChatWithUsSection = () => {
  return (
    <section className="chat-section" id="chatting">
      <h2>تواصل معنا على واتساب</h2>
      <img src={whatsappicon} alt="Whatsapp Icon" loading="lazy" /> <br /> <br /> 
      <a href="https://api.whatsapp.com/send?phone=966572696382" className="whatsapp-button" target="_blank">Chat on WhatsApp</a>
    </section>
  );
}

export default ChatWithUsSection;