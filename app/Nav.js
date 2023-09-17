'use client'
import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll

function Nav() {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li>
          <Link
            to="section1" // Replace with the target section ID
            spy={true}
            smooth={true}
            offset={-70} // Adjust the offset as needed
            duration={500}
          >
            Section 1
          </Link>
        </li>
        <li>
          <Link
            to="section2" // Replace with the target section ID
            spy={true}
            smooth={true}
            offset={-70} // Adjust the offset as needed
            duration={500}
          >
            Section 2
          </Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
}

export default Nav;
