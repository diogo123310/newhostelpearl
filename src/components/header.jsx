import React from 'react';

export default function Header() {
    return (
      <header className="fixed top-0 left-0 w-full bg-indigo-600 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between text-white">
          <h1 className=" font-bold text-s">Web Dev News</h1>
          <nav className="space-x-6 hidden md:block">
            <a href="#sobre" className="hover:text-indigo-400 transition">Sobre</a>
            <a href="#quartos" className="hover:text-indigo-400 transition">Quartos</a>
            <a href="#contactos" className="hover:text-indigo-400 transition">Contactos</a>
          </nav>
        </div>
      </header>
    );
  }
