import Link from 'next/link';
import { motion } from 'framer-motion';

const proyectos = [
    {
        id: 1,
        nombre: 'Iphone 3D',
        descripcion:
            'Modelo 3D de iphone utilizando React y ThreeJS.',
        imagen:
            '/iphone.jpg',
        link: "https://iphone-code.vercel.app/",
        code: "https://github.com/javiermedinaj/iphone-code"
    },
    {
        id: 2,
        nombre: 'Tipos de palta',
        descripcion:
            'Tipos de palta con NextJS, utilizando la carpeta API',
        imagen:
            '/paltas.jpg',
        link: "https://next-palta.vercel.app/",
        code: "https://github.com/javiermedinaj/next-palta"
    },
    {
        id: 3,
        nombre: 'RickAndMorty',
        descripcion:
            'Personajes de Rick and Morty consumiendo su API',
        imagen:
            '/rick.jpg',
        link: "https://rickandmortyapi-lilac.vercel.app/",
        code: "https://github.com/javiermedinaj/rickandmortyapi"
    },
    {
        id: 4,
        nombre: 'Lista de tareas',
        descripcion:
            'Listado de tareas, utilizando ReactJS',
        imagen:
            '/todo.jpg',
        link: "https://taskapp-nu.vercel.app/",
        code: "https://github.com/javiermedinaj/taskapp"
    },
];

const Proyect = () => {
    return (
        <>
            <div className="p-5">
                <div className="flex justify-center">
                    <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl mb-8 mt-8">
                        Proyectos
                    </h3>
                </div>
                <div className="flex flex-wrap justify-center mt-8">
                    {proyectos.map((proyecto) => (
                        <div className="max-w-sm w-full h-[322px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-2 my-2 flex items-center" key={proyecto.id}>
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                className="rounded-t-lg object-cover h-80 w-20" src={proyecto.imagen} alt={proyecto.nombre} />
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{proyecto.nombre}</h5>
                                <p className="proyecto-descripcion mb-3 font-normal text-gray-700 dark:text-gray-400">{proyecto.descripcion}</p>

                                <Link href={proyecto.link} target="_blank" className="flex justify-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-2">
                                    Ver mas
                                </Link>

                                <Link href={proyecto.code} target="_blank" className="flex justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2">
                                    Code
                                </Link>

                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <button className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2">
                        <Link href="/..">Volver atras</Link>
                    </button>
                    <button className="px-3 ml-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800 mt-2">
                        <Link target='_blank' rel="noopener noreferrer" href="/curri2023abril.pdf">Ver curriculum</Link>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Proyect;
