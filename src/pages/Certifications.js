import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    { name: 'Google Project Management', logo: 'P' },
    { name: 'AI For Industry - Literacy in AI', logo: 'C' },
    { name: 'Google Data Analytics', logo: 'K' },
    { name: 'Python for Data Science Essential Training Part 1 & 2', logo: 'T' },
    { name: 'SAS Certified Predictive Modeler Using SAS Enterprise Miner 14', logo: 'P' },
    { name: 'RAD Level 4 Certificate in Vocational Graded Exam in Dance Adv 2 (Ballet)', logo: 'P' },
    { name: 'Accenture Project Prize', logo: 'C' },
    { name: 'Certificate of Academic Achievement 2022', logo: 'K' },
    { name: 'Certificate of Academic Achievement 2021', logo: 'T' },
    { name: 'ATCL Piano Recital Level 4 Diploma in Music Performance', logo: 'P' }

  ];

  return (
    <section className="certifications py-5">
        
        <div className="certifications-flow">
          <div className="certifications-track">
            {/* Double the items for seamless looping */}
            {[...certifications, ...certifications].map((certifications, index) => (
              <div 
                key={index} 
                className="certifications-item"
              >
                {/* <div className="skills-logo">{skills.logo}</div> */}
                <span className="certifications-name"><strong>{certifications.name}</strong></span>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default Certifications;