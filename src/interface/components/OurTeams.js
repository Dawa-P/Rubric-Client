// OurTeams.js

import React from 'react';
import './OurTeams.css'; // Import CSS file for OurTeams component

function OurTeams() {
  return (
    <section className="our-teams">
      <h2>Our Teams</h2>
      <div className="team-members">
      <div className="team-member">
          <img src="./images/profile5.jfif" alt="Team Member 1" className="team-photo" />
          <div className="team-info">
            <h3>Dr. Richa Awasthy</h3>
            <p className='role'>Project Sponsor</p>
            <p className='responsibilities'>Provide feedback and acceptance of project deliverables</p>
          </div>
        </div>
        <div className="team-member">
          <img src="./images/profile1.jfif" alt="Team Member 1" className="team-photo" />
          <div className="team-info">
            <h3>Dechen Tshomo</h3>
            <p className='role'>Project Manager</p>
            <p className='responsibilities'>Keep project plans, coordinate project activities, meetings</p>
          </div>
        </div>
        <div className="team-member">
          <img src="./images/profile2.jfif" alt="Team Member 2" className="team-photo" />
          <div className="team-info">
            <h3>Dawa Phuntsho</h3>
            <p className='role'>Software Developer</p>
            <p className='responsibilities'>Responsible for developing high-quality products</p>
          </div>
        </div>
        <div className="team-member">
          <img src="./images/profile3.jfif" alt="Team Member 2" className="team-photo" />
          <div className="team-info">
            <h3>Karma Wangchuk</h3>
            <p className='role'>Quality Assurer and Tester</p>
            <p className='responsibilities'>Responsible for quality of the project and test the system</p>
          </div>
        </div>

        <div className="team-member">
          <img src="./images/profile4.jfif" alt="Team Member 2" className="team-photo" />
          <div className="team-info">
            <h3>Kinley Rinchen</h3>
            <p className='role'>Instructional Designer</p>
            <p className='responsibilities'>Responsible for the interface Design and overall project design</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeams;
