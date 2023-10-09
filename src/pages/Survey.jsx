import React, { useState } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "../index.css";
import { json } from "./json";
import { themeJson } from "./theme";
import {Navbar, Footer} from "../components";
import styles from "../style";
import ResultsComponent from "../components/ResultsComponent"; 
import UserJourneyCard from "./UserJourneyCard";

function SurveyComponent() {
    const [surveyData, setSurveyData] = useState(null);
    const [showSurvey, setShowSurvey] = useState(false);

    const survey = new Model(json);
    survey.applyTheme(themeJson);

    survey.onComplete.add(async (sender, options) => {
        setShowSurvey(false);
        try {
            const data = await apiCall(sender.data);
            setSurveyData(data);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    });

    const apiCall = async (data) => {
        console.log("API Request Data:", data);
        try {
            const response = await fetch("https://ikx7c2bwgf.execute-api.ap-southeast-2.amazonaws.com/test/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }

            const responseData = await response.json();
            console.log('API Response:', responseData);
            return responseData;
        } catch (error) {
            console.error('API call failed', error);
            throw error;
        }
    };

    return (
        <div className="bg-primary w-full overflow-hidden min-h-screen relative">
            <div className={`${styles.paddingX} ${styles.flexCenter} main-section`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar/>
                    
                    {!showSurvey && (
                    <div className="mt-8 text-center">
                        <h2 className={`${styles.heading2}`}>Discover Your Estimated Expenditure in Australia</h2>
                        <p className= {`${styles.paragraph} mt-4 `}>
                            Moving to a new country comes with its set of challenges, one of which is managing your finances smartly. 
                            Take our questionnaire to get an estimate of your monthly expenditure based on your lifestyle preferences.
                        </p>
                        <p className= {`${styles.note} mt-4 `}>
                            Note: The values provided are approximate and based on average costs in Australia. Individual expenses may vary.
                        </p>
                        <br/>
                    </div>
                    )}
                    <div className="border-2 border-[#1CE8A8] p-5"> 
                    <br/>
                        
                        <div className={`${styles.heading3} mt-4 text-center`}>
                            <h2 >Estimate Your Expenses</h2>
                        </div>
                        {showSurvey ? (
                            <div className="w-full h-70vh relative">
                                <button 
                                    onClick={() => setShowSurvey(false)} 
                                    // className={` right-4 py-2 px-4 font-poppins font-medium text-[12px] text-primary bg-blue-gradient rounded-[10px] outline-none z-10 ${styles}`}
                                    className={`absolute top-4 right-4 py-1 px-3 font-poppins font-light text-[12px] text-[#1CE8A8] bg-black border border-[#1CE8A8] rounded-[3px] outline-none hover:bg-[#1CE8A8] hover:text-black z-10`}
                                    type="button"
                                    >
                                    Go Back
                                </button>
                                <Survey model={survey} />
                            </div>
                                ) : (
                            <div className="text-center mb-4">
                                <button onClick={() => setShowSurvey(true)} className={`mt-2 py-3 px-6 font-poppins font-medium text-[#1CE8A8] bg-black border border-[#1CE8A8] rounded-[3px] outline-none hover:bg-[#1CE8A8] hover:text-black `}>
                                    Start Questionnaire
                                </button>
                            </div>
                        )}
                        <div className="flex items-center justify-center">
                            {!showSurvey && surveyData && <ResultsComponent data={surveyData} />}
                        </div>
                        <br/><br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                    <UserJourneyCard 
                            header="Analyze and Optimize Your Expenditure"
                            paragraph="After estimating your expenditure, take the next step by inputting your actual expenses. We'll provide an in-depth analysis and offer tailored tips to help you make the most of your student budget in Australia. Empower your financial journey with insights and recommendations."
                            navigateTo="/analyze"
                        />
                </div>
            </div>
            <br/>
            
            <Footer/>
        </div>
        
    );
}

export default SurveyComponent;
