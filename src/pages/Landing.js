import React from 'react';

//componentes
import Newsletter from '../components/sections/Newsletter';
import Hero from '../components/sections/Hero';
import ListadoPublicaciones from '../components/tables/ListadoPublicaciones';
import Footer from '../components/sections/Footer';
import Feature from '../components/sections/Feature';

function LandingPage() {
  return (
   
    <div>
      <Hero/>
      <ListadoPublicaciones/>
      <Newsletter/>
      <Feature/>
      <Footer/>

    </div>
  );
}

export default LandingPage;
