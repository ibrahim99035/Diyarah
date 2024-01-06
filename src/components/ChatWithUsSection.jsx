import React from 'react';
import whatsappicon from './Images/Icons/whatsapp.png'
import './Styles/ChatWithUsSection.css'; // Import your CSS file

const ChatWithUsSection = () => {
  return (
    <section class="chat-section" id="chatting">
      <h2>تواصل معنا على واتساب</h2>
      <img src={whatsappicon} alt="Whatsapp Icon" /> <br /> <br /> 
      <a href="https://api.whatsapp.com/send?phone=966572696382" class="whatsapp-button" target="_blank">Chat on WhatsApp</a>
    </section>
  );
}

export default ChatWithUsSection;