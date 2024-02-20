import React from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="dark:bg-black">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        className="flex flex-row items-center"
      >
        <ul className="flex items-center m-10 ">
          <li>
            {currentTheme === "dark" ? (
              <button
                className="bg-black-700 hover:bg-black  rounded-md border-purple-400 p-4"
                onClick={() => setTheme("light")}
              >
                {" "}
                <BsFillSunFill />
              </button>
            ) : (
              <button
                className="bg-gray-100  rounded-md border-purple-400 p-4 hover:bg-gray-300"
                onClick={() => setTheme("dark")}
              >
                <BsFillMoonStarsFill />
              </button>
            )}
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
