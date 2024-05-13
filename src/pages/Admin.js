import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import Footer from '../components/sections/Footer';

function AdminPage() {
  
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedName = localStorage.getItem('name');
    setToken(storedToken);

  }, []);


  if (!token) {
    console.log("no hay session abierta")
  }

  return (

    <div className="bg-gray-100">


      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          

          <div className="col-span-4 sm:col-span-3">
            <div className="profile shadow rounded-lg p-6">
              <div className="flex flex-col items-center">
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.instagram.com%2Fdiganmepaul%2F%3Flocale%3Dde&psig=AOvVaw280UScw87D2VCw-JSRbnr8&ust=1715445044471000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJDfvPbAg4YDFQAAAAAdAAAAABAE"
                  className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                  alt="Profile" />

                <h1 className="text-xl font-bold"></h1>
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


    </div>

  );
}

export default AdminPage;
