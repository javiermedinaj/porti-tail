import React from 'react'
import { motion } from 'framer-motion'

function Skills() {
    return (
        <div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2x1">
                Skills
            </h3>
            <div className="grid grid-cols-4 gap-5">
                <motion.img
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                    src="/bootstrap.png" width="50px" height="30" />
                <motion.img
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                    src="/css.png" width="50px" height="30" />
                <motion.img
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                    src="/js.png"
                    width="50px" height="30" />
                <motion.img
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                    className="dark:bg-white" src="/nextjs.png" width="50px" height="30" />
                <motion.img
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                    src="/react.png" width="50px" height="30" />
                <motion.img
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                    className="dark:bg-white" src="/nodejs.png" width="50px" height="30" />
                <motion.img
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                    className="dark:bg-gray" src="/mysql.png" width="50px" height="30" />
                <motion.img
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                    className="dark:bg-gray" src="/excel.png" width="50px" height="30" />
            </div>
        </div>
    )
}

export default Skills