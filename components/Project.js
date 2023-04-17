import Link from 'next/link';
import { motion } from 'framer-motion';

const proyectos = [
    {
        id: 1,
        nombre: 'Proyecto 1',
        descripcion:
            'Descripción del proyecto 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imagen:
            'https://picsum.photos/200/300',
    },
    {
        id: 2,
        nombre: 'Proyecto 2',
        descripcion:
            'Descripción del proyecto 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imagen:
            'https://picsum.photos/200/300',
    },
    {
        id: 3,
        nombre: 'Proyecto 3',
        descripcion:
            'Descripción del proyecto 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imagen:
            'https://picsum.photos/200/300',
    },
    {
        id: 4,
        nombre: 'Proyecto 3',
        descripcion:
            'Descripción del proyecto 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imagen:
            'https://picsum.photos/200/300',
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
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-4 my-8" key={proyecto.id}>
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                className="rounded-t-lg object-cover h-23 w-full" src={proyecto.imagen} alt={proyecto.nombre} />
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{proyecto.nombre}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{proyecto.descripcion}</p>
                                <Link href="#" className="flex justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2">
                                    Read more
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <button className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2">
                        <Link href="/..">volver atras</Link>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Proyect;
