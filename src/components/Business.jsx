import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={`${layout.section} bg-[#0b0b0b] rounded-[4px]`}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} pl-9 py-3`}>
        From Classes to Cashflows, <br className="sm:block hidden" /> We've Got Your Back.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 pl-9`}>
      Starting a new chapter in Australia isn't just about academics, 
      it's about understanding the dollars and cents too.
      With a plethora of financial decisions to make, from bank accounts to budgets,
      our platform simplifies the maze. Dive into curated resources,
      tailored advice, and tools designed especially for India's brightest in Victoria.
      Your journey, our map
      </p>
    </div>

    <div className={`flex flex-col gap-6 ${layout.sectionImg} `}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
