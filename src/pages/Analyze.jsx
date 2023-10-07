import React, { useState } from 'react';
import {Navbar, Footer} from "../components";
import styles from "../style";
import ExpenditureGraph from './ExpenditureGraph';
import { Link } from 'react-router-dom';

const Analyze = () => {
  const [expenditures, setExpenditures] = useState({
    housing: '',
    food: '',
    transportation: '',
    utilities: '',
    leisure: '',
    miscellaneous: ''
  });

  const [showGraph, setShowGraph] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpenditures(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  

  const handleSubmit = () => {
    setShowGraph(true);  // Set the state to true to display the graph
  }

  return (
    <div className="bg-primary w-full overflow-hidden min-h-screen relative ">
      <div className={`${styles.paddingX} ${styles.flexCenter} main-section `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <div className={`mt-8 text-center`}>
            <h2 className={styles.heading2}>
                Let us analyze your expenditure
            </h2>
            <p className={`${styles.paragraph} mt-5`}>
                Your description goes here. This is a placeholder text to show where the description will appear.
            </p>
          </div>
          <br/>
          <div className="border-2 border-[#1CE8A8] p-8">
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
            </div>
        

            {showGraph && (  
              <div className="mt-10 p-5 rounded-[4px] bg-dark-gray animate-moveUpDown duration-1000 ease-in-out">
                <div className="text-center">
                  <p className={`${styles.paragraph} mt-5 text-white`}>
                    Based on your expenditure analysis, we can assist you in setting a budget and achieving your financial goals using advanced AI techniques.
                  </p>
                  <br/>
                  <Link 
                      to={{ 
                          pathname: '/budget', 
                          state: { expenditures: expenditures } 
                      }} 
                      className={`mt-5 py-2 px-6 font-poppins font-medium text-[#1CE8A8] bg-black border border-[#1CE8A8] rounded-[3px] outline-none hover:bg-[#1CE8A8] hover:text-black`}
                  >
                      Let's Get Started
                  </Link>
                </div>
              </div>
            )}
        </div>
      </div>
      <br/>
      <br/>
      <Footer/>
    </div>
  );
}

export default Analyze;
