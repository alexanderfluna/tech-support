import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Button.css';

const Button = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/TechSupport');
  };

  return (
    <button className='back-button' onClick={handleClick}>
      &#8592;
    </button>
  );
};

export default Button;