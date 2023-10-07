import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section 
  className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[10px] box-shadow border-[1px] border-[#1CE8A8] shadow-inner m-[10px] p-[10px]`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s try what we offer now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Equip yourself with tools, insights, and deals tailored for Indian students in Victoria.
      Navigate the financial waters of Australia with confidence and ease.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
