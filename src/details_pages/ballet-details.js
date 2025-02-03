import React from 'react';
import './ballet-details.css'
import Navbar from '../components/Navbar';

const BalletDetails = () => {
  return (
    <div>
      <Navbar/>
        <h2>Ballet Assistant Teacher</h2>
      <div class='containerdescription'>
        <p>Completing my O-levels National Exams in 2018, I was given a chance to be a Ballet Assistant Teacher, under the tutelage of my Ballet Teacher. Little did I know that I would stay in this job for 6 years,
          working full-time during holidays and on weekends when there was school. I loved children and this job gave me a chance to interact with them which I truly enjoyed. The smiles on the children faces and the hardwork 
          that they put in during the lessons were the main factors that kept me going. I was glad to be able to pass down my dance knowledge to young dancers and assist them in their ballet journey. 
            <br/><b>My Role:</b><br/>
            <li>When my teacher was not around, I would conduct classes for children (age 4-10)</li>
            <li>Manage unusual incidents such as students throwing tantrums, wetting their leotards etc. </li>
            <li>I also planned and organised ballet coaching classes and examination schedules with my ballet teacher</li>
            <li>I prepared the necessary documents to be disseminated to the students' parents to inform them of important information</li>
            <li>I also interacted with parents and utiliased communication channels to inform parents about updated, class schedules or any changes in class timings etc.</li>
            Overall, being an assistant ballet teacher has allowed me to grow in many different areas. I was also able to have a deeper look into the life of a ballet teacher
            and the challenges faced. It was amazing to see my ballet teacher handled all these on her own previously, from planning exam schedules, administrative matters to managing classes. 
            It had been a truly enjoyable experience being a ballet assistant teacher and I would embarked on this journey again when I am back to Singapore after my exchange. 
            </p>
      </div> 
      {/* Add more details about the internship here */}
    </div>
  );
};

export default BalletDetails;