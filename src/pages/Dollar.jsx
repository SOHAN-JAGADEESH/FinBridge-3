import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import styles from "../style";
import Input from "../components/Input";
import Output from "../components/Output";
import Footer from "../components/Footer";
import UserJourneyCard from "./UserJourneyCard";


/**
 * Dollar Component
 * Provides an interface for users to understand the purchasing power
 * of a given amount in Australian dollars. It fetches data based on the user's input
 * and displays the equivalent value in terms of goods/services in Australia.
 */
const Dollar = () => {
  // State to store the user input amount
  const [amount, setAmount] = useState(null);
  // State to store the to display the loading icon or not
  
  // State to store the response from the API
  const [response, setResponse] = useState(null);

  // Effect hook to fetch data when the amount changes
  useEffect(() => {
    if (amount !== null) {
       
      const integerAmount = parseInt(amount, 10);

      // Ensure the amount does not exceed the maximum limit of 100,000
      if (integerAmount > 100000) {
        console.error('Amount exceeds the maximum limit of 100,000');
        return;
      }

      // Define the API endpoint and options
      const apiUrl = "https://g0d2ycfkvg.execute-api.ap-southeast-2.amazonaws.com/test/users";
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "number" : integerAmount })
      };

      // Make the API call
      fetch(apiUrl, requestOptions)
        .then(response => response.json())
        .then(data => {
          if (data && data.statusCode === 200) {
              let parsedBody = JSON.parse(data.body);
              if (parsedBody && parsedBody.results) {
                  setResponse(parsedBody);
              }
          } else {
              console.error('Unexpected data format received:', data);
          }
      })
      .catch(error => {
         // Stop the loading indicator in case of an error
        console.error('There was an error!', error);
      });
      
    }
  }, [amount]);

  return (
    <div className="bg-primary w-full overflow-hidden min-h-screen relative">
      <div className={`${styles.paddingX} ${styles.flexCenter} main-section`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <div className={`mt-8 text-center`}>
            <h2 className={styles.heading2}>
              Understanding Your Money's Worth in Australia
            </h2>
            <p className={`${styles.paragraph} mt-5`}>
              It could be challenging to evaluate the purchasing power of your money in a foreign country.
              We are here to help,
              Enter any amount of Australian Dollar here and see what it can get you.
              Every dollar spent is a reminder of the sacrifices made by your family miles away, spend it wisely!
            </p>
            <p className={`${styles.note} mt-5`}>
              Note: these are approximate values based on average costs and are meant to serve as a general guideline. Actual expenses can vary based on individual preferences, location, and current market conditions.
            </p>
            <br/>
          </div>

          <div className="border-2 border-[#1CE8A8]">
            <div className="text-center mb-4">
              <h2 className={`${styles.heading3} mt-5`}>See what your money can get you?</h2>
              <br/>
              <label className={`${styles.note}`} htmlFor="amountInput">Please enter the amount</label>
            </div>

            <div className={`bg-primary ${styles.paddingX} flex justify-center`}>
              <div className={`w-full flex justify-center`}>
                <Input setAmount={setAmount} />
              </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <br/>
                {response && <Output response={response} />}
                <br/>
                <br/>
              </div>
            </div>
            <br/>
          </div>
          <br/>
          <UserJourneyCard 
          header="Comparing Costs: India vs. Australia"
          paragraph="Discover the cost differences between India and Australia to make informed financial decisions during your stay."
          navigateTo="/compare"
        />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dollar;
