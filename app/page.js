"use client";
import React, { useState, useEffect, useRef } from "react";
import { useForm } from "@formspree/react";

export default function MRULandingPage( ) {
  const [lang, setLang] = useState("es");

  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const t = {
    es: {
      brand: "MRU Professional Services",
      heroTitle:
        "Menos estrés. Más claridad.",
      heroDesc:
        "Soluciones contables, contributivas, y para negocios con la claridad y orientación que necesitas. Te acompaño en cada paso para que puedas avanzar con confianza.",
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
      serviciosSubtitle: "Servicios diseñados para acompañarte en diferentes etapas, desde tus impuestos y organización financiera hasta las necesidades de tu negocio.",
      services: [
        {
          title: "Servicios de Impuestos",
          desc: "Preparación de impuestos para individuos , trabajadores independientes y negocios. Incluye enmiendas y orientación durante el proceso.",
        },
        {
          title: "Contabilidad y Bookkeeping",
          desc: "Organización contable, registro de ingresos y gastos y apoyo a mantener tus finanzas en orden durante el año.",
        },
        {
          title: "Asistencia Contributiva y Trámites con el IRS",
          desc: "Asistencia con asuntos relacionados con el IRS: avisos/cartas, ITIN, cumplimiento trámites y orientación contributiva fuera de la preparacion normal de una declaración.",
        },
        {
          title: "Formación y Servicios para Negocios",
          desc: "Apoyo en la formación y organización de negocios, incluyendo LLC, corporaciones, sociedades, elección S Corp, DBA, EIN, documentación corporativa y procesos de disolución.",
        },
        {
          title: "Asesoría y Consultoría",
          desc: "Orientación personalizada para individuos y negocios, evaluación de tu situaciones contributivas y apoyo para tomar decisiones con mayor claridad.",
        },
      ],
      contactTitle: "Hablemos sobre lo que necesites",
      name: "Nombre",
      email: "Correo electrónico",
      message: "Mensaje",
      send: "Enviar mensaje",

      missionTitle: "Nuestra misión",
      missionDesc: "Brindar servicios contables, contributivos y para negocios con claridad, organización y profesionalismo, ayudando a individuos y pequeños negocios a cumplir con sus responsabilidades y avanzar con mayor confianza.",

      visionTitle: "Nuestra visión",
      visionDesc: "Ser un recurso de confianza para individuos y pequeños negocios, ofreciendo soluciones contables, contributivas y empresariales claras, confiables y enfocadas en las necesidades de cada cliente.",

    },
    en: {
      brand: "MRU Professional Services",
      heroTitle:
        "Less stress. More clarity.",
      heroDesc: 
        "Accounting, tax, and business solutions with the clarity and guidance you need. I support you every step of the way so you can move forward with confidence.",
      cta1: "Talk to me",
      cta2: "View Services",
      
      serviciosSubtitle: "Services designed to support you at different stages, from taxes and financial organization to the needs of your business.",
      services: [
        {
          title: "Tax Services",
          desc: "Tax preparation for individuals. self-employed workers, and businesses. Includes amendments and guidance throughout the process.",
        },
        {
          title: "Accounting & Bookkeeping",
          desc: "Bookkeeping organization, income and expense tracking, and support to keep your finances organized throughout the year.",
        },
        { 
          title: "IRS Services & Tax Support",
          desc: "Assistance with IRS-related matters, including notices and letters, ITIN guidance, compliance, filings, and tax guidance beyond standard tax return preparation.",
        },
        {
          title: "Business Formation & Services",
          desc: "Support with business formation and organitazion, including LLCs, corporations, partnerships, S Corp elections, DBAs, EIN applications, corporate documentation, and business dissolution.",
        },
        {
          title: "Advisory and Consulting",
          desc: "Personalized guidance for individuals and businesses, including tax situation reviews, and support to help you make decisions with greater clarity.",
        },
      ],
      contactTitle: "Let's talk about what you need",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",

      missionTitle: "Our Mission",
      missionDesc: "To provide accounting, tax, and business services with clarity, organization, and professionalism, helping individuals and small businesses meet their responsabilities and move forward with greater confidence.",

      visionTitle: "Our Vision",
      visionDesc: "To become a trusted resource for individuals and small businesses by offering clear, reliable, accessible, and client-focused accounting, tax, and business solutions.",
    
    },
  };


  const content = t[lang];
  
  const [state, handleSubmit] = useForm("myeynyde");

  const formRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      formRef.current?.reset();
    }
  }, [state.succeeded]);

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
              <p className="hidden sm:block text-xs text-slate-500 leading-tight">
                {lang === "es" ? "Contabilidad · Impuestos · Negocios" : "Accounting · Tax · Business"}
              </p> 
            </div> 
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
            <div className="relative group">
  <a
    href="#services"
    className="flex items-center gap-1 hover:text-slate-900"
  >
    {lang === "es" ? "Servicios" : "Services"}
    <span className="text-xs">⌄</span>
  </a>

  <div className="invisible absolute left-0 top-full z-50 w-80 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
    <div className="rounded-2xl border border-slate-200/80 bg-white p-3 shadow-2xl">

      <a
        href="/services/tax-services"
        className="block rounded-xl px-4 py-3.5 transition hover:bg-slate-50"
      >
        <span className="block text-sm font-semibold text-slate-900">
          {lang === "es" ? "Servicio de Impuestos" : "Tax Services"}
        </span>
      </a>

      <a
        href="/services/accounting-bookkeeping"
        className="block rounded-xl px-4 py-3.5 transition hover:bg-slate-50"
      >
        <span className="block text-sm font-semibold text-slate-900">
          {lang === "es" ? "Contabilidad y Bookkeeping" : "Accounting & Bookkeeping"}
        </span>
      </a>

      <a
        href="/services/irs-tax-support"
        className="block rounded-xl px-4 py-3.5 transition hover:bg-slate-50"
      >
        <span className="block text-sm font-semibold text-slate-900">
          {lang === "es"
            ? "Asistencia Contributiva y Trámites con el IRS"
            : "IRS Services & Tax Support"}
        </span>
      </a>
      
      <div className="my-2 border-t border-slate-100" />

      <a
        href="/services/business-formation"
        className="block rounded-xl bg-slate-50 px-4 py-4 transition hover:bg-slate-100"
      >
        <div className="flex items-start justify-between gap-4">
          </div>
           <span className="block text-sm font-semibold text-slate-900">
          {lang === "es"
            ? "Formación y Servicios para Negocios"
            : "Business Formation & Services"}
        </span>

        <span className="mt-1.5 block text-xs leading-relaxed text-slate-500">
          {lang === "es"
            ? "LLC, S Corp, C Corp, Sociedades, DBA, EIN y disoluciones"
            : "LLC, S Corp, C Corp, Partnership, DBA, EIN & Dissolutions"}
        </span>
      
        <span className="mt-0.5 text-slate-400">→</span>
      </a>

      <div className="my-2 border-t border-slate-100" />

      <a
        href="/services/advisory-consulting"
        className="block rounded-xl px-4 py-3.5 transition hover:bg-slate-50"
      >
        <span className="block text-sm font-semibold text-slate-900">
          {lang === "es"
            ? "Asesoría y Consultoría"
            : "Advisory & Consulting"}
        </span>
      </a>

    </div>
  </div>
