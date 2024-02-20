import React from "react";
import { motion } from "framer-motion";
import {
  SiBootstrap,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMysql,
  SiPython,
  SiTailwindcss,
} from "react-icons/si"; // ... other imports as needed

function Skills() {
  return (
    <div className="m-10 bg-white dark:bg-black">
      <h3 className="flex justify-center mt-10 mb-20 uppercase tracking-[20px] text-gray-500 text-2x1">
        Skills
      </h3>
      <div className="flex justify-center items-center p-10">
        <div className="grid grid-cols-4 gap-8">
          <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
            <SiBootstrap size={50} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
            <SiCss3 size={50} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
            <SiJavascript size={50} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
            <SiReact size={50} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
            <SiNodedotjs size={50} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
            <SiMysql size={50} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
            <SiPython size={50} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
            <SiTailwindcss size={50} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
