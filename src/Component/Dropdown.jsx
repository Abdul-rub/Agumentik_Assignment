import React, { useState } from 'react';
import "../styles/Dropdown.css"
const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {selectedOption ? selectedOption : 'Select an option'}
        <span className={`arrow ${isOpen ? 'rotate' : ''}`}></span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li key={option} onClick={() => handleOptionSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
