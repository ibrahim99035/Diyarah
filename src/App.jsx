import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import SliderSection from './components/SliderSection';
import AboutUsSection from './components/HeroSection';
import NewProjecrSection from './components/NewProjectSection'
import ChatWithUsSection from './components/ChatWithUsSection';
import GoogleMapSection from './components/GoogleMapSection';
import AdditionalSections from './components/AdditionalSections';
import Footer from './components/Footer';
import GoToTopButton from './components/GoToTopButton';
import VideoSection from './components/VideoSection';
import CardComponent from './components/CardComponent'
import InfoComponent from './components/InfoComponent';

import PrivacyPolicy from './Routes/Privacy_policy/PrivacyPolicy';
import TermsAndConditions from './Routes/Terms_and_Conditions/TermsAndConditions';
import IntellectualPropertyRights from './Routes/IntellectualPropertyRights/IntellectualPropertyRights';
import About from './Routes/About/CompanyIntro'

const App = () => {
  return (
    <div>  
      <BrowserRouter>
        <Routes>
          <Route 
            path='/' 
            element= {
              <>
                <Header /> 
                <SliderSection />
                <AboutUsSection />
                <CardComponent />
                <ChatWithUsSection /> 
                <AdditionalSections /> 
                <Footer />
                <GoToTopButton />
              </>
          } />

          <Route path='/projects' element= {
            <>
              <Header />
              <InfoComponent /> 
              <Footer />
              <GoToTopButton />
            </>
          } />

          <Route path='/news' element= {
            <>
              <Header />
              <Footer />
              <GoToTopButton />
            </>
          } />
          
          <Route path='/about' element= {
            <>
              <Header />
              <About />
              <Footer />
              <GoToTopButton />
            </>
          } />

          <Route path='/terms-and-conditions' element= {
            <>
              <Header />
              <TermsAndConditions />
              <Footer />
              <GoToTopButton />
            </>
          } />

          <Route path='/intellectual-property' element= {
            <>
              <Header />
              <IntellectualPropertyRights />
              <Footer />
              <GoToTopButton />
            </>
          } />

          <Route path='/privacy-policy' element= {
            <>
              <Header />
              <PrivacyPolicy />
              <Footer />
              <GoToTopButton />
            </>
          } />

          <Route path='/location' element= {
            <>
              <Header />
              <GoogleMapSection /> 
              <Footer />
              <GoToTopButton />
            </>
          } />

          <Route path='/chatting' element= {
            <>
              <Header />
              <ChatWithUsSection /> 
              <Footer />
              <GoToTopButton />
            </>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;