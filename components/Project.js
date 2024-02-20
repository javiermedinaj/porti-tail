import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "./Footer";
const proyectos = [
  {
    id: 1,
    nombre: "Iphone 3D",
    descripcion: "Modelo 3D de iphone utilizando React y ThreeJS.",
    imagen: "/iphone.jpg",
    link: "https://iphone-code.vercel.app/",
    code: "https://github.com/javiermedinaj/iphone-code",
  },
  {
    id: 2,
    nombre: "Coffe Store template",
    descripcion: "Coffe Store hecho con ReactJS y ChakraUI",
    imagen: "/cafe.png",
    link: "https://coffe-store-xi.vercel.app/",
    code: "https://github.com/javiermedinaj/coffe-store",
  },
  {
    id: 3,
    nombre: "Weeding Page",
    descripcion:
      "Template hecho con ReactJS, TailwindCSS, Framer-Motion y Gsap",
    imagen: "/Weeding.png",
    link: "https://template-fotografia-two.vercel.app/",
    code: "https://github.com/javiermedinaj/fotogr",
  },
  {
    id: 4,
    nombre: "QR Generator",
    descripcion: "Generador de QR, utilizando ReactJS y tailwindcss",
    imagen: "/Qr-generator.png",
    link: "https://qr-web-vite.vercel.app/",
    code: "https://github.com/javiermedinaj/qr-web-vite",
  },

  {
    id: 5,
    nombre: "Lista de tareas",
    descripcion: "Listado de tareas, utilizando ReactJS",
    imagen: "/todo.png",
    link: "https://taskapp-nu.vercel.app/",
    code: "https://github.com/javiermedinaj/taskapp",
  },
];

const Proyect = () => {
  return (
    <div className="bg-white dark:bg-black">
      <div className="p-5">
        <div className="flex justify-center">
          <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl mb-8 mt-8">
            Proyectos
          </h3>
        </div>

        <div className="flex flex-wrap gap-20 justify-center mt-10 mb-10 ">
          {proyectos.map((proyecto) => (
            <div
              key={proyecto.id}
              className="flex flex-col md:flex-row w-full md:w-80 lg:w-64 mx-8 mb-8"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-full md:w-48 lg:w-32 object-cover h-48 md:h-auto rounded-md rounded-tl-md md:rounded-l-md md:rounded-tr-none"
                src={proyecto.imagen}
                alt={proyecto.nombre}
              />
              <div className="p-4 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-b-md rounded-br-md md:rounded-b-md md:rounded-r-md shadow-md md:shadow-none hover:shadow-xl">
                <h5 className="mb-2 text-lg md:text-2xl font-bold text-gray-900 dark:text-white">
                  {proyecto.nombre}
                </h5>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-400 mb-4 md:mb-0">
                  {proyecto.descripcion}
                </p>
                <div className="flex justify-between m-4">
                  <a
                    href={proyecto.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto m-2 md:mt-0 ml-0 md:ml-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-blue-600 dark:hover:bg-green-700 dark:focus:ring-blue-800"
                  >
                    Ver
                  </a>
                  <a
                    href={proyecto.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto m-2 md:mt-0 ml-0 md:ml-2 px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-md hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10 pt-20">
          <button className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2">
            <Link href="/..">Volver al inicio</Link>
          </button>
          <button className="px-3 ml-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800 mt-2">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="/cvhabilidades.pdf"
            >
              Ver curriculum
            </Link>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Proyect;
