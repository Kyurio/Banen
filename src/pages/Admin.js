import React from 'react';
import { Redirect } from 'react-router-dom';


import Footer from '../components/sections/Footer';

function AdminPage() {
  // Obtener el valor de la variable isLoggedIn del localStorage
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  // Verificar si el usuario está autenticado
  if (isLoggedIn !== 'true') {
    // Si el usuario no está autenticado, redirigir al login
    window.location.href = '/login'; // Cambia '/login' por la ruta adecuada
  }

  // Si el usuario está autenticado, mostrar la página de administrador
  return (

    <div className="bg-gray-100">


      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">

          <div className="col-span-4 sm:col-span-3">
            <div className="profile shadow rounded-lg p-6">
              <div className="flex flex-col items-center">
                <img src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/08ca10cde3d56d1e9b3bb59f0d21eb0e~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1714338000&x-signature=PZiJ7bLkPmaE65sWyRb%2BqNDrTh0%3D"
                  className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                  alt="Profile" />

                <h1 className="text-xl font-bold">jose asecas</h1>
                <p className="">Software Developer & comediante</p>

                <br />
              </div>

              <div className="flex flex-col">
                <span className="uppercase font-bold tracking-wider mb-2 mt-10">Skills</span>
                <ul>
                  <li className="mb-2">JavaScript</li>
                  <li className="mb-2">React</li>
                  <li className="mb-2">Node.js</li>
                  <li className="mb-2">HTML/CSS</li>
                  <li className="mb-2">Tailwind Css</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="shadow rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">About Me</h2>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est
                vitae tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                suscipit. Nunc finibus vel ante id euismod. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia Curae; Aliquam erat volutpat. Nulla vulputate pharetra tellus, in
                luctus risus rhoncus id.
              </p>

              <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">Web Developer</span>
                  <p>
                    <span className="text-gray-700 mr-2">at ABC Company</span>
                    <span className="text-gray-700">2017 - 2019</span>
                  </p>
                </div>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae
                  tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                  suscipit.
                </p>
              </div>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">Web Developer</span>
                  <p>
                    <span className="text-gray-700 mr-2">at ABC Company</span>
                    <span className="text-gray-700">2017 - 2019</span>
                  </p>
                </div>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae
                  tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                  suscipit.
                </p>
              </div>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">Web Developer</span>
                  <p>
                    <span className="text-gray-700 mr-2">at ABC Company</span>
                    <span className="text-gray-700">2017 - 2019</span>
                  </p>
                </div>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae
                  tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                  suscipit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </div>

  );
}

export default AdminPage;
