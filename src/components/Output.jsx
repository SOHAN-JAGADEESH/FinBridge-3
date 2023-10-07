import React from 'react';
import CategoryCard from "./Card";
import { coffee, expenses, food, housing, transport, utilities } from "../assets";

const Output = ({ response }) => {
    if (!response || !response.results) {
        return <div>No data received.</div>;
    }

    const itemsData = [
      { 
        name: "Coffee", 
        description: "You can afford coffee for the number of days mentioned above, given you consume 2 cups of coffee a day",
        details: `<b>Card type: Non-essential</b><br/>
        <ul style="list-style-type:disc; padding-left:20px;">
      <li>BYO Cups: Invest in your own stylish coffee-cup to enjoy discounts from some cafes</li>
      <li>Loyalty Cards: Don't be shy to ask for a loyalty card. Nothing beats a free coffee on your 10th visit.</li>
    </ul>`
      },
      { 
        name: "Housing", 
        description: "You can afford to pay rent for the number of days mentioned above",
        details: `<b>Card type: Necessity</b><br/>
        <ul style="list-style-type:disc; padding-left:20px;">
      <li>Shared apartment: Sharing an apartment with people you trust could be a good choice to save costs.</li>
      <li>Start searching early: Looking for a rentals could be competitive  start your accommodation search early.</li>
    </ul>`
      },
      { 
        name: "Transport", 
        description: "You can afford transportation for the number of days mentioned above",
        details: `<b>Card type: Necessity</b><br/>
        <ul style="list-style-type:disc; padding-left:20px;">
      <li>Public Transport: Utilize public transportation systems such as buses and trains to save on fuel and parking costs.</li>
      <li>Carpooling: Share rides with friends or colleagues to reduce individual transportation expenses.</li>
    </ul>`
      },
      { 
        name: "Food and Drinks", 
        description: "You can afford food for the number of days mentioned above",
        details: `<b>Card type: Necessity</b><br/>
        <ul style="list-style-type:disc; padding-left:20px;">
      <li>Meal Planning: Plan your meals ahead of time to avoid unnecessary spending on takeout or dining out.</li>
      <li>Bulk Purchases: Buy non-perishable items in bulk to save in the long run.</li>
    </ul>`
      },
      { 
        name: "All Expenses Included", 
        description: "You can afford to fulfill all expenditures for the number of days mentioned above.",
        details: `<b>Cost-saving tips</b><br/>
        <ul style="list-style-type:disc; padding-left:20px;">
      <li>Budgeting: Create a monthly budget to keep track of all your expenses and avoid overspending.</li>
      <li>Discounts and Offers: Always be on the lookout for discounts, offers, and coupons to save on various expenses.</li>
    </ul>`
      },
      { 
        name: "Utilities", 
        description: "You can afford to pay for utilities for the number of days mentioned above",
        details: `<b>Card type: Essential</b><br/>
        <ul style="list-style-type:disc; padding-left:20px;">
      <li>Energy Efficiency: Invest in energy-efficient appliances to reduce utility bills.</li>
      <li>Water Conservation: Practice water conservation methods like fixing leaks promptly and using water-saving fixtures.</li>
    </ul>`
      },
    ];

  const icons = [coffee,housing,transport,food,expenses,utilities];

  const adjustmentMultipliers = [1, 1.5, 1.2 , 1, 2.5 , 3];

  return (
    <div className="output-section mt-4 grid grid-cols-1 gap-y-4 gap-x-1  sm:grid-cols-2 lg:grid-cols-3 place-items-center">
      {response.results.map((value, index) => (
        <CategoryCard 
          key={index}
          title={itemsData[index].name}
          days= {Math.round(value * adjustmentMultipliers[index] )}
          description={itemsData[index].description}
          icon={icons[index]}
          specialCard={index === 4}
          details={itemsData[index].details}
        />
      ))}
    </div>
  );
}

export default Output;