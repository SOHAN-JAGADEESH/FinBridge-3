import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={`${layout.section} bg-[#0b0b0b] rounded-[4px]`}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} pl-9`}>
      Financial Concerns:  <br className="sm:block hidden" /> The Silent Stressor
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 pl-9`}>
      According to these studies, financial troubles were identified as the second most pressing concern for Indian students in Australia. 
      <br className="sm:block hidden" /> <br className="sm:block hidden" />
      Currency & Cost Differences:The significant difference between the Indian Rupee (INR) and the Australian Dollar (AUD) means students often underestimate their expenses.
      <br className="sm:block hidden" /> <br className="sm:block hidden" />
      Unfamiliar Banking Systems: Navigating a new banking ecosystem, understanding interest rates, and managing bank accounts can be overwhelming.
      </p>

    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] " />
    </div>
  </section>
);

export default CardDeal;
