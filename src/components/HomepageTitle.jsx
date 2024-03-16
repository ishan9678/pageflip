import React from 'react';
import "../styles/HomepageTitle.css"
import gif from "../images/gif.gif"

const HomepageTitle = () => {
  return (
    <div className='Home'>
      <div className="left">
        <img src={gif} alt="GIF" /> 
      </div>
      <div className="right">
      <h1 class="custom-heading">Unlock your child's Potential</h1>
      </div>
    </div>
  );
}

export default HomepageTitle;
