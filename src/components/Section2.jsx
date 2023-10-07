import { apple, bill, hurdles } from "../assets";
import styles, { layout } from "../style";

const Section2 = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={hurdles} alt="billing" className="w-[100%]  z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        A Reality Check:  <br className="sm:block hidden" /> Understanding the Hurdles
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Recent studies focusing on the experiences of Indian international students 
        in Australia have shed light on a range of challenges they face during their
        academic journey. From acclimating to a new cultural environment to navigating 
        a different academic structure, the transition can be both enlightening and tough
        <br className="sm:block hidden" /><br className="sm:block hidden" />
        However, one concern stood out in stark contrast: Financial Troubles.
      </p>
    </div>
  </section>
);

export default Section2;
