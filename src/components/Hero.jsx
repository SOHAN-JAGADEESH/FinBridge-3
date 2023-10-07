import React from 'react';
import styles from "../style";
import { discount, robot, hero } from "../assets";
import Button from "./Button";


const Hero = () => {

  const handleScrollDown = () => {
    const nextSection = document.getElementById('features');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={`flex md:flex-row hero-section flex-col h-[calc(90vh)] lg:h-[calc(95vh)] ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-2`}>
        <div className="flex flex-row justify-between items-center w-full">
          <p className="hero-text">Transitioning from <span className="highlighted">India</span> to <span className="highlighted">Australia</span>?</p>
        </div>
        <p className="sub-text">Let us guide your financial journey from <span className="highlighted">Rupees</span> to <span className="highlighted">Dollars</span>.</p>
        <Button styles={`mt-10`} />
      </div>

      <div className={`flex flex-1 ${styles.flexCenter} md:my-0 my-10 relative overflow-hidden`}>
        <img src={hero} alt="billing" className="w-[90%] h-auto max-h-[60vh] lg:max-h-[70vh] relative z-[5]" />
      </div>
      <div className="scroll-down-btn" onClick={handleScrollDown}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 16L4 8M12 16L20 8" stroke="#1CE8A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      </div>
    </section>


  );
};

export default Hero;
