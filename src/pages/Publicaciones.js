import React from 'react';

//componentes
import ListadoPublicaciones from '../components/tables/ListadoPublicaciones';


function LandingPage() {
  return (

    <div>
      <section className="flex items-center justify-center bg-white mt-20 mb-20">
        <div className="text-center">
          <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">Encuentra tu trabajo ideal</h1>
        </div>
      </section>

      <ListadoPublicaciones />
    </div>
  );
}

export default LandingPage;
