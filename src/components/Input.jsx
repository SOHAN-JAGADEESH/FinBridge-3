import { useState } from "react";
import React from 'react';

/**
 * Input Component
 * 
 * This component provides an input field for the user to enter an amount in AUD.
 * It also provides validation to ensure the entered amount is within a specified range.
 * 
 * Props:
 * - setAmount: A function that sets the amount in the parent component.
 */
const Input = ({ setAmount }) => {
    // State to hold the current value of the input field.
    const [inputValue, setInputValue] = useState('');

    // State to hold any error messages related to input validation.
    const [error, setError] = useState(null);

    /**
     * handleInputChange
     * 
     * This function handles changes to the input field. It performs validation checks:
     * - The value should not be negative.
     * - The value should not exceed 100,000.
     * 
     * @param {Event} e - The event object from the input field.
     */
    const handleInputChange = (e) => {
        const value = e.target.value;
        
        if (value === "") {
            setError("Please enter a valid value");
            setInputValue("");
        } else if (value <= 0) {
            setError("Please enter a value greater than 0");
        } else if (value > 100000) {
            setError("Please enter a value less than or equal to $100,000");
        } else {
            setError(null);
            setInputValue(value);
        }
    };

    /**
     * handleSubmit
     * 
     * This function handles the submission of the input value.
     * It ensures the value is within the valid range before setting the amount.
     */
    const handleSubmit = () => {
        if (inputValue >= 0 && inputValue <= 100000) {
            setAmount(inputValue);
        }
    };

    return (
      <div className="input-section w-full max-w-md">
        {/* Input field for entering the amount */}
        <input 
          type="number" 
          value={inputValue} 
          onChange={handleInputChange} 
          placeholder="Enter amount in AUD" 
          className="w-full p-2 border rounded-md"
        />
        {/* Display error messages if any */}
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <br/>
        {/* Button to submit the entered amount */}
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
