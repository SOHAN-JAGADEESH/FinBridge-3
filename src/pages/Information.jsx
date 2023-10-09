import React from 'react';
import {Navbar,Footer} from "../components";
import styles from "../style";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // Importing the styles
import UserJourneyCard from './UserJourneyCard';
import { FaMoneyBillWave, FaPhoneAlt, FaUniversity } from 'react-icons/fa'; // Importing icons
import "../index.css";

const Information = () => {
  const dummyData = [
    { 
      title: "Understand the Currency", 
      cardTitle: "Understand the Currency", 
      cardDetailedText: [
        "Research: Before you arrive, research the local currency, including notes, coins, and their denominations.",
        "Exchange Rates: Keep an eye on the exchange rates to get the best value when converting your money.",
        "Currency Exchange: Initially, you might need to exchange some currency. Find out the best places to do this to avoid high fees.",
      ],
      media: {
        source: {
          url: "https://www.youtube.com/embed/MGsmirvDNj0",
          type: "mp4"
        },
        type: "VIDEO",
        name: "Currency"
      }
    },
    { 
      title: "Get a Local Phone Number", 
      cardTitle: "Get a Local Phone Number", 
      cardDetailedText: [
        "Research Providers: Research different mobile network providers for the best plans and coverage.",
        "Documentation: Be prepared with necessary documents such as passport and local address proof to obtain a SIM card.",
        "Prepaid vs Postpaid: Understand the difference between prepaid and postpaid plans and choose one that suits your needs. A postpaid plan may seem easier and more consistent, but it could incur higher cost in the long term. Do your research thoroughly and pick a plan that suit your needs the best."
      ],
      media: {
        source: {
          url: "https://www.youtube.com/embed/Y_-ew50iVjQ",
          type: "mp4"
        },
        type: "VIDEO",
        name: "Phone Number"
      }
    },
    { 
      title: "Open a bank account", 
      cardTitle: "Open a bank account", 
      cardDetailedText: [
        "Research Banks: Research various banks and their offerings for international students.",
        "Appointment: Schedule an appointment with the bank to open an account.",
        "Documentation: Be prepared with necessary documents such as passport, COE and local address proof.",
        "Internet Banking: Set up internet banking for easy access to your account."
      ],
      media: {
        source: {
          url: "https://www.youtube.com/embed/Ksk1wCVyqPc",
          type: "mp4"
        },
        type: "VIDEO",
        name: "Bank Account"
      }
    },
    { 
      title: "Get familiarized with transportation", 
      cardTitle: "Get familiarized with transportation", 
      cardDetailedText: [
        "Public Transport: Learn about the public transportation system, including buses, trains, and trams. Download the PTV app may help with finding the fastest public transport route when you are still exploring.",
        "Transport Cards: The transport card in Melbourne is called Myki, which you can purchase one from any reception of public transport station, or from stores that have this 'Myki' label.",
        "Cycling & Walking: Consider walking or cycling for short distances to save money and build up a healthier and sustainable habit."
      ],
      media: {
        source: {
          url: "https://www.youtube.com/embed/-I0CWkzGCg4",
          type: "mp4"
        },
        type: "VIDEO",
        name: "Transportation"
      }
    },
    { 
      title: "Get to know your OSHC healthcare", 
      cardTitle: "Get to know your OSHC healthcare", 
      cardDetailedText: [
        "Coverage Details: Understand what your Overseas Student Health Cover (OSHC) covers.",
        "Finding a Doctor: Learn how to find a doctor or healthcare provider that accepts OSHC.",
        "Claim Process: Familiarize yourself with the claim process in case you need to use your OSHC.",
        "Mobile app: Download the mobile app to track your claim and manage your account more easily."
      ],
      media: {
        source: {
          url: "https://www.youtube.com/embed/NXwjfWvwQTw",
          type: "mp4"
        },
        type: "VIDEO",
        name: "OSHC Healthcare"
      }
    },
    { 
      title: "Debit card", 
      cardTitle: "  Debit card", 
      cardDetailedText: [
        "Receiving your card: Within two weeks after applying for a bank account, your cards would be mailed to your postal address. Contact your bank if you have any questions.",
        "Usage: Learn how to use your debit card for various transactions including online purchases. A debit card directly deduct funds from your designated account, with no credit allowed. Insufficient fund may result in failure in processing your payments.",
        "Safety: Understand the safety measures to protect your card details from theft or fraud."
      ],
    },
    { 
      title: "Get your Tax File Number", 
      cardTitle: " Get your Tax File Number", 
      cardDetailedText: [
        "TFN Number: After getting the basic settled, you may want to apply for a Tax File Number (TFN). While it is not essential to obtain a TFN, it provides the following benefits:",
        "Employment: If you plan to work in Australia, having a TFN is essential. Without a TFN, your employer will withhold tax at the highest marginal rate, which means a significant portion of your earnings will be deducted as tax.",
        "Banking: Banks and financial institutions are required to withhold tax on the interest earned on your savings or investments. Having a TFN ensures that the correct amount of tax is withheld.",
        "Education: If you are planning to pursue further education in Australia and intend to avail the Higher Education Loan Program (HELP), having a TFN is a requirement."
      ],
      media: {
        source: {
          url: "https://www.youtube.com/embed/180T8q3-tbo",
          type: "mp4"
        },
        type: "VIDEO",
        name: "Tax File Number"
      }
    },
    { 
      title: "Knowing the tax system", 
      cardTitle: "Knowing the tax system", 
      cardDetailedText: [
        "Understanding Tax Laws: Australia and India have similar tax payment concepts, where tax payment are made from the source (employer). In India, this system is called the Tax Deducted at Source (TDS) system, while in Australia, it is usually referred as a Pay As You Go (PAYG) tax system.",
        "Filing Tax: Understand the process of filing tax returns, so that work-related expenses might be reimbursed."
      ],
      media: {
        source: {
          url: "https://www.youtube.com/embed/7XS6lS1d5N8",
          type: "mp4"
        },
        type: "VIDEO",
        name: "Tax System"
      }
    },
    { 
      title: "Analyze and Find Accommodation ", 
      cardTitle: "Analyze and Find Accommodation ", 
      cardDetailedText: [
        "Rental Agreement: Understand the terms and conditions of your rental agreement. A bond payment is usually requirement when renting a property in Melbourne, understand your right and how to file for a bond return when a lease ends.",
        "Rental cost: Rental cost in Melbourne varies according to the geographical location of the property. Usually, the closer it is to the Central Business District (CBD), the more expensive it is. While if you live too far from campus, your transportation cost may increase accordingly."
      ],
      media: {
        source: {
          url: "https://www.youtube.com/embed/WF5F9c3Rd60",
          type: "mp4"
        },
        type: "VIDEO",
        name: "Accommodation Costs"
      }
    },
    { 
      title: "Budgeting and Financial Planning - FinBridge", 
      cardTitle: "   Budgeting and Financial Planning - FinBridge", 
      cardDetailedText: [
        "Creating a Budget: Develop a monthly budget to manage your finances effectively.",
        "Expense Tracking: Use apps or tools to track your expenses and stay within your budget.",
        "Monitor spending habit: Supermarkets and grocery storers usually rotate their products to go onto discount, regularly buying discounted product may lower your expenses significantly in long term."
      ],
    },
  ];

  return (
    <div className="bg-primary w-full overflow-hidden min-h-screen relative">
      <div className={`${styles.paddingX} ${styles.flexCenter} main-section`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <div className="mt-8 text-center">
            <h2 className={`${styles.heading2}`}>Your Financial Roadmap in Australia</h2>
            <p className={`${styles.paragraph} mt-4 `}>
              Welcome to your personalized financial roadmap, crafted specifically for international students in Australia. This timeline outlines the essential financial milestones and to-dos,
              helping you to manage your funds effectively while studying abroad. From opening a local bank account to understanding the nuances of Australian taxes - we've got you covered!
            </p>

            <div className="mt-8 text-center">
              <h2 className={`${styles.heading3}`}>Your Journey Begins Here</h2>
              <br />
            </div>
          </div>
          
          <VerticalTimeline lineColor={ '#1CE8A8'}>
            {dummyData.map((data, index) => (
              <VerticalTimelineElement
                key={index}
                date={data.title}
                contentStyle={{ background: '#0b0b0b', color: '#ffffff' }}
                contentArrowStyle={{ borderRight: '7px solid #0b0b0b' }}
                iconStyle={{ background: '#1CE8A8', color: '#fff', border: '2px solid black', boxShadow: 'none' }}
                icon={<FaMoneyBillWave />}
                
              >
                <h3 className={`${styles.heading4} vertical-timeline-element-title `}>{data.cardTitle}</h3>
                <br/>
                {data.media && data.media.type === "VIDEO" && (
                  <iframe
                    width="100%"
                    height="200"
                    src={data.media.source.url}
                    title={data.media.name}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                )}
                <p style={{ fontWeight: 'normal' }}>
                  {data.cardDetailedText.join(' ')}
                </p>
                
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
          <br />
          <br />
          <br />
          <UserJourneyCard 
              header="Tailor Your Expenditure Estimates"
              paragraph="Now that you've navigated the Information Timeline, it's time to delve deeper. Estimate your expenditure based on your unique lifestyle choices in Australia. Get a clearer picture of your finances and make informed decisions for a comfortable student life."
              navigateTo="/survey"
          />
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default Information;
