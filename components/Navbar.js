import React from 'react'
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <header className="sticky top-0 p-5 flex:items-start justify-between max-w-7x1 mx-auto z-20 xl:items-center">
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                className="flex flex-row items-center"
            >
                <ul className="flex items-center">
                    <li>{currentTheme === 'dark' ? (
                        <button
                            className="bg-black-700 hover:bg-black  rounded-md border-purple-400 p-4"
                            onClick={() => setTheme('light')}
                        >
                            {' '}
                            <BsFillSunFill />
                        </button>
                    ) : (
                        <button
                            className="bg-gray-100  rounded-md border-purple-400 p-4 hover:bg-gray-300"
                            onClick={() => setTheme('dark')}
                        >
                            <BsFillMoonStarsFill />
                        </button>
                    )}
                    </li>

                </ul>
            </motion.div>
        </header>


        // <div >
        //     <nav className="py-10 pl-2 pr-2 mb-12 flex justify-between  dark:text-white" >

        //         <ul className="flex items-center">
        //             <li>{currentTheme === 'dark' ? (
        //                 <button
        //                     className="bg-black-700 hover:bg-black  rounded-md border-purple-400 p-4"
        //                     onClick={() => setTheme('light')}
        //                 >
        //                     {' '}
        //                     <BsFillSunFill />
        //                 </button>
        //             ) : (
        //                 <button
        //                     className="bg-gray-100  rounded-md border-purple-400 p-4 hover:bg-gray-300"
        //                     onClick={() => setTheme('dark')}
        //                 >
        //                     <BsFillMoonStarsFill />
        //                 </button>
        //             )}
        //             </li>
        //             <li>
        //                 <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-.md ml-8" href="/">
        //                     Algunos de mis proyectos
        //                 </a>
        //             </li>
        //             <li>
        //                 <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-.md ml-8" href="/">
        //                     Sobre este sitio
        //                 </a>
        //             </li>
        //         </ul>
        //     </nav>
        // </div>
    )
}

export default Navbar