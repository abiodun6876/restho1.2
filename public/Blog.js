'use client'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const headerStyle = {
    backgroundColor: 'white', // Set header background to white
    padding: '20px',
    fontFamily:'Cormorant Garamond,serif',
    textAlign: 'center',
    marginBottom: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    position: 'relative', // For stacking context

  };
  
  const subHeaderImageStyle = {
    width: '30px',
    height: 'auto',
    marginRight: '10px',
    marginLeft: '10px',
  };
  
  const subHeaderTextStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#bf9444',
    fontFamily:'Cormorant Garamond,serif',

  };
  
  const titleStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    color: 'black', // Set header text color to white
    marginBottom: '20px',
    fontFamily:'Cormorant Garamond,serif',
  };
  

function BlogCard({ date, imageSrc, author, content }) {
    const cardStyle = {
        backgroundColor: 'white',
        padding: '20px',
        fontFamily:'Cormorant Garamond,serif',
        textAlign: 'center',
        marginBottom: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        position: 'relative', // For stacking context
        flex: '0 0 calc(33.33% - 20px)', // Set card width to one-third
      };
    
      

  return (
    <div style={cardStyle}>
      <div className="blog-card">
        <div className="blog-image">
          <img src={imageSrc} alt="Blog" />
        </div>
        <p>
          By {author},<br />
          {content}
        </p>
        <a href="#" className="read-more">
          Read More <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </div>
  );
}

function Blog() {
  return (
    <div>
      <div style={headerStyle}>
        <img
          src="https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
          alt="Sub Header Image"
          style={subHeaderImageStyle}
        />
        <span style={subHeaderTextStyle}> Our Blog</span>
        <img
          src="https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
          alt="Sub Header Image"
          style={subHeaderImageStyle}
        />
        <h2 style={titleStyle}>Our Latest Blog</h2>
      </div>

      <div
        className="blog-container"
        style={{
          display: 'flex',
          flexWrap: 'wrap', // Allow cards to wrap to the next line
          justifyContent: 'space-between', // Add space between the cards
          maxWidth: '1200px', // Set a maximum width for the cards
          margin: '0 auto', // Center the cards horizontally
        }}
      >
        {/* Blog Card 1 */}
        <BlogCard
          date="17th Apr"
          imageSrc="https://restho-nextjs.vercel.app/assets/images/bg/h2-blog1.png"
          author="Clone Watson"
          content="To Make Good Health Take Nutrition Food."
        />

        {/* Blog Card 2 */}
        <BlogCard
          date="18th Apr"
          imageSrc="https://restho-nextjs.vercel.app/assets/images/bg/h2-blog3.png"
          author="Clone Watson"
          content="To Make Good Health Take Nutrition Food."
        />

        {/* Blog Card 3 */}
        <BlogCard
          date="19th Apr"
          imageSrc="https://restho-nextjs.vercel.app/assets/images/bg/h2-blog2.png"
          author="Clone Watson"
          content="To Make Good Health Take Nutrition Food."
        />
      </div>
    </div>
  );
}

export default Blog;
