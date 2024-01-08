import React from 'react';
import './Styles/Footer.css'; 
import DiyarahLogo from './Images/Icons/icon4.png'

import WhatsappLogo from './Images/Icons/whatsapp.png'
import FacebookLogo from './Images/Icons/facebook.png'
import LinkedinLogo from './Images/Icons/linkedin.png'
import Twitter_Logo from './Images/Icons/twitter.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div id='footerLogo'>
          <a href="/">
            <img src={DiyarahLogo} alt="Company Logo" className="logo" loading="lazy" />
          </a>
          <br />
        </div>
            <div className="footer-content" id='contactUSFooter'>
                <h3>تواصل معنا</h3>
                <a href="https://api.whatsapp.com/send?phone=966572696382" target="_blank">
                  <img src={WhatsappLogo} alt="Whatsapp Icon" loading="lazy" />
                </a>
                <br /> <br />
                <a href="https://api.whatsapp.com/send?phone=966572696382" target="_blank">
                  <p>+966572696382</p>
                </a>
            </div>
            <div className="footer-content">
                <h3>روابط هامة</h3>
                <p><a href="/terms-and-conditions" target='_blank'>الشروط و الأحكام </a></p> <br />
                <p><a href="/intellectual-property" target="_blank">حقوق الملكية الفكرية </a></p> <br />
                <p><a href="/privacy-policy" target="_blank">سياسات الخصوصية</a></p> <br />
                <p><a href="/location" target="_blank">موقعنا</a></p> <br />
            </div>
  
            <div className="footer-content" id='followUs'>
                <h3>تابعنا</h3>
                <div id='iconsContainer'>
                  <a href="https://www.linkedin.com" target='_blank'>
                    <img src={LinkedinLogo} alt="Linkedin Icon" loading="lazy" />
                  </a>
                  <a href="https://www.facebook.com" target='_blank'>
                    <img src={FacebookLogo} alt="Facebook Icon" loading="lazy" /> 
                  </a>
                  <a href="https://www.twitter.com" target='_blank'>
                    <img src={Twitter_Logo} alt="Twitter Icon" loading="lazy" />  
                  </a>
                </div>
            </div>
        </div>
        <br /> <br /> <br /> <br /> <br /> <br />
        <p className="copyright">© 2023 . كل الحقوق محفوظة لشركة ديارة العقارية.</p>
        <br />
        <p id='hema'>Made by <a href="https://www.linkedin.com/in/ibrahim-abu-eita-0b2490206/" target='_blank'>Ibrahim Abu Eita</a> & <a href="http://www.linkedin.com/in/salma-khaled-539847260" target="_blank"> Salma Khaled</a></p>
    </footer>
  );
}

export default Footer;