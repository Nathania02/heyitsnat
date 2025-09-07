import React from 'react';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'

const BalletDetails = () => {
  return (
    // Use Bootstrap's d-flex, flex-column, and vh-100 to make the App container a flex column taking full viewport height
      <div
        className="d-flex flex-column "
        style={{
          backgroundColor: '#fef0f5',
          margin: '10px',
          minHeight: '100vh',
        }}
      >
      {/* Navbar at the top, centered horizontally */}
      {/* Use Bootstrap's container-fluid for full width, or container for a fixed width */}
      {/* Add justify-content-center to the parent of Navbar for horizontal centering */}
        <div> {/* Use container to center content within the navbar */}
          <Navbar />
        </div>

      {/* Main content, pushed to the bottom and taking remaining space */}
      {/* Use flex-grow-1 to make this container take up all available vertical space */}
      {/* Use auto margins (mb-auto or mt-auto) if you want it explicitly at the bottom, but flex-grow-1 is usually enough for the layout. */}
      {/* text-center for centering the text content if needed */}
      <div className="container-fluid d-flex flex-column justify-content-end align-items-center mt-5"> {/* Changed to d-flex flex-column for vertical alignment and justify-content-end */}
        <div className="content px-5">
          <h2 className="text-center">Ballet Assistant Teacher</h2> {/* Add text-center if you want the h2 centered */}
          <p className="text-justify mt-3"> {/* Use text-justify if you want justified text, or text-left/text-start for left-aligned */}
            Completing my O-levels National Exams in 2018, I was given a chance to be a Ballet Assistant Teacher, under the tutelage of my Ballet Teacher. Little did I know that I would stay in this job for 6 years,
            working full-time during holidays and part-time on weekends when there was school. I love working with children and this job gave me a chance to interact with them which I truly enjoyed. The smiles on the children faces and the hardwork
            that they put in during the lessons were the main factors that kept me going. I was glad to be able to pass down my dance knowledge to young dancers and assist them in their ballet journey.
            <br /><br/><b>My Role:</b><br />
            <ul> {/* Use Bootstrap list-unstyled if you want to remove default list styling */}
              <li>Conduct classes for children (age 4-10) when my teacher was not around</li>
              <li>Manage unusual incidents such as students throwing tantrums, wetting their leotards etc. </li>
              <li>Planned and organised ballet coaching classes and examination schedules with my ballet teacher</li>
              <li>Prepared the necessary documents to be disseminated to the students' parents to inform them of important information</li>
              <li>Interacted with parents and utiliised communication channels to inform parents about updated, class schedules or any changes in class timings etc.</li>
              <li>Sort and packed necessary exam/concert items for each student</li>
            </ul>
            Overall, being an assistant ballet teacher has allowed me to grow in many different areas. I was also able to have a deeper look into the life of a ballet teacher
            and the challenges faced. It was amazing to see my ballet teacher handled all these on her own previously, from planning exam schedules, administrative matters to managing classes.
            It had been a truly enjoyable experience being a ballet assistant teacher.
            </p>
        </div>
      </div>
    </div>
  );
};

export default BalletDetails;