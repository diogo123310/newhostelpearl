import React from "react";
import LogoImage from "../assets/logo.png";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-10">
      <div className="px-4 py-4 flex items-center justify-between text-white w-full sticky top-0 z-20 bg-blue-600/60 backdrop-blur-md shadow-md">
        <nav className="space-x-6 hidden md:block">
          <a href="#sobre" className="hover:text-indigo-400 transition">
            HOME
          </a>
          <a href="#quartos" className="hover:text-indigo-400 transition">
            ROOMS
          </a>
          <a href="#contactos" className="hover:text-indigo-400 transition">
            SERVICES
          </a>
          <a href="#about" className="hover:text-indigo-400 transition">
            ABOUT US
          </a>
        </nav>
        <img src={LogoImage} alt="Logo" className="w-16 h-16 rounded-full" />
        <nav>
          <div className="flex space-x-6">
            <a
              href="#gallery"
              className="flex items-center text-white hover:text-indigo-400 transition px-1 py-2"
            >
              GALLERY
            </a>
            <a
              href="#testimonials"
              className="flex items-center text-white hover:text-indigo-400 transition px-1 py-2"
            >
              TESTIMONIALS
            </a>
            <a
              href="#contact"
              className="flex items-center text-white hover:text-indigo-400 transition px-1 py-2"
            >
              CONTACT
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
