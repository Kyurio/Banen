import React from 'react';

//componentes
import Newsletter from '../components/sections/Newsletter';
import Hero from '../components/sections/Hero';
import Testimonials from '../components/sections/Testimonial';
import Footer from '../components/sections/Footer';
import Feature from '../components/sections/Feature';

function LandingPage() {
  return (
   
    <div>
      <Hero/>
      <Testimonials/>
      <Newsletter/>
      <Feature/>
      <Footer/>
    </div>
  );
}

export default LandingPage;
