import React from 'react';
const Newsletter = () => {

  return (
    <div className="newsletter relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl" data-aos="fade-right">Subscríbete a nuestro boletín informativo.</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300" data-aos="fade-right">
              Recibe actualizaciones sobre nuevas ofertas de trabajo, consejos profesionales y más. Únete a nuestra comunidad hoy mismo.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4" data-aos="fade-right">
              <label htmlFor="email-address" className="sr-only" data-aos="fade-right">Correo</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0  px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Ingresa tu correo"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribete
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Newsletter;
