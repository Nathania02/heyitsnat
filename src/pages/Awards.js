import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import your skill logos here
// You'll need to have the logo files (e.g., .svg, .png) in your project
// For this example, we'll assume they are in a folder called 'images'
// and are named python.svg, tableau.svg, etc.

// import pythonLogo from '/heyitsnat/pythonlogo.png';
// import tableauLogo from '/heyitsnat/pythonlogo.png';
// import rLogo from '/heyitsnat/pythonlogo.png';
// import dockerLogo from '/heyitsnat/pythonlogo.png';

const SkillsSection = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center align-items-center">
        {/* Python Logo */}
        <div className="col-auto p-3">
          <img
            src='/heyitsnat/pythonlogo.png'
            alt="Python Logo"
            style={{ width: '64px', height: 'auto' }}
            className="img-fluid"
          />
        </div>

        {/* Tableau Logo */}
        <div className="col-auto p-3">
          <img
            src='/heyitsnat/figma.png'
            alt="Tableau Logo"
            style={{ width: '64px', height: 'auto' }}
            className="img-fluid"
          />
        </div>

        {/* R Logo */}
        <div className="col-auto p-3">
          <img
            src='/heyitsnat/rlogo.png'
            alt="R Logo"
            style={{ width: '64px', height: 'auto' }}
            className="img-fluid"
          />
        </div>

        {/* Docker Logo */}
        <div className="col-auto p-3">
          <img
            src='/heyitsnat/dockerlogo.png'
            alt="Docker Logo"
            style={{ width: '64px', height: 'auto' }}
            className="img-fluid"
          />
        </div>

        <div className="col-auto p-3">
          <img
            src='/heyitsnat/mysqllogo.png'
            alt="Tableau Logo"
            style={{ width: '64px', height: 'auto' }}
            className="img-fluid"
          />
        </div>

        {/* R Logo */}
        <div className="col-auto p-3">
          <img
            src='/heyitsnat/node.png'
            alt="R Logo"
            style={{ width: '64px', height: 'auto' }}
            className="img-fluid"
          />
        </div>

        {/* Docker Logo */}
        <div className="col-auto p-3">
          <img
            src='/heyitsnat/jslogo.png'
            alt="Docker Logo"
            style={{ width: '64px', height: 'auto' }}
            className="img-fluid"
          />
        </div>

        <div className="col-auto p-3">
          <img
            src='/heyitsnat/vue.png'
            alt="Docker Logo"
            style={{ width: '64px', height: 'auto' }}
            className="img-fluid"
          />
        </div>
        <div className="col-auto p-3">
          <img
            src='/heyitsnat/qlikview.png'
            alt="Docker Logo"
            style={{ width: '64px', height: 'auto' }}
            className="img-fluid"
          />
        </div>
        <div className="col-auto p-3">
          <img
            src='/heyitsnat/tableau.jpg'
            alt="Docker Logo"
            style={{ width: '64px', height: 'auto' }}
            className="img-fluid"
          />
        </div>
        <div className="col-auto p-3">
          <img
            src='/heyitsnat/htmllogo.png'
            alt="Docker Logo"
            style={{ width: '64px', height: 'auto' }}
            className="img-fluid"
          />
        </div>
        <div className="col-auto p-3">
          <img
            src='/heyitsnat/css.png'
            alt="Docker Logo"
            style={{ width: '64px', height: 'auto' }}
            className="img-fluid"
          />
        </div>
        <div className="col-auto p-3">
          <img
            src='/heyitsnat/mlflow.jpg'
            alt="Docker Logo"
            style={{ width: '64px', height: 'auto' }}
            className="img-fluid"
          />
        </div>
        <div className="col-auto p-3">
          <img
            src='/heyitsnat/aws.png'
            alt="Docker Logo"
            style={{ width: '64px', height: 'auto' }}
            className="img-fluid"
          />
        </div>



      </div>
    </div>
  );
};

export default SkillsSection;