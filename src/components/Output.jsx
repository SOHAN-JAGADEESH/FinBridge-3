import React from 'react';
import CategoryCard from "./Card";
import { coffee, expenses, food, housing, transport, utilities } from "../assets";

/**
 * Output Component
 * 
 * This component displays the results of the user's input in terms of how many days they can afford 
 * various expenses based on the amount they entered.
 * 
 * @param {Object} response - The data received from the API containing the results.
 * @returns {JSX.Element} - A grid of cards displaying the number of days the user can afford each expense.
 */
const Output = ({ response }) => {
    // Check if the response or its results are not available.
    if (!response || !response.results) {
        return <div>No data received.</div>;
    }

    // Data for each category of expense.
    const itemsData = [
      { 
        name: "Coffee", 
        description: "You can afford coffee for the number of days mentioned above, given you consume 2 cups of coffee a day",
      },
      { 
        name: "Housing", 
        description: "You can afford to pay rent for the number of days mentioned above",
      },
      { 
        name: "Transport", 
        description: "You can afford transportation for the number of days mentioned above",
      },
      { 
        name: "Food and Drinks", 
        description: "You can afford food for the number of days mentioned above",
      },
      { 
        name: "All Expenses Included", 
        description: "You can afford to fulfill all your expenditures for the number of days mentioned above.",
      },
      { 
        name: "Utilities", 
        description: "You can afford to pay for utilities for the number of days mentioned above",
      },
    ];

    // Icons for each category of expense.
    const icons = [coffee, housing, transport, food, expenses, utilities];

    // Multipliers to adjust the number of days for each category.
    const adjustmentMultipliers = [1, 1.5, 1.2 , 1, 2.5 , 3];

    return (
        <div className="output-section mt-4 grid grid-cols-1 gap-y-4 gap-x-1  sm:grid-cols-2 lg:grid-cols-3 place-items-center">
            {/* Map through the results and display a card for each category */}
            {response.results.map((value, index) => (
                <CategoryCard 
                    key={index}
                    title={itemsData[index].name}
                    days= {Math.round(value * adjustmentMultipliers[index] )}
                    description={itemsData[index].description}
                    icon={icons[index]}
                    specialCard={index === 4} // Highlight the "All Expenses Included" card.
                />
            ))}
        </div>
    );
}

export default Output;
