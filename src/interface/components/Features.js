// Features.js
import React from 'react';
import { FaEdit, FaEye, FaCog, FaShare } from 'react-icons/fa'; // Import icons
import './Features.css'; // Import CSS file for Features component

function Features() {
  return (
    <section className="features-section">
      <div className="feature">
        <FaCog className="icon customize" />
        <p className='feature-text'>Customize Rubrics as per your need</p>
      </div>
      <div className="feature">
        <FaEye className="icon view-all" />
        <p className='feature-text'>View all the rubrics for all subjects</p>
      </div>
      <div className="feature">
        <FaShare className="icon export" />
        <p className='feature-text'>Export rubrics to use offline</p>
      </div>
      <div className="feature">
        <FaEdit className="icon edit" />
        <p className='feature-text'>Edit the criteria</p>
      </div>
    </section>
  );
}

export default Features;
