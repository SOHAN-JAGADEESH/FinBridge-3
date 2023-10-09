import React from 'react';

/**
 * CategoryCard Component
 * 
 * This component represents a card that displays information about a specific category of expense.
 * It shows the title of the category, the number of days the user can afford the expense, a description,
 * and an icon representing the category.
 * 
 * @param {string} title - The title of the expense category.
 * @param {number} days - The number of days the user can afford the expense.
 * @param {string} description - A description providing more context about the expense category.
 * @param {string} icon - The URL or path to the icon representing the expense category.
 * @param {boolean} specialCard - A flag to indicate if this card should have a special styling (e.g., different background color).
 * @returns {JSX.Element} - A card displaying the provided information.
 */
const CategoryCard = ({ title, days, description, icon, specialCard }) => {
    return (
        <div className={`w-72 h-72 relative ${specialCard ? 'bg-yellow-500' : 'bg-blue-gradient'} p-9 rounded-md shadow-md`}>
            <div className="flex flex-col items-center justify-center h-full">
                {/* Display the icon */}
                <img src={icon} alt={`${title} icon`} className="icon-class" />
                
                {/* Display the title */}
                <h3 className="text-xl text-center font-semibold capitalize text-black">{title}</h3>
                
                {/* Display the number of days */}
                <p className="mt-2 text-lg text-bold text-center font-bold">{days} days</p>
                
                <br/>
                
                {/* Display the description */}
                <p className="text-center">{description}</p>
            </div>
        </div>
    );
}

export default CategoryCard;
