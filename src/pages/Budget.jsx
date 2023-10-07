import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import styles from "../style";

const Budget = ({ location }) => {
  const [choice, setChoice] = useState(null);
  const [income, setIncome] = useState('');
  const [savings, setSavings] = useState('');
  const [months, setMonths] = useState('');

  const expenditures = location?.state?.expenditures || {};

  return (
    <div className="bg-primary w-full overflow-hidden min-h-screen relative ">
      <div className={`${styles.paddingX} ${styles.flexCenter} main-section `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <div className={`mt-8 text-center`}>
            <h2 className={styles.heading2}>
                Budgeting Options
            </h2>
            <p className={`${styles.paragraph} mt-5`}>
                Choose your budgeting goal:
            </p>

            <button onClick={() => setChoice('saveMoney')}>Save Money</button>
            <button onClick={() => setChoice('saveGoal')}>Save Towards a Goal</button>
            <button onClick={() => setChoice('reduceExpenditure')}>Reduce Expenditure</button>

            {choice === 'saveMoney' && (
              <div>
                <input type="number" placeholder="Income in $" value={income} onChange={e => setIncome(e.target.value)} />
                <select value={savings} onChange={e => setSavings(e.target.value)}>
                  <option value="10">10%</option>
                  <option value="20">20%</option>
                  <option value="custom">Custom</option>
                </select>
                {savings === 'custom' && <input type="number" placeholder="Custom Percentage" />}
              </div>
            )}

            {choice === 'saveGoal' && (
              <div>
                <input type="number" placeholder="Income in $" value={income} onChange={e => setIncome(e.target.value)} />
                <input type="number" placeholder="Savings in $" value={savings} onChange={e => setSavings(e.target.value)} />
                <input type="number" placeholder="Months to achieve" value={months} onChange={e => setMonths(e.target.value)} />
              </div>
            )}

            {choice === 'reduceExpenditure' && (
              <div>
                <select value={savings} onChange={e => setSavings(e.target.value)}>
                  <option value="10">Reduce by 10%</option>
                  <option value="20">Reduce by 20%</option>
                  <option value="custom">Custom Reduction</option>
                </select>
                {savings === 'custom' && <input type="number" placeholder="Custom Percentage" />}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Budget;
