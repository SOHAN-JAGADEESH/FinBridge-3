import React from 'react';
import Navbar from "../components/Navbar";
import styles from "../style";

const Analyze = () => {
  return (
    <div className="bg-primary w-full overflow-hidden min-h-screen relative ">
      <div className={`${styles.paddingX} ${styles.flexCenter} main-section `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <div className={`mt-8 text-center`}>
            <h2 className={styles.heading2}>
                Let us analyze your expensiture
            </h2>
            <p className={`${styles.paragraph} mt-5`}>
                Your description goes here. This is a placeholder text to show where the description will appear.
            </p>
          </div>
          {/* You can add more content here as needed */}
        </div>
      </div>
    </div>
  );
}

export default Analyze;
