import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import "../index.css";
import styles from "../style";

const ExpenditureGraph = ({ expenditures }) => {
  const [apiResponse, setApiResponse] = useState({
    housing: 500,
    food: 300,
    transportation: 400,
    utilities: 200,
    leisure: 150,
    miscellaneous: 100,
    total: 1650
  }); // Dummy data for API response
  const userChartRef = useRef(null); // Reference to the canvas element for user's expenditure
  const averageChartRef = useRef(null); // Reference to the canvas element for average spending
  const [overspendingCategories, setOverspendingCategories] = useState([]);
  const userChartInstance = useRef(null); // Ref to store the chart instance for user's expenditure
  const averageChartInstance = useRef(null); 

  const tips = {
    housing: [
      "Consider downsizing or relocating to a more affordable area.",
      "Regularly review and negotiate your rent or mortgage rates.",
      "Avoid unnecessary home upgrades that don't add value."
    ],
    food: [
      "Plan your meals ahead and avoid eating out frequently.",
      "Buy groceries in bulk and look for sales or discounts.",
      "Reduce wastage by storing food properly and using leftovers creatively."
    ],
    transportation: [
      "Use public transportation or consider carpooling.",
      "Regularly maintain your vehicle to avoid costly repairs.",
      "If possible, walk or bike for short distances."
    ],
    utilities: [
      "Turn off lights and appliances when not in use.",
      "Consider energy-efficient appliances and fixtures.",
      "Regularly review your utility plans and negotiate for better rates."
    ],
    leisure: [
      "Look for free or low-cost entertainment options in your area.",
      "Set a monthly budget for leisure activities and stick to it.",
      "Consider hobbies that are both fulfilling and cost-effective."
    ],
    miscellaneous: [
      "Regularly review your monthly subscriptions and cancel those you don't use.",
      "Buy items in bulk or during sales.",
      "Always set a budget for shopping and avoid impulsive buying."
    ]
  };

  useEffect(() => {
    // Create the charts when the component mounts
    if (userChartRef.current && averageChartRef.current) {
      const userCtx = userChartRef.current.getContext('2d');
      const averageCtx = averageChartRef.current.getContext('2d');
  
      // Destroy previous chart instances if they exist
      if (userChartInstance.current) {
        userChartInstance.current.destroy();
      }
  
      if (averageChartInstance.current) {
        averageChartInstance.current.destroy();
      }
  
      // Calculate total expenditure
      const totalExpenditure = Object.values(expenditures).reduce((acc, curr) => acc + Number(curr), 0);
  
      // Determine overspending categories and set their colors
      const overspending = [];
      const colors = Object.keys(expenditures).map(category => {
        if (expenditures[category] > apiResponse[category]) {
          overspending.push(category);
          return 'red';
        }
        return '#1CE8A8';
      });
      setOverspendingCategories(overspending);
  
      // Data for user's expenditure chart
      const userChartData = {
        labels: [...Object.keys(expenditures), 'Total'],
        datasets: [{
          label: 'Your Expenditure',
          data: [...Object.values(expenditures), totalExpenditure],
          backgroundColor: [...colors, '#1CE8A8'],
          borderColor: [...colors, '#1CE8A8'],
          borderWidth: 1
        }]
      };
  
      // Data for average spending chart
      const averageChartData = {
        labels: Object.keys(apiResponse),
        datasets: [{
          label: 'Average Spending',
          data: Object.values(apiResponse),
          backgroundColor: '#1CE8A8',
          borderColor: '#1CE8A8',
          borderWidth: 1
        }]
      };
  
      const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            type: 'category'
          },
          y: {
            beginAtZero: true
          }
        }
      };
  
      // Store the created chart instances
      userChartInstance.current = new Chart(userCtx, {
        type: 'bar',
        data: userChartData,
        options: chartOptions
      });
  
      averageChartInstance.current = new Chart(averageCtx, {
        type: 'bar',
        data: averageChartData,
        options: chartOptions
      });
    }
  }, [expenditures, apiResponse]);
  
  return (
    <div>
      <h3 style={{ color: '#1CE8A8' }}>Expenditure Graph</h3>
      <div className="flex justify-center">
        <div className="w-1/2 p-4">
            <canvas ref={userChartRef}></canvas>
        </div>
        <div className="w-1/2 p-4">
            <canvas ref={averageChartRef}></canvas>
        </div>
      </div>
      {overspendingCategories.length > 0 ? (
        <div>
          <p className={`${styles.heading4} mt-5`}>You are overspending in the following categories: {overspendingCategories.join(', ')}. <br/> Here are some tips to optimize your spending:</p>
          <div className="mt-5 grid gap-4">
            {overspendingCategories.map(category => (
              <div key={category} className="bg-dark-gray rounded-[4px] p-5 pl-18 pr-8">
                <h4 className="text-[#1CE8A8] mb-4">{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                <ul className="list-disc list-inside">
                  {tips[category].map((tip, index) => (
                    <li key={index} className={`${styles.paragraph} mt-2`}>{tip}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-5">
          <p className={`${styles.heading4}`}>Your expenditure is optimal!</p>
          <p className={`${styles.paragraph} mt-2`}>However, you can still use our AI budget tool to get a custom budget. Click the link below.</p>
        </div>
      )}
    </div>
  );
}

export default ExpenditureGraph;
