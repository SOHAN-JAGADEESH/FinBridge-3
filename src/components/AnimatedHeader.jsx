import { useState, useEffect } from "react";

const AnimatedHeader = ({ text }) => {
  const hasSeenAnimation = localStorage.getItem('hasSeenAnimation');
  const [opacity, setOpacity] = useState(hasSeenAnimation ? 1 : 0);

  useEffect(() => {
    if (!hasSeenAnimation) {
      const timer = setTimeout(() => {
        setOpacity(1);
        localStorage.setItem('hasSeenAnimation', 'true');
      }, 100); // slight delay of 100ms to start the fade-in

      return () => clearTimeout(timer); // clean up timer
    }
  }, [hasSeenAnimation]);

  return (
    <h2 
      className="flex-1 text-center font-poppins font-semibold ss:text-[52px] text-[42px] text-gradient ss:leading-[80.8px] leading-[65px] transition-opacity duration-1000"
      style={{ opacity }}
    >
      {text}
    </h2>
  );
};

export default AnimatedHeader;
