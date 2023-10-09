import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router v6
import styles from "../style";

/**
 * UserJourneyCard Component
 * 
 * This component represents a card that displays a header, a paragraph, and a button.
 * The button, when clicked, navigates the user to a specified route.
 * 
 * @param {string} header2 - The header text to be displayed.
 * @param {string} paragraph - The paragraph text to be displayed.
 * @param {string} navigateTo - The route to navigate to when the button is clicked.
 * @returns {JSX.Element} - A card displaying the provided information with a navigation button.
 */
const UserJourneyCard = ({ header, paragraph, navigateTo, data = {} }) => {

    return (
        <section 
            className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-[#232323] rounded-[10px] box-shadow border-[1px] border-[#1CE8A8] shadow-inner m-[10px] p-[10px]`}
        >
            <div className="flex-1 flex flex-col">
                <h2 className={styles.heading3}>{header}</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    {paragraph}
                </p>
            </div>

            <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
                <Link 
                  to={{
                    pathname: navigateTo,
                    state: data
                  }}
                  className={`py-2 px-8 font-poppins font-medium text-[#1CE8A8] bg-black border border-[#1CE8A8] rounded-[3px] outline-none hover:bg-[#1CE8A8] hover:text-black`}
                >
                    Let's Go →
                </Link>
            </div>
        </section>
    );
}
export default UserJourneyCard;
