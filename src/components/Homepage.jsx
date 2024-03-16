import React, { useState } from 'react';
import CustomNavbar from './Navbar';
import HomepageTitle from './HomepageTitle';
import "../styles/Homepage.css"

const Homepage = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedBehavior, setSelectedBehavior] = useState('');
  const [selectedLearning, setSelectedLearning] = useState('');
  const [selectedSkills, setSelectedSkills] = useState('');

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleBehaviorChange = (event) => {
    setSelectedBehavior(event.target.value);
  };

  const handleLearningChange = (event) => {
    setSelectedLearning(event.target.value);
  };

  const handleSkillsChange = (event) => {
    setSelectedSkills(event.target.value);
  };

  const handleClick = () => {
    // Handle button click action here
    console.log('Button clicked');
  };

  return (
    <div>
      <CustomNavbar />
      <HomepageTitle /> 
      <p className="container">
        I am&nbsp;&nbsp;
        <select value={selectedRole} onChange={handleRoleChange}>
          <option value="">Select Role</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
        and want help with&nbsp;
        <select value={selectedBehavior} onChange={handleBehaviorChange}>
          <option value="">Behaviors</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
        ,&nbsp;
        <select value={selectedLearning} onChange={handleLearningChange}>
          <option value="">Learning</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
        , and&nbsp;
        <select value={selectedSkills} onChange={handleSkillsChange}>
          <option value="">Everyday Skills</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
        <button className="btn" onClick={handleClick}>See My resources</button>
      </p>
    </div>
  );
}

export default Homepage;
