const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2: "font-poppins font-light xs:text-[34px] text-[20px] text-[#1CE8A8] leading-[30px] w-full mb-4 leading-relaxed", // Modified to match .hero-text
  paragraph: "font-poppins font-thin text-[17px] text-white leading-[30.8px] leading-relaxed", // Modified to match .sub-text
  note: "font-poppins font-thin text-[13px] text-[#1CE8A8] leading-[30.8px] leading-relaxed", // Modified to match .sub-text
  heading3: "font-poppins font-light xs:text-[28px] text-[20px] text-[#1CE8A8] leading-[30px] w-full mb-4 leading-relaxed", // Modified to match .hero-text
  heading4: "font-poppins font-light xs:text-[22px] text-[20px] text-[#1CE8A8] leading-[30px] w-full mb-4 leading-relaxed", // Modified to match .hero-text


  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-start items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-4",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 mt-10 ml-0 md:mt-0  relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};



export default styles;
