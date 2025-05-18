import React from "react";
import heroImage from '../assets/hero.jpg';
import Header from "../components/header";
import SingleBed from "../assets/SingleBed.png";
import TwinBed from "../assets/Twinbed.png";
import Suite from "../assets/Suite.png";
import Service1 from "../assets/service1.png";
import Service2 from "../assets/service2.png";
import Service3 from "../assets/service3.png";
import Service4 from "../assets/service4.png";
import AboutUs from "../assets/AboutUs.png";
import Gallery1 from "../assets/Gallery1.png";
import Gallery2 from "../assets/Gallery2.png";
import Gallery3 from "../assets/Gallery3.png";

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
        <div className="flex justify-center gap-20 py-10 flex-wrap">
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

      <section id="services" className="bg-white text-center relative overflow-hidden">
        <h2 className="text-3xl font-bold mb-7">Services</h2>
        <div className="flex justify-center gap-20 py-10 flex-wrap">
        <div className="flex flex-col items-center h-full">
            <img src={Service1} alt="Service 1" className="w-70 h-70 mx-auto mb-4 rounded-xl aspect-square shadow-lg object-cover" />
            <h2 className="font-bold text-[18px]">Fully Furnished Kitcher</h2>
            <p className="flex-1 flex items-center">Fully Furnished Kitcher<br />We serve our client's diverse<br />requirement of optimum fully<br />furnished modular kitchen.</p>
          </div>

          <div className="flex flex-col items-center h-full">
      <img src={Service2} alt="Service 2" className="w-70 h-70 mx-auto mb-4 rounded-xl aspect-square shadow-lg object-cover" />
      <h2 className="font-bold text-[18px]">Hot/Cold Shower</h2>
      <p className="flex-1 flex items-center">You can adjust the hot or cold water<br />temperatures in bathroom as per<br />your preference.</p>
</div>
<div className="flex flex-col items-center h-full">
      <img src={Service3} alt="Service 3" className="w-70 h-70 mx-auto mb-4 rounded-xl aspect-square shadow-lg object-cover" />
      <h2 className="font-bold text-[18px]">Terrace Re-creation</h2>
      <p className="flex-1 flex items-center">You can relax in your open terrace<br />with the fresh breeze & can beautify<br />it as per your preference.</p>
</div>

<div className="flex flex-col items-center h-full">
      <img src={Service4} alt="Service 4" className="w-70 h-70 mx-auto mb-4 rounded-xl aspect-square shadow-lg object-cover" />
      <h2 className="font-bold text-[18px]">Wardrobe With Locke</h2>
      <p className="flex-1 flex items-center">You can secure your personal stuff<br />in your personal wardrobe by locking<br />it.</p>
</div>




      </div>
              <hr className="my-12 border-t-4 border-blue-200 w-2/3 mx-auto rounded-full opacity-80" />

      </section>
<section id="about" className="py-20">
  <div className="flex gap-20 py-10 flex-wrap items-center justify-center">
    <div className="max-w-xl text-left">
      <h1 className="text-3xl font-bold text-center py-5 mb-4">Sobre nós</h1>
      <p>
        O Hostel Pearl é o lugar perfeito para quem busca conforto e aventura. Localizado em uma área privilegiada, oferecemos uma experiência única de hospedagem com todas as comodidades que você precisa. Nossa equipe está sempre pronta para ajudar e garantir que sua estadia seja inesquecível.
      </p>
    </div>
    <img src={AboutUs} alt="Sobre nós" className="w-200 h-200 rounded-xl aspect-square shadow-lg object-cover" />
  </div>
</section>
              <hr className="my-12 border-t-4 border-blue-200 w-2/3 mx-auto rounded-full opacity-80" />

 <section id="gallery" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>
      <div className="flex justify-center gap-20 py-10 flex-wrap">
        <img src={Gallery1} alt="Gallery 1" className="w-[420px] h-[196px]  mb-4 rounded-xl shadow-lg object-cover" />
        <img src={Gallery2} alt="Gallery 2" className="w-[420px] h-[196px]  mb-4 rounded-xl shadow-lg object-cover" />
        <img src={Gallery3} alt="Gallery 3" className="w-[420px] h-[196px] mb-4 rounded-xl shadow-lg object-cover" />
      </div>
      <div className="flex justify-center">
        <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white text-lg transition">
          See more
        </button>
      </div>
  </section>    
                <hr className="my-12 border-t-4 border-blue-200 w-2/3 mx-auto rounded-full opacity-80" />
 

      <section id="contactos" className="py-20 bg-white text-center">
        <h1 className="text-3xl font-bold mb-4">Contactos</h1>
        <p className="max-w-xl mx-auto text-gray-700">
          Email: contacto@hostelparaiso.com<br />
          Telefone: +351 912 345 678
        </p>
      </section>
    </div>
  );
}
  
  export default LandingPage;