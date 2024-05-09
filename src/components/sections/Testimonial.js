import React from 'react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 mt-10">
                    <div className="lg:order-last lg:py-24">
                        <h2 className="text-3xl font-bold sm:text-4xl" data-aos="fade-left">Te ayudamos a encontrar un empleo mejor</h2>

                        <div data-aos="fade-left">
                            <p className="mt-5 text-gray-600">
                                
                                <p>Haz que tu currículum sea visible para miles de empresas en nuestra bolsa de trabajo</p>
                                <p>Registro gratuito. Encuentra tu próximo trabajo hoy.</p>
                                <p>Ofertas cada día. Empleos que se ajustan a tu perfil.</p>
                                <p>Alertas personalizadas. Tú crea alertas de empleo y nosotros te avisaremos.</p>
                                <p>Completa tu perfil. Muéstrate profesional y ganarás visibilidad.</p>

                            </p>
                        </div>

                        <div  data-aos="fade-up">
      
                            <Link to="/register"  className="mt-8 button inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700"> Crea tu cuenta gratis</Link>
                        </div>
                    </div>

                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-90 lg:h-full" data-aos="fade-right">
                        <img
                            alt=""
                            src="../assets/img/bg2.png"
                            className=" inset-0 h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
