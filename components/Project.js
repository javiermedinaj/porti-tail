import React from 'react'

import { motion } from 'framer-motion'


const proyect = () => {
    const projects = [{
        id: 1,
        nombre: 'paltas',
        imageUrl: 'https://picsum.photos/200'
    },
    {
        id: 2,
        nombre: 'fazt',
        imageUrl: 'https://picsum.photos/200'
    }]
        ;
    return (
        <>

            <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
                <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                    Proyectos
                </h3>

                <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ x: 0, opacity: 1 }}
                    className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20"
                >
                    {projects.map((project) => (
                        <div key={project.id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                            <motion.img
                                initial={{ x: 300, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -300, opacity: 0 }}
                                src={project.imageUrl} />



                            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                                <h4 className="text-4xl font-semibold text-center"> {project.nombre}</h4>
                                <p className="text-lg text-center md:text-left">
                                    lorem ipsum dolor sit ametlorem lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem ipsum d
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <div className="w-full absolute top-[30%] bg-[#f7ab0a]/5 left-0 h-[500px]" />


            </div>


        </>
    )
}

export default proyect