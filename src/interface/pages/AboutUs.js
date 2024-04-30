import React from 'react';
// import { FaIcon1, FaIcon2, FaIcon3, FaIcon4 } from 'react-icons/fa'; // Import your desired icons
import './AboutUs.css'
import StickyMenu from '../components/StickyMenu';
import Footer from '../components/Footer';
const AboutUs = () =>{
  return (
    <div className="about-us-container">
      <StickyMenu />

      <div className="about-us-content">
        {/* Your specific content for the About Us page */}
        <h1>About Us</h1>
        <p>Introducing our project: Toolkit for Educators in Bhutan. Our platform provides educators with easy access to subject-specific rubrics, aiding in effective teaching and student assessment. Educators can view, customize, and save rubrics offline, empowering them to tailor their teaching approach to meet their students' needs. Join us in revolutionizing education in Bhutan.</p>
        {/* Add more content here */}

        <div>
          
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutUs;
