import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import styles from "../style";

const Budget = ({ location }) => {
  const [choice, setChoice] = useState(null);
  const [income, setIncome] = useState('');
  const [savings, setSavings] = useState('');
  const [months, setMonths] = useState('');

  const expenditures = location?.state?.expenditures || {};

  const API_ENDPOINT = 'https://backend-btlp.onrender.com/poem';

  const [budgetRecommendation, setBudgetRecommendation] = useState('');

 
  


const sendDataToAPI = async () => {
  let promptText = `Given the user's expenditures of:
      Housing: 1200,
      Food: 400,
      Transportation: 300,
      Utilities: 300,
      Leisure: 300,
      Miscellaneous: 300,`;
  
    switch (choice) {
      case 'saveMoney':
        promptText += `
          and their desire to save money with an income of ${income} and a savings goal of 10%,
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
          and their aim to reduce expenditure by ${savings}%,
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
        body: JSON.stringify({ prompt: "write me a small poem" })
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
          <div className={`mt-8 text-center bg-gray-500 p-5 rounded`}>
            <h2 className={styles.heading2}>
                Budgeting Options
            </h2>
            <p className={`${styles.paragraph} mt-5`}>
                Choose your budgeting goal:
            </p>

            <button onClick={() => setChoice('saveMoney')} className="bg-gray-500 text-[#1CE8A8] p-3 m-2 rounded">Save Money</button>
            <button onClick={() => setChoice('saveGoal')} className="bg-gray-500 text-[#1CE8A8] p-3 m-2 rounded">Save Towards a Goal</button>
            <button onClick={() => setChoice('reduceExpenditure')} className="bg-gray-500 text-[#1CE8A8] p-3 m-2 rounded">Reduce Expenditure</button>

            

            {choice === 'saveMoney' && (
              <div className="mt-5">
                <input type="number" placeholder="Income in $" value={income} onChange={e => setIncome(e.target.value)} className="border p-2 bg-gray-200 m-2"/>
                <div>
                  <button className="bg-gray-500 text-[#1CE8A8] p-3 m-2 rounded">10%</button>
                  <button className="bg-gray-500 text-[#1CE8A8] p-3 m-2 rounded">20%</button>
                  <button className="bg-gray-500 text-[#1CE8A8] p-3 m-2 rounded">Custom</button>
                </div>
              </div>
            )}

            {choice === 'saveGoal' && (
              <div className="mt-5">
                <input type="number" placeholder="Income in $" value={income} onChange={e => setIncome(e.target.value)} className="border p-2 bg-gray-200 m-2"/>
                <input type="number" placeholder="Savings in $" value={savings} onChange={e => setSavings(e.target.value)} className="border p-2 bg-gray-200 m-2"/>
                <input type="number" placeholder="Months to achieve" value={months} onChange={e => setMonths(e.target.value)} className="border p-2 bg-gray-200 m-2"/>
              </div>
            )}

            {choice === 'reduceExpenditure' && (
              <div className="mt-5">
                <button className="bg-gray-500 text-[#1CE8A8] p-3 m-2 rounded">Reduce by 10%</button>
                <button className="bg-gray-500 text-[#1CE8A8] p-3 m-2 rounded">Reduce by 20%</button>
                <button className="bg-gray-500 text-[#1CE8A8] p-3 m-2 rounded">Custom Reduction</button>
              </div>
            )}
          </div>
          <button onClick={sendDataToAPI} className="bg-[#1CE8A8] p-3 m-2 rounded">Get Custom Budget</button>
          
          <div className="mt-8 ">
            <h2 className={styles.heading2}>
                Your Custom Budget Recommendation
            </h2>
            <p className={`${styles.paragraph} mt-5 text-white wordWrap`}>
              <pre>{budgetRecommendation}</pre>
            </p>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Budget;
