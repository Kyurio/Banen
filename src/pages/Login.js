import React from 'react';

import FormLogin from '../components/forms/FormLogin';
import Footer from '../components/sections/Footer';

function LoginPage() {
  return (


    <div className="w-full ">

      <div className="flex items-center justify-center py-12">
        <div className="mx-auto w-[350px] space-y-6">
        <div className="max-w-sm p-6 bg-white border rounded-lg shadow mt-5 mb-5">
          <div className="space-y-2 text-center">
   
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-gray-500 dark:text-gray-400">Ingrese su correo electrónico a continuación para iniciar sesión en su cuenta</p>
            </div>
            {/* form login */}
            <FormLogin />
          </div>
        </div>
      </div>
      <Footer />

    </div>


  );
}

export default LoginPage;
