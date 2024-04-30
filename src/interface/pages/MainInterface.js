// MainInterface.js

import React, { useRef } from 'react';
import './MainInterface.css';
import StickyMenu from '../components/StickyMenu';
import { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

import { SliderData } from './SliderData';
import ImageSlider from '../components/ImageSlider';
import Features from '../components/Features';
import OurGoals from '../components/OurGoals';
import OurTeams from '../components/OurTeams';
import Footer from '../components/Footer';


function MainInterface() {

  return (
    <div className="MainInterface">
      <StickyMenu/>
      <main>

        <ImageSlider slides={SliderData}/>
        <h2 className='feature-heading'>Use Toolkit for Educators to</h2>
        <Features/>
        <OurGoals/>
        <OurTeams/>     
        <Footer/>   
        
      </main>
    </div>
  );
}

export default MainInterface;
