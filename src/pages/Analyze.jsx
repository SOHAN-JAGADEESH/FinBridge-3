import React, { useState } from 'react';
import {Navbar, Footer} from "../components";
import styles from "../style";
import ExpenditureGraph from './ExpenditureGraph';
import UserJourneyCard from './UserJourneyCard';
import { useNavigate } from 'react-router-dom';

const Analyze = () => {
  const [expenditures, setExpenditures] = useState({
    housing: '',
    food: '',
    transportation: '',
    utilities: '',
    leisure: '',
    miscellaneous: ''
  });

  const navigate = useNavigate();

  const handleNavigation = () => {
      navigate('/budget', { state: { expenditures: expenditures } });
  };

  const [showGraph, setShowGraph] = useState(false);
  const [errors, setErrors] = useState({});  // New state for errors

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let currentErrors = { ...errors }; // Copy the current errors

    if (value < 0 || value > 10000) {
        currentErrors[name] = "  Please enter a valid value";
    } else {
        currentErrors[name] = ""; // Clear the error for the current input
    }

    setErrors(currentErrors); // Update the errors state
    setExpenditures(prevState => ({
        ...prevState,
        [name]: value
    }));
}

  
  

const handleSubmit = () => {
  // Check if there are any errors
  const hasErrors = Object.values(errors).some(error => error);

  if (!hasErrors) {
      setShowGraph(true);  // Set the state to true to display the graph
  } else {
      // Optionally, you can show a general error message or alert to the user
      alert("Please correct the errors before submitting.");
  }
}

  return (
    <div className="bg-primary w-full overflow-hidden min-h-screen relative ">
      <div className={`${styles.paddingX} ${styles.flexCenter} main-section `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <div className={`mt-8 text-center`}>
            <h2 className={styles.heading2}>
                Smart Expense Analyzer
            </h2>
            <p className={`${styles.paragraph} mt-5`}>
            Dive deep into your spending habits with our Smart Expense Analyzer. By understanding where your money goes, you pave the way for informed financial decisions. 
            This platform not only visualizes your expenditures across various categories but also provides insightful tips to optimize and better manage your finances. Whether you're looking to save for a dream vacation or simply to cut down on unnecessary spending, our analysis serves as a solid foundation. Let's embark on a journey to financial wisdom together!
            </p>
          </div>
          <br/>
          <div className="border-2 border-[#1CE8A8] p-8">
          <h2 className={`${styles.heading4} text-center`}>
                Please enter your expenditure for these categories in AUD
            </h2>
            <div className="input-section mt-8 flex justify-center">
              <div className="flex flex-col mr-4">
                {['housing', 'food', 'transportation'].map(category => (
                  <div key={category} className="mb-4 flex items-center">
                    <label className="w-40 text-center text-[#1CE8A8] font-poppins" htmlFor={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</label>
                    <input 
                      type="number" 
                      id={category} 
                      name={category} 
                      value={expenditures[category]} 
                      onChange={handleInputChange} 
                      className="border p-2 bg-gray-200"
                    />
                    {errors[category] && <p className="text-red-500">{errors[category]}</p>}
                  </div>
                ))}
              </div>
              <div className="flex flex-col mr-4">
                {['utilities', 'leisure', 'miscellaneous'].map(category => (
                  <div key={category} className="mb-4 flex items-center">
                    <label className="w-40 text-center text-[#1CE8A8] font-poppins" htmlFor={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</label>
                    <input 
                      type="number" 
                      id={category} 
                      name={category} 
                      value={expenditures[category]} 
                      onChange={handleInputChange} 
                      className="border p-2 bg-gray-200"
                    />
                    {errors[category] && <p className="text-red-500">{ errors[ category]}</p>}
                  </div>
                  
                ))}
              </div>
            </div>
            <div className="mt-8 text-center">
              <button onClick={handleSubmit} className={`mt-2  py-2 px-6 font-poppins font-medium text-[#1CE8A8] bg-black border border-[#1CE8A8] rounded-[3px] outline-none hover:bg-[#1CE8A8] hover:text-black `}>
                Calculate
              </button>
            </div>
            <br/>
            {showGraph && <ExpenditureGraph expenditures={expenditures} />}  {/* Conditionally render the graph */}
            
            

            {showGraph && (  
                <section 
                  className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-[#232323] rounded-[10px] box-shadow border-[1px] border-[#1CE8A8] shadow-inner m-[10px] p-[10px]`}
                >
                  <div className="flex-1 flex flex-col">
                    <h2 className={styles.heading3}>Unlock AI-Powered Financial Planning</h2>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                      You've taken the first step with your expenditure analysis. Now, elevate your financial strategy with our AI-driven custom budgeting tool. Set clear financial goals and let our advanced algorithms guide you towards achieving them. Remember, this tailored experience builds upon your analysis, ensuring precision and relevance. Don't miss out on this opportunity to master your finances!
                    </p>
                  </div>

                  <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
                    <button 
                      onClick={handleNavigation}
                      className={`py-2 px-8 font-poppins font-medium text-[#1CE8A8] bg-black border border-[#1CE8A8] rounded-[3px] outline-none hover:bg-[#1CE8A8] hover:text-black`}
                    >
                      Let's Go →
                    </button>
                  </div>
                </section>
              )}
            </div>
        </div>
      </div>
      <br/>
      <br/>
      <Footer/>
    </div>
  );
}

export default Analyze;
