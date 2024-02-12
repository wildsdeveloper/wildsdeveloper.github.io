import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import { FiArrowDownCircle } from "react-icons/fi";
import { SectionWrapper } from "../hoc";
import { programming } from "../assets";
import { styles } from "../styles";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="flex flex-col md:justify-between items-center lg:flex-row mt-12 md:mt-2"
    >
      <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.1,
          }}
          className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] md:mt-5 tracking-tight"
        >
          {t("greeting")}
          <br />
          <span className="text-[#B08FFF]">Wilder Rincon</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.2,
          }}
          className={`${styles.heroSubText} text-white-100`}
        >
          {t("desc_hero1")}
          &nbsp;{t("desc_hero2")}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.3,
          }}
          className="flex justify-center sm:block"
        >
          <a
            download="WildsRincon-Resume.pdf"
            href="/files/CV_Wilder_Rincon_US.pdf"
            className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
            aria-label="Download Resume"
          >
            <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
            <span className="text-sm sm:text-lg font-general-medium duration-100">
              {t("btn_download")}
            </span>
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="w-full sm:w-2/3 mt-8"
      >
        <img src={programming} alt="Developer" />
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(Hero);
