import React from 'react';
import './Banner.css'; // Import your CSS file for styling

function Banner() {
  return (
   
    <div className="banner1">
      <div className="text1">
        <h4>We are the Restho</h4>
        <h1 className='banner-head'>Find the best and fast food for you</h1>
        <h4>Your order will be delivered to your doorsteps</h4>
        <a href="#" className="discover-button">
          Discover More
        </a>
      </div>
      <div className="triangle-container1">
        <div className="triangle1">
          <img src="https://restho-nextjs.vercel.app/assets/images/bg/h2-banner-img22.png" alt="Image 1" />
        </div>
        <div className="triangle1">
          <img src="https://restho-nextjs.vercel.app/assets/images/bg/h2-banner-img11.png" alt="Image 2" />
        </div>
        <div className="triangle1">
          <img src="https://restho-nextjs.vercel.app/assets/images/bg/h2-banner-img44.png" alt="Image 3" />
        </div>
        <div className="triangle1">
          <img src="https://restho-nextjs.vercel.app/assets/images/bg/h2-banner-img44.png" alt="Image 4" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
