import React from "react";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { github } from "../assets";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  app_link,
}) => {

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[430px] border-2 border-[#B08FFF]"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {source_code_link && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3
            onClick={() => app_link && window.open(app_link, "_blank")}
            className={`text-white font-bold text-[24px] ${app_link ? 'cursor-pointer' : ''}`}
          >
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags && tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>{t("projects_subtitle")}</p>
        <h2 className={`${styles.sectionHeadText}`}>{t("projects_title")}</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {t("projects_desc")}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-row flex-wrap justify-center gap-4">
        {projects.map((project, index) => {
                    
          // Crear una copia del proyecto antes de modificarlo
          const translatedProject = {
            ...project,
            description: i18n.t(`projects.${index}.description`, {
              defaultValue: project.description || 'No description available'
            })
          };

          return (
            <ProjectCard 
              key={`project-${index}`} 
              index={index} 
              {...translatedProject} 
            />
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
