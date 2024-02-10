import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div className="bg-black-200 p-10 rounded-3xl xs:w-[400px] md:w-[320px] w-full border-2 border-[#B08FFF]">
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} | {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>{t("testimonials_subtitle")}</p>
          <h2 className={styles.sectionHeadText}>{t("testimonials_title")}.</h2>
        </motion.div>
      </div>
      <div
        className={`-mt-20 pb-14 flex flex-row flex-wrap justify-center gap-7`}
      >
        {testimonials.map((testimonial, index) => {
          testimonial.testimonial = i18n.t(`testimonials.${index}.testimonial`);
          testimonial.position = i18n.t(`testimonials.${index}.position`);
          testimonial.company = i18n.t(`testimonials.${index}.company`);

          return (
            <FeedbackCard
              key={testimonial.testimonial}
              index={index}
              {...testimonial}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
