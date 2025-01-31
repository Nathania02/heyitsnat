import React from 'react';
import './marketing-details.css'
import Navbar from '../components/Navbar';

const MarketingDetails = () => {
  return (
    <div>
      <Navbar/>
      <div class="container">
        <img src="/heyitsnat/marketing.jpg" alt="Centered Image" class="image" />
      </div>  
      <h2>Director of Marketing, Communications and Media</h2>
      <div class='containerdescription'>
        <p>Taking up this role, I was nervous at the start. This was my first time doing something related to marketing and media. 
          However, during my time as the Director of Marketing, Communications and Media, I really enjoyed myself despite the challenges that I faced. 
            <br/><b>My Role:</b><br/>
            <li>Social Media: I oversaw and maintained multiple social media platforms that SMU Symphonia has such as Instagram, TikTok and Facebook. </li>
            <li>Design: For each event and production, my Assistant Director and I carefully crafted attrative and eye catching visuals. These visuals included production posters, instagram posts, programme booklets, electronic direct mail (EDM) etc. </li>
            <li>Productions: I spearheaded impactful marketing campaigns for Symphonia 2023 productions. </li>
            <b>Outcome:</b>
            <br/>Through the visuals created and designed,
            we were able to drive high audience engagement where we hit a record high ticket sales of 538/631 for our annual production - Festiva and 698/831 for our winds production - Grandioso. 
            For Grandioso, with the theme Once Upon A Dream where we performed popular tunes from Disney movies, we had a best dressed competition. In order to make it attractive, I engaged with 
            sponsors to foster productive partnerships and collaborations. Our team was able to secure a sponsorship from LUMOS where we gave a LUMOS RAY Home Cinema Projector woth $298 as our grand prize for
            the best dressed competition.
            <br/><b>Tools Used:</b><br/>
            <li>Canva</li>
            </p>
      </div> 
      <h2>Executive Committee Introduction</h2>
      <div className="image-row">
      <img src="/heyitsnat/exco.jpg" alt="Image 1" className="square-image" />
    </div>
      <h2>Grandioso - Once Upon A Dream</h2>
      <div className="image-row">
        <img src="/heyitsnat/ThankYou4.png" alt="Image 1" className="square-image" />
      </div>
        {/* Add more details about the internship here */}
    </div>
  );
};

export default MarketingDetails;