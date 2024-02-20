import React from "react";
import { motion } from "framer-motion";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="mt-10 bg-gray-100 dark:bg-black ">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-20 mt-20  uppercase tracking-[20px] text-center text-2x1 text-gray-500">
          Contactame
        </h2>
        <motion.p
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.9 }}
          className="mb-8 mt-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"
        >
          Comentame{" "}
          <span className="underline decoration-[#F7AB0A]/50">tu idea</span>{" "}
        </motion.p>

        <div className="flex flex-col justify-center items-center space-y-10">
          <div className="flex space-x-5 md:space-x-8">
            <div className="flex items-center">
              <FaWhatsapp className="h-full md:h-10" />
              <motion.p
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 0.9 }}
                className="font-bold ml-2"
              >
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://wa.me/1145268105?text=Hola, como estas?"
                >
                  Contactame via WhatsApp
                </a>
              </motion.p>
            </div>
          </div>
          <div className="flex space-x-5 md:space-x-8">
            <div className="flex items-center">
              <MapPinIcon className="h-7 md:h-9" />
              <motion.p
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 0.9 }}
                className="font-bold"
              >
                Buenos Aires, Capital Federal
              </motion.p>
            </div>
          </div>
          <div className="flex space-x-5 md:space-x-8">
            <div className="flex items-center">
              <EnvelopeIcon className="h-7 md:h-9" />
              <motion.p
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 0.9 }}
                className="font-bold"
              >
                <a href="mailto:javier_j_medina@hotmail.com" rel="noreferrer">
                  Enviame un correo
                </a>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
