import React from 'react'

const proyect = () => {

    return (
        <>

            <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
                <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                    Proyectos
                </h3>



                <button
                    className='bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 '
                >
                    <a href="/">
                        <span>
                            Volver a la pagina principal
                        </span>
                    </a>
                </button>
            </div>


        </>
    )
}

export default proyect