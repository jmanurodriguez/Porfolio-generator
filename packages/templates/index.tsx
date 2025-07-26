import React from 'react';

// Navbars
export function NavbarTemplate1() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <span className="font-bold">Mi Sitio</span>
      <ul className="flex space-x-4">
        <li>Inicio</li>
        <li>Proyectos</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
}
export function NavbarTemplate2() {
  return (
    <nav className="p-4 bg-white shadow flex justify-between items-center">
      <span className="text-xl font-semibold">Portfolio</span>
      <button className="bg-indigo-600 text-white px-3 py-1 rounded">Contacto</button>
    </nav>
  );
}
export function NavbarTemplate3() {
  return (
    <nav className="p-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white flex justify-center">
      <span className="text-2xl font-bold">Mi Portfolio</span>
    </nav>
  );
}
export function NavbarTemplate4() {
  return (
    <nav className="p-4 bg-gray-900 text-gray-300 flex flex-col md:flex-row md:justify-between">
      <span className="font-bold">Portfolio</span>
      <ul className="flex space-x-2 mt-2 md:mt-0">
        <li>Sobre mí</li>
        <li>Experiencia</li>
        <li>Certificaciones</li>
      </ul>
    </nav>
  );
}
export function NavbarTemplate5() {
  return (
    <nav className="p-4 bg-white border-b flex items-center justify-between">
      <span className="text-lg font-semibold">Portafolio</span>
      <div>
        <a href="#" className="mr-4">Blog</a>
        <a href="#" className="bg-indigo-600 text-white px-3 py-1 rounded">Hire me</a>
      </div>
    </nav>
  );
}

// Header / Hero templates
export function HeroTemplate1() {
  return (
    <section className="py-20 bg-indigo-600 text-white text-center">
      <h1 className="text-4xl font-bold mb-4">Hola, soy Developer</h1>
      <p className="max-w-xl mx-auto">Construyo sitios web hermosos y funcionales.</p>
    </section>
  );
}
export function HeroTemplate2() {
  return (
    <section className="py-32 bg-gray-800 text-white text-center">
      <h1 className="text-5xl font-extrabold mb-2">Bienvenido</h1>
      <p className="text-lg">Descubre mis proyectos y habilidades.</p>
    </section>
  );
}
export function HeroTemplate3() {
  return (
    <section className="py-24 bg-white text-gray-800 text-center">
      <h1 className="text-4xl font-bold mb-3">Soy tu próximo aliado</h1>
      <p className="text-gray-600 max-w-md mx-auto">Diseñador y desarrollador especializado en experiencias digitales.</p>
    </section>
  );
}
export function HeroTemplate4() {
  return (
    <section className="h-64 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url('https://via.placeholder.com/1200x400')` }}>
      <h1 className="text-4xl text-white font-bold drop-shadow-lg">Mi Portafolio</h1>
    </section>
  );
}
export function HeroTemplate5() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-teal-400 text-center text-white">
      <h1 className="text-5xl font-bold">Conoce mi trabajo</h1>
      <p className="mt-4">Soluciones creativas y eficientes a tu alcance.</p>
    </section>
  );
}

// Cards (proyectos) templates
export function CardsTemplate1() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Proyectos</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="rounded-lg shadow p-4 bg-white">
            <h3 className="text-xl font-semibold mb-2">Proyecto {i + 1}</h3>
            <p className="text-gray-600">Descripción breve del proyecto {i + 1}.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export function CardsTemplate2() {
  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Mis Trabajos</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="w-64 bg-white rounded shadow p-3">
            <h3 className="font-semibold">Proyecto {i + 1}</h3>
            <span className="text-sm text-gray-500">React</span>
          </div>
        ))}
      </div>
    </section>
  );
}
export function CardsTemplate3() {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Últimos proyectos</h2>
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="border rounded p-4">
            <h3 className="text-xl font-semibold">Proyecto {i + 1}</h3>
            <p className="text-gray-600">Descripción y detalles del proyecto {i + 1}.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export function CardsTemplate4() {
  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6">Portafolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="flex rounded shadow overflow-hidden">
            <div className="w-1/3 bg-gray-200">&nbsp;</div>
            <div className="w-2/3 p-4">
              <h3 className="font-semibold">Proyecto {i + 1}</h3>
              <p className="text-sm text-gray-600">Descripción breve del proyecto.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export function CardsTemplate5() {
  return (
    <section className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Mis proyectos</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="border rounded p-3">
            <h3 className="font-semibold">Proyecto {i + 1}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

// Additional templates for gallery, forms, technologies, certifications, experience, footer would follow the same pattern
// To keep this example concise, they have been omitted.

// Utility to select a template based on type and index (1‑based)
export function getTemplateComponent(type: string, index: number): React.FC | null {
  const key = `${type.toUpperCase()}${index}`;
  const map: Record<string, React.FC> = {
    NAVBAR1: NavbarTemplate1,
    NAVBAR2: NavbarTemplate2,
    NAVBAR3: NavbarTemplate3,
    NAVBAR4: NavbarTemplate4,
    NAVBAR5: NavbarTemplate5,
    HERO1: HeroTemplate1,
    HERO2: HeroTemplate2,
    HERO3: HeroTemplate3,
    HERO4: HeroTemplate4,
    HERO5: HeroTemplate5,
    CARDS1: CardsTemplate1,
    CARDS2: CardsTemplate2,
    CARDS3: CardsTemplate3,
    CARDS4: CardsTemplate4,
    CARDS5: CardsTemplate5,
  };
  return map[key] || null;
}