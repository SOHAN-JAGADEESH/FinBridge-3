import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ styles }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dollar');
  };

  return (
    <button
      type="button"
      className={`py-2 px-8 font-poppins font-medium text-[#1CE8A8] bg-black border border-[#1CE8A8] rounded-[3px] outline-none hover:bg-[#1CE8A8] hover:text-black ${styles}`}
      onClick={handleClick}
    >
      Get Started →
    </button>

  );
};

export default Button;
