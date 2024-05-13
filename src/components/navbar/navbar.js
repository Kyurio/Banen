import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    window.location.href = '/login';
  };

  useEffect(() => {

    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    };

    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);


  return (
    <nav className="flex justify-between px-20 py-10 items-center navbar">
      <h1 className="text-xl font-bold">Banen</h1>
      <div className="flex items-center">
        <ul className="flex items-center space-x-6">

          <li>
            <Link to="/">Home</Link>
          </li>

          <li className="font-semibold text-gray-700">
            <Link to="/publicaciones">Buscar empleos</Link>
          </li>

          {isLoggedIn ? (
            <>
              <li className="font-semibold text-gray-700">
                <Link to="/admin">Mi perfil</Link>
              </li>
              <li className="font-semibold text-gray-700">
                <a onClick={handleLogout}>Logout</a>
              </li>
            </>
          ) : (
            <>
              <li className="font-semibold text-gray-700">
                <Link to="/register">Crear cuenta</Link>
              </li>
              <li className="font-semibold text-gray-700">
                <button
                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  <Link to="/login">Ingresa a tu cuenta</Link>
                </button>
              </li>
            </>
          )}


        </ul>
      </div>
    </nav>
  );
}

export default Navbar;