</div>

            <a href="#reviews" className="hover:text-slate-900">
              {lang === "es" ? "Reseñas" : "Reviews"}
            </a>

            <a href="#sobre-mi" className="hover:text-slate-900">
              {lang === "es" ? "Sobre MRU" : "About MRU"}
            </a>

            <a href="#contacto" className="hover:text-slate-900">
              {lang === "es" ? "Contacto" : "Contact"}
            </a>
          </nav> 

          <div className="relative md:hidden">
  <button
    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
    className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
  >
    <span className="text-lg">☰</span>
    {lang === "es" ? "Menú" : "Menu"}
  </button>

  {mobileServicesOpen && (
    <div className="absolute right-0 top-full z-50 mt-3 w-64 rounded-2xl border border-slate-200 bg-white p-2.5 shadow-2xl max-h-[75vh] overflow-y-auto">

      <p className="px-4 pb-2 pt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
        {lang === "es" ? "Servicios" : "Services"}
      </p>

      <a
        href="/services/tax-services"
        onClick={() => setMobileServicesOpen(false)}
        className="block rounded-xl px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
      >
        {lang === "es" ? "Servicios de Impuestos" : "Tax Services"}
      </a>

      <a
        href="/services/accounting-bookkeeping"
        onClick={() => setMobileServicesOpen(false)}
        className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
      >
        {lang === "es"
          ? "Contabilidad y Bookkeeping"
          : "Accounting & Bookkeeping"}
      </a>

      <a
        href="/services/irs-tax-support"
        onClick={() => setMobileServicesOpen(false)}
        className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
      >
        {lang === "es"
          ? "Asistencia Contributiva y Trámites con el IRS"
          : "IRS Services & Tax Support"}
      </a>

      <a
        href="/services/business-formation"
        onClick={() => setMobileServicesOpen(false)}
        className="block rounded-xl bg-slate-50 px-4 py-4 hover:bg-slate-100"
      >
        <span className="block text-sm font-semibold text-slate-900">
          {lang === "es"
            ? "Formación y Servicios para Negocios"
            : "Business Formation & Services"}
        </span>

      </a>

      <a
        href="/services/advisory-consulting"
        onClick={() => setMobileServicesOpen(false)}
        className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
      >
        {lang === "es"
          ? "Asesoría y Consultoría"
          : "Advisory & Consulting"}
      </a>

      <div className="my-3 border-t border-slate-200" />

      <a
        href="#reviews"
        onClick={() => setMobileServicesOpen(false)}
        className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
      >
        {lang === "es" ? "Reseñas" : "Reviews"}
      </a>

      <a
        href="#sobre-mi"
        onClick={() => setMobileServicesOpen(false)}
        className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
      >
        {lang === "es" ? "Sobre MRU" : "About MRU"}
      </a>

      <a
        href="#contacto"
        onClick={() => setMobileServicesOpen(false)}
        className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
      >
        {lang === "es" ? "Contacto" : "Contact"}
      </a>
    </div>
  )}
