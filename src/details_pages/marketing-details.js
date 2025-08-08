import React from 'react';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'

const MarketingDetails = () => {
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
        <div className="content">
          <h2 className="text-center">Director of Office of Marketing, Communications and Media</h2> {/* Add text-center if you want the h2 centered */}
          <p className="text-justify mt-3">Taking up this role, I was nervous at the start. This was my first time doing something related to marketing and media. 
          However, during my time as the Director of Marketing, Communications and Media, I really enjoyed myself despite the challenges that I faced. 
            <br/><br/><b>My Role:</b><br/>
            <li>Social Media: I oversaw and maintained multiple social media platforms that SMU Symphonia has such as Instagram, TikTok and Facebook. </li>
            <li>Design: For each event and production, my Assistant Director and I carefully crafted attrative and eye catching visuals. These visuals included production posters, instagram posts, programme booklets, electronic direct mail (EDM) etc. </li>
            <li>Productions: I spearheaded impactful marketing campaigns for Symphonia 2023 productions. I was also part of the operations 
              team for productions. With the EXCO, we orderly loaded and unloaded instruments into concert venues, 
              ensured the safety of performers and took charge of the registration and FOH. </li>
            <br/><b>Outcome:</b>
            <br/>Through the visuals created and designed,
            we were able to drive high audience engagement where we hit a record high ticket sales of 538/631 for our annual production - Festiva and 698/831 for our winds production - Grandioso. 
            For Grandioso, with the theme Once Upon A Dream where we performed popular tunes from Disney movies, we had a best dressed competition. In order to make it attractive, I engaged with 
            sponsors to foster productive partnerships and collaborations. Our team was able to secure a sponsorship from LUMOS where we gave a LUMOS RAY Home Cinema Projector worth $298 as our grand prize for
            the best dressed competition.
            <br/><br/><b>Tools Used:</b><br/>
            <li>Canva</li>
            </p>
          <div className='container'>
            <div className='row gx-2'>
              <div className='col-6'>
                <img 
                src="/heyitsnat/exco.jpg"
                alt="Image 1" 
                className="img-fluid w-100"/>
              </div>
              <div className='col-6'>
                <img src='/heyitsnat/ThankYou4.png'
                alt="Image 1" className="img-fluid w-100"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingDetails;