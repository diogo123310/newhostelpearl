import React from "react";
import heroImage from '../assets/hero.jpg';
import Header from "../components/header";
import SingleBed from "../assets/SingleBed.png";
import TwinBed from "../assets/Twinbed.png";
import Suite from "../assets/Suite.png";

//https://www.jdomni.com/ecommerce-themes/accommodations-template


const LandingPage = () => {
    return (
        <div>
      <Header/>

      <section
        className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="bg-black bg-opacity-60 p-8 rounded-xl text-white max-w-2xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hostel <span className="text-indigo-400">Pearl</span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Conforto e aventura em um só lugar.
          </p>
          <a href="#quartos">
            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white text-lg transition">
              Reservar agora
            </button>
          </a>
        </div>
      </section>
      <section id="quartos" className="py-20 text-center relative overflow-hidden">
        <h2 className="text-3xl font-bold mb-10">Rooms</h2>
        <div className="flex justify-center gap-20 flex-wrap">
          <div>
            <img src={SingleBed} alt="Single Bed" className="w-70 h-70 mx-auto mb-4 rounded-xl aspect-square shadow-lg object-cover" />
            <p className="text-[20px]">Single Bed Non AC Room</p>
          </div>
          <div>
            <img src={TwinBed} alt="Twin Bed" className="w-70 h-70 mx-auto mb-4 rounded-xl aspect-square shadow-lg object-cover" />
            <p className="text-[20px]">Twin Bed Non AC Room</p>
          </div>
          <div>
            <img src={Suite} alt="Suite" className="w-70 h-70 mx-auto mb-4 rounded-xl aspect-square shadow-lg object-cover" />
            <p className="text-[20px]">Triple Sharing- 3 Bed Non AC Room</p>
          </div>
        </div>
        <hr className="my-12 border-t-4 border-blue-200 w-2/3 mx-auto rounded-full opacity-80" />
      </section>

      <section id="sobre" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-7">Sobre Nós</h2>
        <p className="max-w-xl mx-auto text-gray-700">
          O Hostel Paraíso oferece o equilíbrio perfeito entre conforto, natureza e localização. Ideal para mochileiros e famílias.
        </p>
      </section>

      

      <section id="contactos" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Contactos</h2>
        <p className="max-w-xl mx-auto text-gray-700">
          Email: contacto@hostelparaiso.com<br />
          Telefone: +351 912 345 678
        </p>
      </section>
    </div>
  );
}
  
  export default LandingPage;