</div>

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
              className="h-20 sm:h-24 md:h-32 w-auto -mb-10"
              style={{ filter: "drop-shadow(0 0 6px rgba(255,255,255,0.15))" }}
           />
         </div>

         <p className="text-center text-white/75 text-[11px] sm:text-xs font-semibold tracking-[0.30em] uppercase mb-22">
           Professional Services
         </p>

         <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center leading-tight px-4 pb-12">
          {content.heroTitle}
        </h1>

         <p className="mt-2 md:mt-3 text-center text-sm sm:text-base md:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed px-6">
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
       
        </div>
     </section>

     <section id="sobre-mi" className="scroll-mt-24 mx-auto max-w-5xl px-6 py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">

        {/* LADO IZQUIERDO - IDENTIDAD */}
        <div className="text-center md:text-left space-y-3">

          <h2 className="text-3xl font-bold mb-4">
          {lang === "es" ? "Sobre MRU" : "About MRU"}
        </h2>

        <div className="w-12 h-1 bg-slate-900 mb-6 mx-auto md:mx-0 rounded-full"></div>

        <p className="text-[10px] uppercase tracking-widest text-slate-300">
          {lang === "es" ? "Fundadora" : "Founder"}
        </p>

        <p className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
          Melba Rodríguez Umpierre
        </p>

        <p className="text-xs text-slate-500 mt-1">
          BBA in Accounting · MBA in Finance · Business Analyst Certificate
        </p>

        <div className="mt-3 inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs">
          {lang === "es" ? "Contabilidad & Finanzas" : "Accounting & Finance"}
        </div>

      </div>

      {/* LADO DERECHO HISTORIA */}
      <div className="text-slate-700 leading-relaxed text-center md:text-left max-w-md">

        <p className="mb-4">
          {lang === "es"
            ? "Profesional en contabilidad y finanzas con experiencia en la industria bancaria, cumplimiento regulatorio, contabilidad y preparación contributiva. Acompaño a individuos y pequeños negocios con un enfoque claro, organizado y confiable, brindando orientación adaptada a sus necesidades financieras y contributivas."
            : "Accounting and finance professional with experience in banking, regulatory compliance, accounting and tax preparation. I support individuals and small businesses with a clear, organized, and reliable approach, providing guidance tailored to their financial and tax needs."}
        </p>

        <p className="mt-4">
          {lang === "es"
            ? "MRU Professional Services nació con el propósito de ofrecer un servicio profesional, cercano y personalizado, donde cada cliente puede recibir orientación clara y contar con el apoyo necesario al tomar decisiones importantes para sus finanzas o su negocio."
            : "MRU Professional Services  was founded to provide professional, approachable, and personalized service, where every client can receive clear guidance and the support they need when making important financial or business decisions."}
        </p>

      </div>
      
    </div>
  </section>

     <section className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold">
          {lang === "es" ? "¿Por qué elegir MRU?" : "Why choose MRU?"}
        </h2>
        <p className="text-slate-300 mt-3">
          {lang === "es"
            ? "Un servicio enfocado en confianza, claridad y resultados"
            : "A service focused on trust, clarity, and results"}
        </p>
      </div>

      <div className="max-w-6xl  mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: lang === "es" ? "Atención personalizada" : "Personalized attention",
            desc: lang === "es"
              ? "Cada caso es único. Recibes orientación adaptada a tu situación."
              : "Every case is unique. You receive guidance tailored to your situation.",
          },
          {
            title: lang === "es"  ? "Comunicación clara" : "Clear communication",
            desc: lang === "es" 
              ? "Explicaciones sencillas para que entiendas cada paso."
              : "Simple explanations so you understand every step.",
          },
          {
            title: lang === "es" ? "Cumplimiento y precisión" : "Compliance & Accuracy",
            desc: lang === "es"
              ? "Procesos organizados y cuidadosos, con efoque en cumplimiento y precisión."
              : "Organized and careful processes, with a focus on compliance and accuracy.",
          },
          {
            title: lang === "es" ? "Confidencialidad" : "Confidentiality",
            desc: lang === "es" 
              ? "Tu información es manejada con confidencialidad, discreción y profesionalismo."
              : "Your information is handled with confidentiality, discretion and professionalism.",
          },
        ]. map((item, index) => (
          <div
            key={item.title}
            className={`rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white/10 ${
              index % 2 === 1 ? "md:mt-8" : ""
            }`}
          >
            <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
     </section>

     <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
          {lang === "es" ? "Nuestra esencia" : "Our foundation"}
        </h2>
        <p className="text-slate-500 mt-2">
          {lang === "es"
            ? "Lo que guía nuestro trabajo y compromiso contigo"
            : "What guides our work and commitment to you"}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">

        {/* MISION */}
        <div className="bg-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
          {content.missionTitle}
        </h3>
        <p className="text-slate-600 leading-relaxed">
          {content.missionDesc}
        </p>
      </div>
        {/* VISION */}
        <div className="bg-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            {content.visionTitle}
          </h3>
          <p className="text-slate-600 leading-relaxed">
            {content.visionDesc}
          </p>
        </div>

      </div>
     </section>

      <section id="servicios" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="text-2xl font-bold mb-4">{content.serviciosSubtitle}</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {content.services.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 transition duration-300 hover-translate-y-1 hover:shadow-lg">
              <h3 className="font-semibold text-lg text-slate-900">{s.title}</h3>
              <p className="text-sm mt-2">{s.desc}</p>

              <a
                 href={
               i === 0
               ? "/services/tax-services"
               : i === 1
               ? "/services/accounting-bookkeeping"
               : i === 2
               ? "/services/irs-tax-support"
               : i === 3
               ? "/services/business-formation"
               : "/services/advisory-consulting"
            }
  className="inline-flex items-center mt-5 font-semibold text-slate-900 hover:gap-2 transition-all"
>
  {lang === "es" ? "Conoce más" : "Learn More"} →
</a>

            </div>
          ))}
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="text-sm text-slate-500 mb-2">
          {lang === "es"
            ? "Tampa, Florida. Servicios disponibles en Estados Unidos y Puerto Rico."
            : "Tampa, Florida. Serving clients across the United States and Puerto Rico."}
        </div>
        <h2 className="text-2xl font-semibold text-slate-900 mb-2">{content.contactTitle}</h2>
        <p className="mt-2 mb-6 text-sm text-slate-500 text-center">
          {lang === "es"
            ? "Cuéntame brevemente cómo puedo ayudarte."
            : "Tell me briefly how I can help."}
        </p>
        <div className="mt-6 flex justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 mx-auto max-w-md">
            <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
              <input 
                required 
                name="name"
                placeholder={content.name} 
                className="w-full border p-2 rounded" 
              />

              <input 
                required 
                type="email" 
                name="email"
                placeholder={content.email} 
                className="w-full border p-2 rounded" 
              />

              <textarea 
                required 
                name="message"
                placeholder={content.message} 
                className="w-full border p-2 rounded" 
              />

              <button 
                type="submit" 
                disabled={state.submitting}
                className="bg-slate-900 text-white px-4 py-2 rounded disabled:opacity-50"
              >
                {state.submitting
                  ? lang === "es"
                    ? "Enviando..."
                    : "Sending..."
                  :content.send}
              </button>
                
              {state.succeeded && (
                <p className="text-sm text-green-700">
                  {lang === "es"
                    ? "¡Gracias! Tu mensaje fue enviado correctamente."
                    : "Thank you! Your message was sent successfully."}
                </p>
              )}
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
            ? "Tu opinión es muy importante para MRU. Comparte tu experiencia y ayúdanos a seguir mejorando."
            : "Your feedback is very important to MRU. Share your experience and help us continue improving."}
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
          {lang === "es"
            ? "Tampa, Florida · Estados Unidos · Puerto Rico"
            : "Tampa, Florida · United States · Puerto Rico"}
        </p>
  
      </div>
    </div>

    {/* DERECHA: Redes */}
    <div className="flex flex-col items-center gap-5 md:items-end md:text-right">
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
       className="fixed bottom-2 right-2 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 rounded-full bg-green-600 p-2.5 sm:px-5 sm:py-3 text-sm sm:text-base text-white shadow-lg hover:bg-green-700 transition"
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
     <span className="hidden md:inline">
       {lang === "es" ? "Escríbeme" : "Message me"}
     </span> 
     </a>

    </div> 
  );
}