"use client";
import React, { useState } from "react";

export default function MRULandingPage() {
  const [lang, setLang] = useState("es");

  const t = {
    es: {
      brand: "MRU Professional Services",
      heroTitle:
        "Menos estrés. Más claridad.",
      heroDesc:
        "Resultados en los que puedes confiar. Te acompaño en cada paso para preparar tus impuestos y organizar tu contabilidad con claridad, cumplimiento y confianza.",
      cta1: "Habla conmigo",
      cta2: "Ver Servicios",
      features: [
        {
          title: "Atención profesional",
          desc: "Un proceso organizado, respetuoso y enfocado en cada caso.",
        },
        {
          title: "Comunicación clara",
          desc: "Explicaciones sencillas para que entiendas mejor tu situación contributiva.",
        },
        {
          title: "Enfoque en confianza",
          desc: "Un servicio pensado para transmitir seriedad, orden y compromiso.",
        },
      ],
      serviciosSubtitle: "Servicios contables y contributivos adaptados a tus necesidades",
      services: [
        {
          title: "Servicios contables",
          desc: "Apoyo contable y organización financiera para mantener tus registros en orden y facilitar la toma de decisiones.",
        },
        {
          title: "Impuestos para individuos",
          desc: "Preparación y radicación de planillas federales y estatales con orientación clara y profesional.",
        },
        {
          title: "Impuestos para trabajadores independientes ",
          desc: "Preparación y orientación contributiva para personas que trabajan por cuenta propia, incluyendo ingresos 1099 y cumplimiento fiscal.",
        },
        {
          title: "Impuestos para negocios",
          desc: "Apoyo contributivo para negocios, incluyendo cumplimiento y preparación de obligaciones fiscales.",
        },
        {
          title: "Enmiendas de impuestos",
          desc: "Revisión y corrección de planillas previamente radicadas cuando sea necesario realizar ajustes.",
        },
        {
          title: "Asesoría y consultoría",
          desc: "Orientación profesional para aclarar dudas contables, contributivas y administrativas, según tu situación.",
        },
      ],
      contactTitle: "Solicita información",
      name: "Nombre",
      email: "Correo electrónico",
      message: "Mensaje",
      send: "Enviar solicitud",
    },
    en: {
      brand: "MRU Professional Services",
      heroTitle:
        "Less stress. More clarity.",
      heroDesc: 
        "Results you can trust. We guide you every step of the way to prepare your taxes and organize your accounting with clarity, compliance, and confidence.",
      cta1: "Talk to me",
      cta2: "View Services",
      features: [
        {
          title: "Professional service",
          desc: "Organized and client-focused process.",
        },
        {
          title: "Clear communication",
          desc: "Simple explanations so you understand your tax situation.",
        },
        {
          title: "Trust-focused",
          desc: "A service built on professionalism and reliability.",
        },
      ],
      serviciosSubtitle: "Accounting and tax support tailored to your needs",
      services: [
        {
          title: "Accounting services",
          desc: "Accounting support and financial organization to help keep your records in order and support business decisions.",
        },
        {
          title: "Individual tax services",
          desc: "Preparation and filing of federal and state tax returns for individuals with clear and professional guidance.",
        },
        { 
          title: "Self-employed taxes",
          desc: "Tax preparation and guidance for self-employed individuals, including 1099 income and compliance.",
        },
        {
          title: "Business taxes",
          desc: "Tax support for businesses, including guidance on compliance and preparation of tax obligations.",
        },
        {
          title: "Tax amendments",
          desc: "Review and correction of previously filed tax returns when updates and adjustments are needed.",
        },
        {
          title: "Advisory and consulting",
          desc: "Professional guidance to help clarify tax, accounting, and administrative questions based on your situation.",
        },
      ],
      contactTitle: "Request information",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Submit",
    },
  };

  return (
    <main>
      <h1>{t[lang].brand}</h1>
    </main>
  );


  const content = t[lang];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(lang === "es" ? "Formulario enviado" : "Form submitted");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="/logo-mru-blue-icon.png"
              alt="MRU"
              className="h-8 sm:h-10 w-auto"
            />
            <div>
              <p className="text-xs sm:text-sm font-semibold tracking-wide text-slate-900 leading-tight">
                MRU Professional Services
              </p>
              <p className="text-[11px] sm:text-xs text-slate-500 leading-tight">
                {lang === "es" ? "Contabilidad e impuestos" : "Accounting & Tax Services"}
              </p> 
            </div> 
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
            <a href="#servicios" className="hover:text-slate-900">
              {lang === "es" ? "Servicios" : "Services"}
            </a>

            <a href="#reviews" className="hover:text-slate-900">
              {lang === "es" ? "Reseñas" : "Reviews"}
            </a>

            <a href="#sobre-mi" className="hover:text-slate-900">
              {lang === "es" ? "Detrás de MRU" : "Behind MRU"}
            </a>

            <a href="#contacto" className="hover:text-slate-900">
              {lang === "es" ? "Contacto" : "Contact"}
            </a>
          </nav> 

          <div className="flex items-center gap-2">
            <button onClick={()  => setLang("es")} className={`rounded-full px-3 py-1 text-xs sm:text-sm ${lang === "es" ? "bg-slate-900 text-white" : "border border-slate-300 text-slate-700"}`}>
              ES
            </button>
            <button onClick={()  => setLang("en")} className={`rounded-full px-3 py-1 text-xs sm:text-sm ${lang === "en" ? "bg-slate-900 text-white" : "border border-slate-300 text-slate-700"}`}>
              EN
            </button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-slate-900 text-white py-24 md:py-32 pb-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="mb-6 flex justify-center animate-fadeIn">
            <img
              src="/logo-mru-icon-clean.png"
              alt="MRU Professional Services"
              className="h-20 sm:h-24 md:h-32 w-auto mb-10"
              style={{ filter: "drop-shadow(0 0 6px rgba(255,255,255,0,15))" }}
           />
         </div>

         <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center leading-tight px-4 pb-24">
          {content.heroTitle}
        </h1>

         <p className="mt-6 md:mt-8 text-center text-sm sm:text-base md:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed px-6">
          {content.heroDesc}
         </p>

         <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center px-6">
           <a 
              href={
                lang === "es"
                 ? "https://wa.me/16157614614?text=Hola,%20me%20interesa%20recibir%20información%20sobre%20sus%20servicios"
                 : "https://wa.me/16157614614?text=Hello,%20I%20would%20like%20more%20information%20about%20your%20services"
              }  
              className="bg-white text-slate-900 font-semibold px-7 py-3 rounded-xl shadow hover:scale-105 transition-all duration-300 w-full sm:w-auto text-sm sm:text-base"
           >
              {content.cta1}
           </a>

           <a 
              href="#servicios" 
              className="border border-white/70 text-white px-7 py-3 rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300 w-full sm:w-auto text-sm sm:text-base"
           >
              {content.cta2}
           </a>
         </div>

         <p className="mt-4 text-slate-400 text-center text-sm px-4">
           {lang === "es"
             ? "¿Prefieres email? "
             : "Prefer email? "}
            
           <a 
             href="mailto:mru.professionalservices@gmail.com"
             className="underline hover:text-white transition"
           >
             {lang === "es" ? "Escríbeme aquí" : "Contact me here"}
           </a>
         </p>

        <p className="mt-4 text-xs text-slate-400 text-center tracking-wide px-4">
          {lang === "es"
            ? "Cumplimiento con regulaciones del IRS · Atención profesional y confidencial"
            : "IRS compliance · Professional and confidential service"}
        </p>
       
        </div>
 
     </section>

     <section id="sobre-mi" className="scroll-mt-24 mx-auto max-w-5xl px-6 py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">

        {/* LADO IZQUIERDO - IDENTIDAD */}
        <div className="text-center md:text-left space-y-3">

          <h2 className="text-3xl font-bold mb-4">
          {lang === "es" ? "Detrás de MRU" : "Behind MRU"}
        </h2>

        <div className="w-12 h-1 bg-slate-900 mb-6 mx-auto md:mx-0 rounded-full"></div>

        <p className="text-[10px] uppercase tracking-widest text-slate-300">
          {lang === "es" ? "Fundadora" : "Founder"}
        </p>

        <p className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
          Melba Rodríguez
        </p>

        <p className="text-xs text-slate-500 mt-1">
          MBA
        </p>

        <div className="mt-3 inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs">
          {lang === "es" ? "Contabilidad & Finanzas" : "Accounting & Finance"}
        </div>

      </div>

      {/* LADO DERECHO HISTORIA */}
      <div className="text-slate-700 leading-relaxed text-center md:text-left max-w-md">

        <p className="mb-4">
          {lang === "es"
            ? "Profesional en contabilidad y finanzas con experiencia en la industria bancaria, cumplimiento regulatorio, preparación de impuestos y apoyo contable. Acompaño a individuos y pequeños negocios con un enfoque claro, organizado y confiable."
            : "Accounting and finance professional with experience in banking, regulatory compliance, tax preparation, and accounting support. I assist individuals and small businesses with a clear, structured, and reliable approach."}
        </p>

        <p className="mt-4">
          {lang === "es"
            ? "MRU Professional Services fue fundada con el propósito de ofrecer un servicio confiable, cercano y enfocado en cada cliente."
            : "MRU Professional Services was created with the purpose of providing reliable, approachable, and client-focused service."}
        </p>

      </div>
      
    </div>
  </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {content.features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="font-semibold">{f.title}</h3>
              <p className="text-sm mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="text-2xl font-bold mb-4">{content.serviciosSubtitle}</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {content.services.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="text-sm text-slate-500 mb-2">
          {lang === "es"
            ? "Ubicación: Tampa, Florida. Servicios disponibles para clientes en Estados Unidos y Puerto Rico."
            : "Location: Tampa, Florida. Services available to clients across the United States and Puerto Rico."}
        </div>
        <h2 className="text-2xl font-semibold text-slate-900 mb-8">{content.contactTitle}</h2>
        <div className="mt-6 flex justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 mx-auto max-w-md">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input required placeholder={content.name} className="w-full border p-2 rounded" />
              <input required type="email" placeholder={content.email} className="w-full border p-2 rounded" />
              <textarea required placeholder={content.message} className="w-full border p-2 rounded" />
              <button type="submit" className="bg-slate-900 text-white px-4 py-2 rounded">
                {content.send}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-4xl px-6 py-10 text-center">
        <h2 className="text-2xl font-bold">
          {lang === "es" ? "Comparte tu experiencia" : "Share your experience"}
        </h2>
      
      <div className="mt-8 rounded-3xl bg-white p-10 text-center shadow-sm border border-slate-100 max-w-xl mx-auto">

        <p className="text-slate-700 text-lg font-medium">
          {lang === "es"
            ? "Tu opinión es muy importante para nosotros."
            : "Your feedback is very important to us."}
        </p>

        <p className="mt-2 text-slate-500">
          {lang === "es"
            ? "Puedes dejar tu reseña en el siguiente enlace:"
            : "You can leave your review using the link below:"}
          </p>

          <a
            href={lang === "es"
              ? "https://forms.gle/FsQDss9aGMkvQfsWA"
              : "https://forms.gle/yMGuU3nvC7oWdCfC9"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-slate-900 text-white px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition hover:scale-[1.02]"
          >
            {lang === "es" ? "Dejar reseña" : "Leave a review"}
          </a>
        
        </div>
      </section>


     <footer className="mt-20 border-t border-slate-200 bg-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-between md:gap-10">

    {/* IZQUIERDA: Logo + info */}
    <div className="flex flex-col items-center text-center gap-3 md:items-start md:text-left">
      <img
        src="/logo-mru-blue-icon.png"
        alt="MRU Logo"
        className="h-12 sm:h-14 w-auto"
      />

      <div className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto md:mx-0">
        <p className="font-semibold text-slate-900">
          MRU Professional Services
        </p>
        <p>
          Tampa, Florida · Puerto Rico & United States
        </p>
  
      </div>
    </div>

    {/* DERECHA: Redes */}
    <div className="flex flex-col items-center gap-5a md:items-end md:text-right">
      {/* TEXTO redes */}
       <p className="text-sm text-slate-600 text-center md:text-right max-w-xs">
          {lang === "es"
            ? "Mantente al día con consejos, actualizaciones y contenido educativo."
            : "Stay updated with tips, updates, and educational content."}
       </p>
      
      {/* Botones */}
    <div className="flex flex-col sm:flex-row gap-3">
  
      {/* Instagram*/}
      <a
        href="https://www.instagram.com/mru.professionalservices"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-xs mx-auto sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 border border-slate-300 rounded-xl bg-white text-slate-700 hover:bg-slate-100 hover:border-slate-900 hover:text-slate-900 shadow-sm hover:shadow-md transition-all duration-200"
      >
      
      {/* ICON */}
      <svg xmlns="http://www.w3.org/2000/svg" 
        className="w-4 h-4 text-slate-500" 
        fill="currentColor" 
        viewBox="0 0 24 24">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5Zm4.25 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z" />
        </svg>
        Instagram
      </a>

      {/* Facebook */}      
      <a
        href="https://www.facebook.com/MRUprofessionalservices"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-xs mx-auto sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 border border-slate-300 rounded-xl bg-white text-slate-700 hover:bg-slate-100 hover:border-slate-900 hover:text-slate-900 shadow-sm hover:shadow-md transition-all duration-200"
      >
      
      {/* ICON */}
        <svg xmlns="http://www.w3.org/2000/svg" 
          className="w-4 h-4 text-slate-500" 
          fill="currentColor" 
          viewBox="0 0 24 24">
        <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-4 3.8-4 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.5V12H17l-.5 3h-2.2v7C18.3 21.1 22 17 22 12z" />
        </svg>
        Facebook
      </a>
    </div>
   </div>
  </div>

  {/* Copyright */}
  <p className="mt-8 text-xs text-slate-400 text-center pb-6 tracking-wide">
    {lang === "es"
      ? `© ${new Date().getFullYear()} MRU Professional Services. Todos los derechos reservados.`
      : `© ${new Date().getFullYear()} MRU Professional Services. All rights reserved.`}
  </p>
</footer>
    
     <a 
       href={ 
         lang === "es"
           ? "https://wa.me/16157614614?text=Hola%20quiero%20información%20sobre%20sus%20servicios"
           : "https://wa.me/16157614614?text=Hello,%20I%20would%20like%20more%20information%20about%20your%20services"
       }
       target="_blank"
       rel="noopener noreferrer"
       className="fixed bottom-6 right-6 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 rounded-full bg-green-600 px-4 py-2.5 sm:px-5 sm:py-3 text-sm sm:text-base text-white shadow-lg hover:bg-green-700 transition"
       style={{ boxShadow:  "0 8px 20px rgba(34,197,94,0.25)"  }}
    > 

     <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 32 32"
       fill="currentColor"
       className="h-4 w-4 sm:h-5 sm:w-5"
     >
       <path d="M16 .6C7.5.6.6 7.5.6 16c0 2.8.7 5.5 2.1 7.9L.5 31.5l7.8-2.1c2.3 1.3 4.9 2 7.7 2h.1c8.5 0 15.4-6.9 15.4-15.4S24.5.6 16 .6zm0 28.1c-2.4 0-4.7-.7-6.6-1.9l-.5-.3-4.6 1.2 1.2-4.5-.3-.5C3.9 20.7 3.2 18.4 3.2 16 3.2 9.4 9.4 3.2 16 3.2S28.8 9.4 28.8 16 22.6 28.7 16 28.7zm6.9-9.8c-.4-.2-2.2-1.1-2.6-1.2-.4-.2-.6-.2-.9.2s-1 1.2-1.2 1.4-.4.3-.8.1c-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.3-2.1-2.7-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6s-.9-2.2-1.3-3c-.4-.9-.8-.8-1.1-.8h-.9c-.3 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.1 3.2 1.3 3.4c.2.2 2.2 3.4 5.4 4.8.8.3 1.4.5 1.9.6.8.3 1.5.2 2 .1.6-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.1-.3-.2-.7-.4z"/>
     </svg>
       {lang === "es" ? "Escríbeme" : "Message me"}
     </a>

    </div> 
  );
}