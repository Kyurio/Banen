import React, { useState, useEffect } from 'react';
import { MdWorkOutline } from "react-icons/md";
import axios from 'axios';


function Details() {
  const [publicacion, setPublicacion] = useState(null);
  const [error, setError] = useState(null);
  const [publicaciones, setPublicaciones] = useState([]);
  const [filteredPublicaciones, setFilteredPublicaciones] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [regiones, setRegiones] = useState([]);

  const Search = (e) => {
    setSearchTerm(e.target.value);
  };

  const Paginador = (page) => {
    setCurrentPage(page);
  };

  const formatoMonedaChilena = (numero) => {
    numero = Math.round((numero + Number.EPSILON) * 100) / 100;
    let numeroFormateado = numero.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return numeroFormateado;
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const fetchDetallePublicacion = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/Publicacion/${id}`);
        setPublicacion(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchDetallePublicacion();
  }, []);

  useEffect(() => {
    const fetchListadoPublicaciones = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/Publicaciones');
        setPublicaciones(response.data);
      } catch (error) {
        console.error('Error publicaciones:', error);
      }
    };

    fetchListadoPublicaciones();
  }, []);

  useEffect(() => {
    const fetchRegiones = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/Regiones');
        setRegiones(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchRegiones();
  }, []);

  useEffect(() => {
    const filteredData = publicaciones.filter((publicacion) =>
      publicacion.nom_oferta.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPublicaciones(filteredData);
  }, [publicaciones, searchTerm]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPublicaciones.slice(indexOfFirstItem, indexOfLastItem);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex mt-10">

      <section className="w-1/2 flex flex-col antialiased bg-gray-50 text-gray-600 min-h-screen  p-4">
        <div className="flex">
          <select
            id="dropdown-button"
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
            onChange={(e) => setSearchTerm(e.target.value)}
          >
            <option value="">Todas las regiones</option>
            {regiones.map((region) => (
              <option key={region.id_region} value={region.nom_region}>
                {region.nom_region}
              </option>
            ))}
          </select>
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 rounded-e-lg border-s-2 border" placeholder="Buscar por palabra clave." required
              value={searchTerm}
              onChange={Search}
            />
          </div>
        </div>


        <ul className="flex flex-col p-4">
          {currentItems.map((item, index) => (
            <a className=''>
              <li className="oferta border-gray-400 flex flex-row mb-5" key={index}>
                <div className="select-none cursor-pointer rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                  <div className="oferta-icon flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">
                    <MdWorkOutline />
                  </div>
                  <div className="flex-1 pl-1 mr-16">
                    <div className="font-medium text-black">{item.nom_oferta}</div>
                    <div className="text-gray-600 text-sm"><b>sueldo bruto:</b> ${formatoMonedaChilena(item.bruto)}</div>
                  </div>
                  <div className="text-gray-600 text-xs">{item.cod_city}</div>
                </div>
              </li>
            </a>
          ))}
        </ul>
        <nav aria-label="Page navigation example">
          <ul className="flex items-center -space-x-px h-8 text-sm">
            <li>
              <button onClick={() => Paginador(currentPage - 1)} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" disabled={currentPage === 1}>
                <span className="sr-only">Previous</span>
                <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                </svg>
              </button>
            </li>
            {Array.from({ length: Math.ceil(filteredPublicaciones.length / itemsPerPage) }, (_, index) => (
              <li key={index}>
                <button onClick={() => Paginador(index + 1)} className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage === index + 1 ? 'text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:text-white dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white' : ''}`}>
                  {index + 1}
                </button>
              </li>
            ))}
            <li>
              <button onClick={() => Paginador(currentPage + 1)} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" disabled={currentPage === Math.ceil(filteredPublicaciones.length / itemsPerPage)}>
                <span className="sr-only">Next</span>
                <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </section>

      <section className="w-1/2 flex flex-col antialiased bg-gray-50 text-gray-600 min-h-screen  p-4">
        <div className="h-full">
              detalle
        </div>
      </section>
    </div>
  );
}

export default Details;
