import React from 'react'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from 'react'

const Navbar = () => {

    const [darkMode, setDarkMode] = useState(null)

    return (
        <nav className="py-10 pl-2 pr-2 mb-12 flex justify-between">
            <h1>Desarrollado por Javier Medina</h1>
            <ul className="flex items-center">
                <li>
                    <BsFillMoonStarsFill
                        onClick={() => setDarkMode(!darkMode)}
                        className=" cursor-pointer text-2xl"
                    />
                </li>
                <li>
                    <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-.md ml-8" href="/">
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar