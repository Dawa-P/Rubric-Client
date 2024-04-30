// OurGoals.js

import React from 'react';
import './OurGoals.css'; // Import CSS file for OurGoals component

function OurGoals() {
  return (
    <div className="our-goals">
      <div className="image-container">
        <img src="./images/students1.png" alt="Our Goals" className="goal-image" />
      </div>
      <div className="content">
        <h2>Our Goals</h2>
        <div className="vision">
          <h3>Vision</h3>
          <p>To revolutionize the educational landscape by empowering educators with innovative rubric creation tools, fostering a culture of excellence and personalized learning experiences</p>
        </div>
        <div className="mission">
          <h3>Mission</h3>
          <p>Our mission is to provide educators of Bhutan with intuitive and customizable rubric-building solutions that streamline assessment processes, enhance student engagement, and promote continuous improvement in teaching and learning practices. We strive to cultivate a supportive community where educators can collaborate, share best practices, and inspire one another to achieve academic excellence</p>
        </div>
      </div>
    </div>
  );
}

export default OurGoals;
