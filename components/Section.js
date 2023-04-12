import React from 'react'
import { motion } from 'framer-motion'

const Section = () => {


    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}


                className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center  dark:bg-black">
                <h3 className="absolute top-6 uppercase tracking-[20px] text-gray-500 text-2x1 ">
                    Info
                </h3>
                <motion.img
                    initial={{
                        x: -200,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 1.2,
                    }}
                    whileInView={{
                        opacity: 1, x: 0,
                    }}
                    viewport={{ once: true }}
                    src="/me.jpg"
                    className=' md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
                />
                <div className="space-y-10 px-0 md:px-10">
                    <h4 className="text-4xl font-semibold  dark:text-white">
                        Esto es un {" "}
                        <span className="underline decoration-[#F7AB0A]/50">
                            pequeño
                        </span>{" "}
                        resumen
                    </h4>
                    <motion.p
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-base  dark:text-white">
                        Me fascina crear sitios webs que briden una experiencia de usuario unica y satisfactoria.
                        Considero que soy una persona autodidacta, responsable y comprometida con mi trabajo.
                        Constantemente estoy aprendiendo nuevas tecnologias y herramientas para mejorar mis habilidades
                    </motion.p>
                    <button>
                        <a href="/proyects">
                            <span className="underline decoration-[#F7AB0A]/50">
                                Estos son algunos de mis proyectos
                            </span>
                        </a>
                    </button>
                </div>

            </motion.div>

        </>
    )
}

export default Section