import { useState } from "react";
import React from 'react';

const Input = ({ setAmount }) => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (value === "") {
            setError(null);
            setInputValue("");
        } else if (value < 0) {
            setError("Please enter a value greater than or equal to 0");
        } else {
            setError(null);
            setInputValue(value);
        }
    };

    const handleSubmit = () => {
        if (inputValue >= 0) {
            setAmount(inputValue);
        }
    };

    return (
      <div className="input-section w-full max-w-md">
        <input 
          type="number" 
          value={inputValue} 
          onChange={handleInputChange} 
          placeholder="Enter amount in AUD" 
          className="w-full p-2 border rounded-md"
        />
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <br/>
        <button 
          onClick={handleSubmit} 
          className={`mt-2 w-full py-3 px-6 font-poppins font-medium text-[#1CE8A8] bg-black border border-[#1CE8A8] rounded-[3px] outline-none hover:bg-[#1CE8A8] hover:text-black `}
        >
          Calculate
        </button>
      </div>
    );
}

export default Input;
