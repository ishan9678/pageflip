import React from 'react';
import '../styles/Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <a href="#">Academia</a>
      </div>
      <div className="middle">
        <ul>
          <li><a href="#">Home</a></li>
          <li className="dropdown">
            <a href="#">Programmes</a>
            <div className="dropdown-content">
              <a href="#">Programme 1</a>
              <a href="#">Programme 2</a>
              <a href="#">Programme 3</a>
            </div>
          </li>
          <li><a href="#">Resources</a></li>
        </ul>
      </div>
      <div className="right">
        <button className="animated-button">Get in Touch</button>
      </div>
    </nav>
  );
}

export default Navbar;
