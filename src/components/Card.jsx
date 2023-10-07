import React, { useState } from "react";

const CategoryCard = ({ title, days, description, icon, specialCard, details  }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="w-72 h-72 relative transition-transform duration-2000 transform perspective-1000 cursor-pointer hover:scale-105"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`w-full h-full ${specialCard ? 'bg-yellow-500' : 'bg-blue-gradient'} p-9 transition-transform rounded-md shadow-md absolute top-0 left-0 backface-hidden transform ${isFlipped ? 'rotate-y-180' : 'rotate-y-0'}`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <img src={icon} alt="icon" className="icon-class " />
          <h3 className="text-xl text-center font-semibold capitalize text-black">{title}</h3>
          <p className="mt-2 text-lg text-bold text-center font-bold">{days} days</p>
          <br/>
          <p className="text-center">{description}</p>
        </div>
      </div>

      <div 
        className={`w-full h-full ${specialCard ? 'bg-yellow-500' : 'bg-blue-gradient'} p-9 transition-transform rounded-md shadow-md absolute top-0 left-0 backface-hidden transform ${isFlipped ? 'rotate-y-0' : 'rotate-y-180'}`}
      >
        <div dangerouslySetInnerHTML={{ __html: details }} />
      </div>
    </div>
  );
}

export default CategoryCard;
