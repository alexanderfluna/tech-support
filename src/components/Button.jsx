import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css';

const Button = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <button className='back-button' onClick={handleClick}>
      &#8592;
    </button>
  );
};

export default Button;
