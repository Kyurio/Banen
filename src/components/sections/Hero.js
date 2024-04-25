import React from 'react';

const Hero = () => {
    return (

        <section className="hero">
            <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-20 lg:grid-cols-12 lg:pt-28">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white animate__animated animate__backInLeft">Encuentra tu próximo trabajo en Banen.</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 animate__animated animate__backInLeft">Conectamos a profesionales talentosos con empresas innovadoras. Explora oportunidades laborales en diversos sectores y niveles de experiencia. Publica tus ofertas de trabajo y encuentra al candidato ideal. Únete a Banen hoy mismo para impulsar tu carrera o empresa.</p>
                    <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                        {/* bottones  */}
                    </div>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="../assets/img/Bg.png" alt="hero image" className='animate__animated animate__backInRight'/>
                </div>
            </div>
        </section>

    );
};

export default Hero;
