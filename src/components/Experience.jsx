import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points && Array.isArray(experience.points) ? (
          experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))
        ) : (
          <li className="text-white-100 text-[14px] pl-1 tracking-wider">
            No hay detalles disponibles
          </li>
        )}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <motion.div>
        <p className={`${styles.sectionSubText} text-center`}>
          {t("exp_title")}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          {t("exp_subtitle")}
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => {
            experience.title = i18n.t(`experiences.${index}.title`);
            experience.company_name = i18n.t(
              `experiences.${index}.company_name`
            );
            experience.date = i18n.t(`experiences.${index}.date`);
            experience.points = i18n.t(`experiences.${index}.points`, {
              returnObjects: true,
            });
            return (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            );
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
