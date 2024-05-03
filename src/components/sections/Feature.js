import React from 'react';

const Feature = () => {
  return (
    <div className="w-full max-w-7xl mx-auto grid gap-4 p-4 mt-5 mb-5">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-16 mb-16 gap-16">
        <div className="flex gap-4 items-start">
          <div className="mt-1 icon-feature rounded-full p-2 w-10 h-10 shrink-0">
            <svg viewBox="0 0 24 24" className="text-white" astro-icon="bx:bxs-briefcase">
              <path fill="currentColor" d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v3h20V8c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm5 10h-4v-2H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-8v2z"></path>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Bring Your Own Framework</h3>
            <p className="text-slate-500 mt-2 leading-relaxed">Explora una amplia gama de oportunidades laborales y encuentra el trabajo perfecto para ti. Ya sea que estés buscando un cambio de carrera, una nueva aventura profesional o simplemente quieras explorar tus opciones, ¡estamos aquí para ayudarte a dar el siguiente paso en tu trayectoria laboral!</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="mt-1 icon-feature rounded-full p-2 w-10 h-10 shrink-0">
            <svg viewBox="0 0 24 24" className="text-white" astro-icon="bx:bxs-window-alt">
              <path fill="currentColor" d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-3 3h2v2h-2V6zm-3 0h2v2h-2V6zM4 19v-9h16.001l.001 9H4z"></path>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg">100% Static HTML, No JS</h3>
            <p className="text-slate-500 mt-2 leading-relaxed">Astro renders your entire page to static HTML, removing all JavaScript from your final build by default.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="mt-1 icon-feature rounded-full p-2 w-10 h-10 shrink-0">
            <svg viewBox="0 0 24 24" className="text-white" astro-icon="bx:bxs-data">
              <path fill="currentColor" d="M20 6c0-2.168-3.663-4-8-4S4 3.832 4 6v2c0 2.168 3.663 4 8 4s8-1.832 8-4V6zm-8 13c-4.337 0-8-1.832-8-4v3c0 2.168 3.663 4 8 4s8-1.832 8-4v-3c0 2.168-3.663 4-8 4z"></path><path fill="currentColor" d="M20 10c0 2.168-3.663 4-8 4s-8-1.832-8-4v3c0 2.168 3.663 4 8 4s8-1.832 8-4v-3z"></path>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg">On-Demand Components</h3>
            <p className="text-slate-500 mt-2 leading-relaxed">Need some JS? Astro can automatically hydrate interactive components when they become visible on the page.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="mt-1 icon-feature rounded-full p-2 w-10 h-10 shrink-0">
            <svg viewBox="0 0 24 24" className="text-white" astro-icon="bx:bxs-bot">
              <path fill="currentColor" d="M21 10.975V8a2 2 0 0 0-2-2h-6V4.688c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H5a2 2 0 0 0-2 2v2.998l-.072.005A.999.999 0 0 0 2 12v2a1 1 0 0 0 1 1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a1 1 0 0 0 1-1v-1.938a1.004 1.004 0 0 0-.072-.455c-.202-.488-.635-.605-.928-.632zM7 12c0-1.104.672-2 1.5-2s1.5.896 1.5 2-.672 2-1.5 2S7 13.104 7 12zm8.998 6c-1.001-.003-7.997 0-7.998 0v-2s7.001-.002 8.002 0l-.004 2zm-.498-4c-.828 0-1.5-.896-1.5-2s.672-2 1.5-2 1.5.896 1.5 2-.672 2-1.5 2z"></path>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Broad Integration</h3>
            <p className="text-slate-500 mt-2 leading-relaxed">Astro supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX, and any other npm packages.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="mt-1 icon-feature rounded-full p-2 w-10 h-10 shrink-0">
            <svg viewBox="0 0 24 24" className="text-white" astro-icon="bx:bxs-file-find">
              <path fill="currentColor" d="M6 22h12c.178 0 .348-.03.512-.074l-3.759-3.759A4.966 4.966 0 0 1 12 19c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5a4.964 4.964 0 0 1-.833 2.753l3.759 3.759c.044-.164.074-.334.074-.512V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2z"></path>
              <circle cx="12" cy="14" r="3" fill="currentColor"></circle>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg">SEO Enabled</h3>
            <p className="text-slate-500 mt-2 leading-relaxed">Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication. It just works!</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="mt-1 icon-feature rounded-full p-2 w-10 h-10 shrink-0">
            <svg viewBox="0 0 24 24" className="text-white" astro-icon="bx:bxs-user">
              <path fill="currentColor" d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Community</h3>
            <p className="text-slate-500 mt-2 leading-relaxed">Astro is an open source project powered by hundreds of contributors making thousands of individual contributions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
