import React from "react";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["Javier", "Medina"],
    loop: true,
    delaySpeed: 200,
  });

  return (
    <div className="text-center p-10 py-10  dark:bg-black">
      <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal 400 md:text-6xl">
        <span>{text}</span>
        <Cursor cursorColor="#7ab5" />
      </h2>
      <h3 className="text-2xl py-2 ">Software developer</h3>
      <p className="text-md py-5 leading-8 text-slate-900 dark:text-gray-200">
        Desarrollador web freelancer prestando servicios de programación
      </p>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
        <Link
          href="https://www.instagram.com/medinajavierj/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineInstagram />
        </Link>

        <Link
          href="https://www.linkedin.com/in/javiermedinaj/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
        </Link>

        <Link
          href="https://github.com/javiermedinaj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
