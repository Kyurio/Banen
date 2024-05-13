import React from 'react';

const Feature = () => {
  return (
    <div className="w-full max-w-7xl mx-auto grid gap-4 p-4 mt-5 mb-5">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-16 mb-16 gap-16">

        <div className="flex gap-4 items-start">
          <div data-aos="fade-up">
            <div className="mt-1 icon-feature rounded-full p-2 w-10 h-10 shrink-0">
              <svg viewBox="0 0 24 24" className="text-white" astro-icon="bx:bxs-briefcase">
                <path fill="currentColor" d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v3h20V8c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm5 10h-4v-2H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-8v2z"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Publica tu vacante</h3>
              <p className="text-slate-500 mt-2 leading-relaxed">Crea fácilmente tu oferta de trabajo y publícala en un click.</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div data-aos="fade-up">
            <div className="mt-1 icon-feature rounded-full p-2 w-10 h-10 shrink-0">
              <svg viewBox="0 0 24 24" className="text-white" astro-icon="bx:bxs-window-alt">
                <path fill="currentColor" d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-3 3h2v2h-2V6zm-3 0h2v2h-2V6zM4 19v-9h16.001l.001 9H4z"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Revisa las postulaciones</h3>
              <p className="text-slate-500 mt-2 leading-relaxed">Selecciona a los mejores candidatos entre todos los CVs recibidos.</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div data-aos="fade-up">
            <div className="mt-1 icon-feature rounded-full p-2 w-10 h-10 shrink-0">
              <svg viewBox="0 0 24 24" className="text-white" astro-icon="bx:bxs-data">
                <path fill="currentColor" d="M20 6c0-2.168-3.663-4-8-4S4 3.832 4 6v2c0 2.168 3.663 4 8 4s8-1.832 8-4V6zm-8 13c-4.337 0-8-1.832-8-4v3c0 2.168 3.663 4 8 4s8-1.832 8-4v-3c0 2.168-3.663 4-8 4z"></path><path fill="currentColor" d="M20 10c0 2.168-3.663 4-8 4s-8-1.832-8-4v3c0 2.168 3.663 4 8 4s8-1.832 8-4v-3z"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Contrata</h3>
              <p className="text-slate-500 mt-2 leading-relaxed">Encuentra al candidato que mejor se adapta al perfil buscado.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Feature;
