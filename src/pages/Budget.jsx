import React, { useState } from 'react';
import {Navbar, Footer} from "../components";
import styles from "../style";
import { useLocation, Link} from 'react-router-dom';
import "../index.css";

const Budget = () => {
  const [choice, setChoice] = useState(null);
  const [income, setIncome] = useState('');
  const [savings, setSavings] = useState('');
  const [months, setMonths] = useState('');
  const [savings1, setSavings1] = useState(null);
  const [savings2, setSavings2] = useState(null);

  const [errors, setErrors] = useState({ income: false, savings: false, months: false });
  
  

  const validateInput = (value, type) => {
    switch(type) {
      case 'income':
        return value >= 0 && value <= 200000;
      case 'savings':
        return value > 0 && value <= 200000;
      case 'months':
        return value > 0 && value < 48 ;
      default:
        return false;
    }
  }

  const handleInputChange = (e, type) => {
    const value = e.target.value;
    if (validateInput(value, type)) {
      setErrors(prevState => ({ ...prevState, [type]: false }));
      if (type === 'income') setIncome(value);
      if (type === 'savings') setSavings(value);
      if (type === 'months') setMonths(value);
    } else {
      setErrors(prevState => ({ ...prevState, [type]: true }));
    }
  }


  const API_ENDPOINT = 'https://backend-btlp.onrender.com/poem';

  const [budgetRecommendation, setBudgetRecommendation] = useState('');

  const location = useLocation();
  const receivedExpenditures = location.state?.expenditures;
  console.log("Received Expenditures:", receivedExpenditures);
  


const sendDataToAPI = async () => {
  let promptText = `Given the user's expenditures of:
    Housing: ${receivedExpenditures.housing || 0},
    Food: ${receivedExpenditures.food || 0},
    Transportation: ${receivedExpenditures.transportation || 0},
    Utilities: ${receivedExpenditures.utilities || 0},
    Leisure: ${receivedExpenditures.leisure || 0},
    Miscellaneous: ${receivedExpenditures.miscellaneous || 0},`;

    switch (choice) {
      case 'saveMoney':
        promptText += `
          and their desire to save money with an income of ${income} and a savings goal of ${savings1}%,
          provide a custom budget recommendation to help them save money.
        `;
        break;
      case 'saveGoal':
        promptText += `
          and their goal to save ${savings} dollars over ${months} months with an income of ${income},
          provide a custom budget recommendation to help them achieve this goal.
        `;
        break;
      case 'reduceExpenditure':
        promptText += `
          and their aim to reduce expenditure by ${savings2}%,
          provide a custom budget recommendation to help them reduce their spending.
        `;
        break;
      default:
        console.error('Invalid choice');
        return;
    }

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: promptText })
      });
  
      if (!response.ok) {
        throw new Error('Server responded with an error');
      }
  
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulatedData = ''; // Temporary variable to accumulate chunks
  
      // Read the data chunks as they arrive
      reader.read().then(function processText({ done, value }) {
        if (done) {
          // Once streaming is done, set the state with the accumulated data
          setBudgetRecommendation(accumulatedData);
          return;
        }
  
        // Decode the data chunk and accumulate it
        const chunk = decoder.decode(value);
        accumulatedData += chunk;
  
        // Update the state with the accumulated data
        setBudgetRecommendation(accumulatedData);
  
        // Continue reading the next chunk
        return reader.read().then(processText);
      });
  
    } catch (error) {
      console.error('Error sending data to OpenAI:', error);
    }
  };

  
  
  

  
  return (
    <div className="bg-primary w-full overflow-hidden min-h-screen relative ">
      <div className={`${styles.paddingX} ${styles.flexCenter} main-section `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <h2 className={`${styles.heading2} mt-5 text-center`}>
              Use AI To Supercharge Your Budgeting
            </h2>
            <p className={`${styles.paragraph} mt-5 text-center`}>
            Welcome to the Custom Budget Assistant page, a modern solution to financial planning.
            Leveraging the power of artificial intelligence, this tool is designed to provide users with personalized
             budget recommendations tailored to their specific needs and goals.
            </p>
          <div className={`mt-8 text-center border-2 border-[#1CE8A8] p-5 rounded`}>
            <h2 className={styles.heading2}>
                Budgeting Options
            </h2>
            <p className={`${styles.paragraph} mt-5`}>
                Choose your budgeting goal:
            </p>
            <br/>
            <button onClick={() => setChoice('saveMoney')} className={`p-3 m-2 rounded ${choice === 'saveMoney' ? 'bg-[#1CE8A8] text-gray-500' : 'bg-gray-500 text-[#1CE8A8]'}`}>Save Money</button>
            <button onClick={() => setChoice('saveGoal')}className={`p-3 m-2 rounded ${choice === 'saveGoal' ? 'bg-[#1CE8A8] text-gray-500' : 'bg-gray-500 text-[#1CE8A8]'}`}>Save Towards a Goal</button>
            <button onClick={() => setChoice('reduceExpenditure')} className={`p-3 m-2 rounded ${choice === 'reduceExpenditure' ? 'bg-[#1CE8A8] text-gray-500' : 'bg-gray-500 text-[#1CE8A8]'}`}>Reduce Expenditure</button>

            

            {choice === 'saveMoney' && (
              <div className="mt-5">
                <label className={`${styles.paragraph} block mb-2`}>Enter your Income:</label>
                <input 
                  type="number" 
                  placeholder="Income in $" 
                  value={income} 
                  onChange={e => handleInputChange(e, 'income')} 
                  className={`border p-2 bg-gray-200 m-2 ${errors.income ? 'border-red-500' : ''}`}
                />
                {errors.income && <p className="text-red-500">Income should be between 0 and 200,000</p>}
                <div>
                  <br/>
                  <label className={`${styles.paragraph} block mb-2`}>Select how much you want to save:</label>
                    <button onClick={() => setSavings1(10)} className={`p-3 m-2 rounded ${savings1 === 10 ? 'bg-[#1CE8A8] text-gray-500' : 'bg-gray-500 text-[#1CE8A8]'}`}>10%</button>
                    <button onClick={() => setSavings1(20)} className={`p-3 m-2 rounded ${savings1 === 20 ? 'bg-[#1CE8A8] text-gray-500' : 'bg-gray-500 text-[#1CE8A8]'}`}>20%</button>
                    <button onClick={() => setSavings1(30)} className={`p-3 m-2 rounded ${savings1 === 30 ? 'bg-[#1CE8A8] text-gray-500' : 'bg-gray-500 text-[#1CE8A8]'}`}>30%</button>
                    <button onClick={() => setSavings1(40)} className={`p-3 m-2 rounded ${savings1 === 40 ? 'bg-[#1CE8A8] text-gray-500' : 'bg-gray-500 text-[#1CE8A8]'}`}>40%</button>
                            
                </div>
              </div>
            )}

            {choice === 'saveGoal' && (
              <div className="mt-5">
                <label className={`${styles.paragraph} block mb-2`}>Enter your Income:</label>
                <input 
                  type="number" 
                  placeholder="Income in $" 
                  value={income} 
                  onChange={e => handleInputChange(e, 'income')} 
                  className={`border p-2 bg-gray-200 m-2 ${errors.income ? 'border-red-500' : ''}`}
                />
                {errors.income && <p className="text-red-500">Income should be between $0 and $200,000</p>}
                
                <label className={`${styles.paragraph} block mb-2`}>Enter your Savings goal in AUD:</label>
                <input 
                  type="number" 
                  placeholder="Savings in $" 
                  value={savings} 
                  onChange={e => handleInputChange(e, 'savings')} 
                  className={`border p-2 bg-gray-200 m-2 ${errors.savings ? 'border-red-500' : ''}`}
                />
                {errors.savings && <p className="text-red-500">Savings goal should be between $0 and $200,000</p>}
                
                <label className={`${styles.paragraph} block mb-2`}>Enter number of months for the goal:</label>
                <input 
                  type="number" 
                  placeholder="Months to achieve" 
                  value={months} 
                  onChange={e => handleInputChange(e, 'months')} 
                  onKeyPress={e => (e.key === '.' && e.preventDefault())}
                  className={`border p-2 bg-gray-200 m-2 ${errors.months ? 'border-red-500' : ''}`}
                />
                {errors.months && <p className="text-red-500">Months should be between 1 and 47 and be a whole number</p>}
              </div>
            )}


          {choice === 'reduceExpenditure' && (
              <div className="mt-5">
                <label className={`${styles.paragraph} block mb-2`}>Select by how much you want to reduce your expenditure:</label>
                <button 
                  onClick={() => setSavings2(10)}
                  className={`p-3 m-2 rounded ${savings2 === 10 ? 'bg-[#1CE8A8] text-gray-500' : 'bg-gray-500 text-[#1CE8A8]'}`}>
                  10%
                </button>
                <button 
                  onClick={() => setSavings2(20)}
                  className={`p-3 m-2 rounded ${savings2 === 20 ? 'bg-[#1CE8A8] text-gray-500' : 'bg-gray-500 text-[#1CE8A8]'}`}>
                  20%
                </button>
                <button 
                  onClick={() => setSavings2(30)}
                  className={`p-3 m-2 rounded ${savings2 === 30 ? 'bg-[#1CE8A8] text-gray-500' : 'bg-gray-500 text-[#1CE8A8]'}`}>
                  30%
                </button>
                {/* For custom reduction, you might need an additional input field to get the exact percentage. For now, I'm leaving it as a button. */}
                <button 
                  onClick={() => setSavings2(40)}
                  className={`p-3 m-2 rounded ${savings2 === 40 ? 'bg-[#1CE8A8] text-gray-500' : 'bg-gray-500 text-[#1CE8A8]'}`}>
                  40%
                </button>
                <button 
                  onClick={() => setSavings2(50)}
                  className={`p-3 m-2 rounded ${savings2 === 50 ? 'bg-[#1CE8A8] text-gray-500' : 'bg-gray-500 text-[#1CE8A8]'}`}>
                  50%
                </button>
              </div>
            )}
          
            <br/>
            <br/>
            <button onClick={sendDataToAPI} className="bg-[#1CE8A8] p-3 m-2 rounded">
                Get Custom Budget
            </button>
          </div>
          <div className="mt-8 ">
              <h2 className={`${styles.heading2} text-center`}>
                  Your Custom Budget Recommendation :
              </h2>
              <div className={`${styles.paragraph} mt-5 text-white wordWrap`} style={{ maxWidth: '100%', overflow: 'hidden', backgroundColor: '#181818', borderRadius: '10px', padding: '20px', fontFamily: 'Poppins, sans-serif' }}>
                  <pre className="preWrap">{budgetRecommendation}</pre>
              </div>
          </div>
          {budgetRecommendation && 
              <div className="text-center mt-5">
                  <Link to="/analyze" className="bg-[#1CE8A8] p-3 m-2 rounded inline-block">
                      Re-enter Expenditure Values
                  </Link>
              </div>
          }
       
      </div>
    </div>
    <br/> <br/> <br/> <br/>
    <Footer/>
</div>

  );
}

export default Budget;
